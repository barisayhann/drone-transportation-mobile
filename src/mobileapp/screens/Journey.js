import React, { useContext, useEffect, useRef, useState } from 'react'
import MapView, { Marker, Polyline } from "react-native-maps"
import Geolocation from '@react-native-community/geolocation'
import { getDistance, getPreciseDistance } from 'geolib';
import { Paragraph } from 'react-native-paper';
import Layout from '../components/Layout'
import BackButton from '../components/BackButton'
import Header from '../components/Header'
import SmallHeader from '../components/SmallHeader' 
import Divider from '../components/Divider'
import Button from '../components/Button'
import CountdownTimer from '../components/CountdownTimer'
import { JourneyContext } from '../firebase/JourneyProvider';
import { zero, stations } from '../core/stations'
import { drones } from '../core/drones'

export default function Journey({ navigation }) {

  const { logJourney } = useContext(JourneyContext);

  const mapRef = useRef(null);
  const droneRef = useRef(null);

  const [from, setFrom] = useState(null);
  const [destination, setDestination] = useState(null);
  const [initialRegion, setInitialRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });
  const [routes, setRoutes] = useState([]);
  const [droneOpacity, setDroneOpacity] = useState(0);
  const [distance, setDistance] = useState(0);
  const [journeyStatus, setJourneyStatus] = useState(false);
  const [journeyDuration, setJourneyDuration] = useState(0);
  const [journeyPayment, setJourneyPayment] = useState(0);

  useEffect(() => {
    getCurrentLocation(onGetCurrentLocationCompleted);
  }, []);

  const onGetCurrentLocationCompleted = (initialRegion) => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(initialRegion, 1000);
    }
  };

  const getCurrentLocation = (onCompletedCallback) => {
    Geolocation.getCurrentPosition(
      (info) => {
        let lat = info.coords.latitude;
        let long = info.coords.longitude;

        var initialRegion = { latitude: lat, longitude: long, latitudeDelta: 0.0922, longitudeDelta: 0.0421 };
        setInitialRegion(initialRegion);

        if (onCompletedCallback) onCompletedCallback(initialRegion);
      },
      (err) => console.log(err),
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      });
  };

  const setJourneyStations = (station) => {
    if (journeyStatus) return;

    if (!from) {
      setFrom(station);
    }
    else if (!destination) {
      if (station.name !== from.name) {
        setDestination(station);

        droneRef.current.animateMarkerToCoordinate(from.coordinates, 0);

        var dis = getDistance(from.coordinates, station.coordinates);
        setDistance(dis / 1000);
      }
    }
    else {
      setRoutes([]);
      setJourneyStatus(false);
      setDroneOpacity(0);
      setDestination(null);
      setFrom(station);
    }
  };

  const setJourney = () => {
    if (from && destination) {
      var routeLine = (
        <Polyline
          key={"PL" + from.name}
          coordinates={[from.coordinates, destination.coordinates]} //specify our coordinates
          strokeColor={"#333"}
          strokeWidth={3}
          lineDashPattern={[1]}
        />
      );
      setRoutes([routeLine]);
      setJourneyStatus(true);
      setDroneOpacity(1);

      var drone = drones.find(d => d.id == from.droneId);
      var kms = drone.speed / 3600;
      var duration = ((getDistance(from.coordinates, destination.coordinates) / 1000) / kms) * 1000;
      var now = new Date().getTime();

      console.log(duration);
      console.log(duration + now);

      setJourneyDuration(duration + now);
      setJourneyPayment(distance * drone.cost);

      droneRef.current.animateMarkerToCoordinate(destination.coordinates, duration);

      setTimeout(() => {
        setJourneyStatus(false);
        logJourney(from.name, destination.name, journeyPayment, drone.model);
        alert("Journey Complete!");
        navigation.navigate('LastJourneyScreen');
      }, duration);
    }
    else {
      setRoutes([]);
      setJourneyStatus(false);
    }
  };

  return (
    <Layout>
      {!journeyStatus && <BackButton goBack={navigation.goBack} />}
      <Header>Journey</Header>
      <Divider />
      <MapView style={{ width: '100%', height: '40%', borderWidth: 1 }} ref={mapRef} >
        <Marker coordinate={initialRegion} pinColor={"#560CCE"} />
        {stations && stations.map((station, index) =>
          <Marker
            key={index}
            coordinate={station.coordinates}
            image={require('../assets/station2.png')}
            onPress={() => setJourneyStations(station)} />
        )}
        {routes && routes.map(r => r)}
        <Marker.Animated
          ref={droneRef}
          coordinate={(from ? from.coordinates : zero.coordinates)}
          opacity={droneOpacity}
          image={require('../assets/moving_drone.png')} />
      </MapView>
      <Divider />
      <SmallHeader>Time</SmallHeader>
      <CountdownTimer targetDate={journeyDuration} />
      <SmallHeader>Payment</SmallHeader>
      <Paragraph>{journeyPayment.toFixed(2)} EUR</Paragraph>
      <SmallHeader>From</SmallHeader>
      <Paragraph>{from ? from.name : ""}</Paragraph>
      <SmallHeader>Destination</SmallHeader>
      <Paragraph>{destination ? destination.name : ""}</Paragraph>
      <SmallHeader>Distance</SmallHeader>
      <Paragraph>{`${distance.toFixed(1)} KM`}</Paragraph>
      <SmallHeader>Drone</SmallHeader>
      <Paragraph>{from ? drones.find(d => d.id == from.droneId)?.model : ""}</Paragraph>
      <Button
        mode="contained"
        onPress={() => setJourney()}
        disabled={(!from || !destination ) || journeyStatus}
      >
        Start Journey
      </Button>
    </Layout>
  )
}
