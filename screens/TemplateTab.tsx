import React from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';

import Button from '../components/Button';
import RoundButton from '../components/RoundButton';
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

      <Button>Jadda</Button>
      <FlatList data={[]} renderItem={renderItem} />
      <RoundButton>
        <Text>x</Text>
      </RoundButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
});
