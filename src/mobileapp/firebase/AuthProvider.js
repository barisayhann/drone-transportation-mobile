import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.error(e);
          }
        },
        register: async (name, email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
            await firebase.app()
              .database("https://drone-transportation-mobile-default-rtdb.europe-west1.firebasedatabase.app/")
              .ref('/user_profiles')
              .set({ [auth().currentUser.uid] : { name: name, phone: '' }})
              .then(() => console.log('Data set.'));
          } catch (e) {
            console.error(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
