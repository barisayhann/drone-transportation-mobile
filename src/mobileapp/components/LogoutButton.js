import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function LogoutButton({ logout }) {
  return (
    <TouchableOpacity onPress={logout} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/logout_thin.png')}
      />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
});
