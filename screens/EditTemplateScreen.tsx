import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import Checkbox from '../components/Form/Checkbox';
import TextInput from '../components/Form/TextInput';
import ScreenHeaderTemplate from '../components/ScreenHeaderTemplate';
import { Text, View } from '../components/Themed';

export default function TemplateTab() {
  const controls = [
    {
      name: 'Input',
      control: () => <TextInput preview />,
    },
    {
      name: 'Checkbox',
      control: () => <Checkbox color="red" checked preview />,
    },
  ];
  const renderItem = ({ item }: { item: { name: string; control: () => JSX.Element } }) => {
    return <TouchableOpacity style={styles.row}>{item.control()}</TouchableOpacity>;
  };

  return (
    <View style={styles.container}>
      <FlatList data={controls} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  row: {
    padding: 8,
    backgroundColor: '#edebee',
    borderRadius: 8,
    marginBottom: 8,
  },
});
