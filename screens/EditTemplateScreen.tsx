import React from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';

import ScreenHeaderTemplate from '../components/ScreenHeaderTemplate';
import { Text, View } from '../components/Themed';

export default function TemplateTab() {
  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>Test</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScreenHeaderTemplate title="Templates" />
      <FlatList data={[]} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
});
