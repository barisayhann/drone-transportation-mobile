import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme';

export default function DroneCard({ avatar, model, speed, capacity, year, cost }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Image source={avatar} style={styles.cardAvatar} />
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.cardText}>Model: {model}</Text>
        <Text style={styles.cardText}>Speed: {speed} km/h</Text>
        <Text style={styles.cardText}>Capacity: {capacity} Person</Text>
        <Text style={styles.cardText}>Year: {year}</Text>
        <Text style={styles.cardText}>Cost: {cost} EUR/km</Text>
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
    width: 92,
    height: 92,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 75
  }
});
