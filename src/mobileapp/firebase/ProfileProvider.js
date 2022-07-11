import React, { createContext, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';

export const ProfileContext = createContext({});

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({ name: '', phone: '' });

  useEffect(() => {
    async function fetchProfile() {
      await firebase.app()
        .database("https://drone-transportation-mobile-default-rtdb.europe-west1.firebasedatabase.app/")
        .ref('/user_profiles/' + auth().currentUser.uid)
        .once('value')
        .then((snapshot) => setProfile(snapshot.val()));
    }
    fetchProfile();
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        updateProfilePhone: async (phone) => {
          await firebase.app()
            .database("https://drone-transportation-mobile-default-rtdb.europe-west1.firebasedatabase.app/")
            .ref('/user_profiles/' + auth().currentUser.uid)
            .update({ phone: phone })
            .then(() => console.log("Data updated."));
          setProfile({ ...profile, phone: phone });
        }
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
};
