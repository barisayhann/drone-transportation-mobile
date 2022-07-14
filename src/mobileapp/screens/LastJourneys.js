import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import BackButton from '../components/BackButton'
import Header from '../components/Header'
import Divider from '../components/Divider'
import JourneyCard from '../components/JourneyCard'
import { JourneyContext } from '../firebase/JourneyProvider'
import InfoButton from '../components/InfoButton';

export default function LastJourneys({ navigation }) {
  const onInfoPressed = () => {
    navigation.navigate('InfoScreen');
  }
  const { journeys, readJourneys } = useContext(JourneyContext);

  useEffect(() => {
    readJourneys();
  }, []);

  return (
    <Layout>
      <InfoButton goInfo={onInfoPressed} />
      <BackButton goBack={navigation.goBack} />
      <Header>Last Journeys</Header>
      <Divider />
      {journeys && Object.keys(journeys).map((key, index) => {
        const journey = journeys[key];
        return (
          <JourneyCard
            key={index}
            from={journey.from}
            destination={journey.destination}
            drone={journey.drone}
            payment={journey.payment}
          />
        );
      })}
    </Layout>
  )
}