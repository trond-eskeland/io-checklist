import React from 'react';
import { StyleSheet } from 'react-native';

import ScreenHeaderTemplate from '../components/ScreenHeaderTemplate';
import { Text, View } from '../components/Themed';

export default function HistoryTab() {
  return (
    <View style={styles.container}>
      <ScreenHeaderTemplate title="History" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
});
