import React from 'react'
import { StyleSheet } from 'react-native'
import { Divider as PaperDivider } from 'react-native-paper'

export default function Divider(props) {
  return <PaperDivider style={styles.divider} {...props} />
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 1,
  },
});
