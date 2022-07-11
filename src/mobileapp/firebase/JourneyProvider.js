import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';

export const JourneyContext = createContext({});

export const JourneyProvider = ({ children }) => {
  const [journeys, setJourneys] = useState();

  return (
    <JourneyContext.Provider
      value={{
        journeys,
        readJourneys: async () => {
          try {
            await firebase.app()
              .database("https://drone-transportation-mobile-default-rtdb.europe-west1.firebasedatabase.app/")
              .ref('/last_journeys/' + auth().currentUser.uid)
              .limitToLast(3)
              .once('value')
              .then((snapshot) => setJourneys(snapshot.val()));
          } catch (e) {
            console.error(e);
          }
        },
        logJourney: async (from, destination, payment, drone) => {
          try {
            const newRef =  await firebase.app()
              .database("https://drone-transportation-mobile-default-rtdb.europe-west1.firebasedatabase.app/")
              .ref('/last_journeys/' + auth().currentUser.uid)
              .push();

            await newRef
              .set({ from: from, destination: destination, payment: payment, drone: drone })
              .then(() => console.log('Data set.'));
          } catch (e) {
            console.error(e);
          }
        }
      }}
    >
      {children}
    </JourneyContext.Provider>
  );
};
