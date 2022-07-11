import React from 'react'
import Layout from '../components/Layout'
import BackButton from '../components/BackButton'
import Header from '../components/Header'
import Divider from '../components/Divider'
import DroneCard from '../components/DroneCard'
import { drones } from '../core/drones'

export default function Drones({ navigation }) {

  return (
    <Layout>
      <BackButton goBack={navigation.goBack} />
      <Header>Drones</Header>
      <Divider />
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
    </Layout>
  )
}