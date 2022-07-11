import React from 'react';
import { Text, View } from 'react-native';

const DateTimeDisplay = ({ value, type }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text>{value} </Text>
      <Text>{type}</Text>
    </View>
  );
};

export default DateTimeDisplay;
