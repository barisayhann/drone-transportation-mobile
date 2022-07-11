import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export default function Paragraph(props) {
  return <Text style={{ fontSize: 15, lineHeight: 21, textAlign: props.textAlign ? props.textAlign : "center", marginBottom: 12, }} {...props} />
};

const styles = StyleSheet.create({

});
