import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../firebase/AuthProvider';
import { ProfileContext } from '../firebase/ProfileProvider';
import Layout from '../components/Layout';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import Button from '../components/Button';
import UserAvatar from '../components/UserAvatar';
import TextInput from '../components/TextInput';

export default function Profile({ navigation }) {

  const { user } = useContext(AuthContext);
  const { profile, updateProfilePhone } = useContext(ProfileContext);
  
  const [phone, setPhone] = useState({ value: '', error: '' });

  const onSaveChanges = () => {
    return updateProfilePhone(phone.value);
  }

  return (
    <Layout>
      <BackButton goBack={navigation.goBack} />
      <UserAvatar label={profile.name.split(' ').shift().charAt(0) + profile.name.split(' ').pop().charAt(0)} size={128} />
      <Header>{profile.name}</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={user.email}
        onChangeText={(text) => { }}
        disabled={true}
      />
      <TextInput
        label="Name"
        returnKeyType="next"
        value={profile.name}
        onChangeText={(text) => { }}
        disabled={true}
      />
      <TextInput
        label="Phone"
        returnKeyType="next"
        value={phone.value !== '' ? phone.value : profile.phone}
        onChangeText={(text) => setPhone({ value: text, error: '' })}
        error={!!phone.error}
        errorText={phone.error}
        keyboardType="phone-pad"
      />
      <TextInput
        label="Password"
        returnKeyType="next"
        value={"1234567"}
        onChangeText={(text) => { }}
        disabled={true}
        secureTextEntry={true}
      />
      <Button mode="contained" onPress={onSaveChanges}>
        Save Changes
      </Button>
    </Layout>
  )
}