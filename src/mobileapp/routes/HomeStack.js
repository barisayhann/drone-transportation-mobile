import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Dashboard,
  Journey,
  Drones,
  Profile,
  LastJourneys,
  PrivacyPolicy,
  TermsAndCondition,
  Info
} from '../screens';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="JourneyScreen" component={Journey} />
      <Stack.Screen name="DronesScreen" component={Drones} />
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="LastJourneyScreen" component={LastJourneys} />
      <Stack.Screen name="InfoScreen" component={Info} />
      <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicy} />
      <Stack.Screen name="TermsAndConditionScreen" component={TermsAndCondition} />
    </Stack.Navigator>
  );
};

export default HomeStack;
