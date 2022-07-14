import React from 'react'
import Layout from '../components/Layout'
import BackButton from '../components/BackButton'
import Header from '../components/Header'
import Divider from '../components/Divider'
import DroneCard from '../components/DroneCard'
import { drones } from '../core/drones'
import { ScrollView } from 'react-native'
import InfoButton from '../components/InfoButton';

export default function Drones({ navigation }) {
  const onInfoPressed = () => {
    navigation.navigate('InfoScreen');
  }

  return (

    
    <Layout>
      <InfoButton goInfo={onInfoPressed} />
      <BackButton goBack={navigation.goBack} />
      <Header>Drones</Header>
      <Divider />
      <ScrollView style={{ width:"100%" }}>
      {drones && drones.map((drone, index) => {
        return (
          
          <DroneCard
            key={index}
            avatar={drone.avatar}
            model={drone.model}
            speed={drone.speed}
            capacity={drone.capacity}
            year={drone.year}
            cost={drone.cost}
          />
        
        );
      })}
    </ScrollView>
    </Layout>
  )
}