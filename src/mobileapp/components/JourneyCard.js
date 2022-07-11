import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme';

export default function JourneyCard({ from, destination, drone, payment }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardRight}>
        <Text style={styles.cardText}>From: {from}</Text>
        <Text style={styles.cardText}>Destination: {destination}</Text>
        <Text style={styles.cardText}>Drone: {drone}</Text>
        <Text style={styles.cardText}>Payment: {payment} EUR</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
    paddingVertical: 2,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 5
  },
  cardText: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
  cardLeft: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardRight: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  cardAvatar: {
    width: 128,
    height: 128,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 75
  }
});
