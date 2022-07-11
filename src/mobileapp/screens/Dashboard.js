import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../firebase/AuthProvider';
import { ProfileContext } from '../firebase/ProfileProvider';
import Layout from '../components/Layout';
import LogoutButton from '../components/LogoutButton';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import UserAvatar from '../components/UserAvatar';
import Divider from '../components/Divider';
import ProfileButton from '../components/ProfileButton';
import InfoButton from '../components/InfoButton';

export default function Dashboard({ navigation }) {
  const { logout } = useContext(AuthContext);
  const { profile } = useContext(ProfileContext);

  const onLogoutPressed = () => {
    return logout();
  }

  const onJourneyPressed = () => {
    navigation.navigate('JourneyScreen');
  }

  const onDInfoPressed = () => {
    navigation.navigate('DronesScreen');
  }

  const onInfoPressed = () => {
    navigation.navigate('InfoScreen');
  }

  const onLastJourneysPressed = () => {
    navigation.navigate('LastJourneyScreen');
  }

  const onProfilePressed = () => {
    navigation.navigate('ProfileScreen');
  }

  return (
    <Layout>
      <LogoutButton logout={onLogoutPressed} />
      <InfoButton goInfo={onInfoPressed} />
      <UserAvatar label={profile.name.split(' ').shift().charAt(0) + profile.name.split(' ').pop().charAt(0)} size={92} />
      <Header>{profile.name}</Header>
      <Paragraph>You can select your destination under 'Start Journey' section.</Paragraph>
      <Paragraph>You can find more information about drones in 'Drone Informations' section.</Paragraph>
      <Divider />
      <Button mode="contained" onPress={onJourneyPressed}>Start Journey</Button>
      <Button mode="outlined" onPress={onDInfoPressed}>Drone Informations</Button>
      <Button mode="outlined" onPress={onLastJourneysPressed}>Last Journeys</Button>
      <Button mode="outlined" onPress={onProfilePressed}>Profile</Button>
    </Layout>
  )
}