import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Paragraph, Dialog } from 'react-native-paper';

export default function JourneyDialog({ dialogVisibility, toggleDialog, stationInfo, startJourney, ...props }) {
  return (
    <Dialog style={{ ...StyleSheet.absoluteFill }} visible={dialogVisibility} onDismiss={toggleDialog} {...props}>
      <Dialog.Title>Journey Selection</Dialog.Title>
      <Dialog.Content>
        <Paragraph>{stationInfo.name}</Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={startJourney}>Done</Button>
      </Dialog.Actions>
    </Dialog>
  );
};
