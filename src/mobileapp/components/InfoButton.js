import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function InfoButton({ goInfo }) {
  return (
    <TouchableOpacity onPress={goInfo} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/info.png')}
      />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    right: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
});
