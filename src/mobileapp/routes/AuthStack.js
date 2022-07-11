import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  PrivacyPolicy,
  TermsAndCondition
} from '../screens'

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="StartScreen">
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
      <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicy} />
      <Stack.Screen name="TermsAndConditionScreen" component={TermsAndCondition} />
    </Stack.Navigator>
  );
};

export default AuthStack;
