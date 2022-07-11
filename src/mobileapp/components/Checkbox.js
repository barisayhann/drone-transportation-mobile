import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Checkbox as CheckBox, Text } from 'react-native-paper'

export default function Checkbox({ text, ...props }) {
  return (
    <View>
      <CheckBox.Item label={text} labelStyle={{textAlign: "left"}} position="leading" {...props} />
    </View>
  );
};
