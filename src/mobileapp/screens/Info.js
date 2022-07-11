import React from 'react';
import Layout from '../components/Layout';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Divider from '../components/Divider';

export default function Dashboard({ navigation }) {
  const onTermsAndConditionPressed = () => {
    navigation.navigate('TermsAndConditionScreen');
  }

  const onPrivacyPolicyPressed = () => {
    navigation.navigate('PrivacyPolicyScreen');
  }

  return (
    <Layout>
      <BackButton goBack={navigation.goBack} />
      <Header>About</Header>
      <Divider />
      <Paragraph>You can find more information about our Privacy Policy below.</Paragraph>
      <Button mode="outlined" onPress={onPrivacyPolicyPressed}>Privacy Policy</Button>
      <Paragraph>You can find more information about our Terms &amp; Conditions below.</Paragraph>
      <Button mode="outlined" onPress={onTermsAndConditionPressed}>Terms &amp; Conditions</Button>
    </Layout>
  )
}