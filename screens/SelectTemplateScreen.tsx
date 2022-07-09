import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import RoundButton from '../components/RoundButton';
import ScreenHeaderTemplate from '../components/ScreenHeaderTemplate';
import { Text, View } from '../components/Themed';
import { uuidv4 } from '../services/utils';
import { useStoreActions, useStoreState } from '../store';
import { RootTabScreenProps, Template } from '../types';

export default function SelectTemplateScreen({
  navigation,
  route,
}: RootTabScreenProps<'TempalteTab'>) {
  const newTask = useStoreState((state) => state.tasks.newTask);
  const setNewTask = useStoreActions((actions) => actions.tasks.setNewTask);
  const templates = useStoreState((state) => state.templates.templates);

  const renderItem = ({ item }: { item: Template }) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          // navigation.navigate('AddTemplateScreen', { id: item.id });
          setNewTask({ ...newTask, template: item });
          navigation.goBack();
        }}
        style={styles.row}>
        <Text>{item.name}</Text>
        <Text>Actions: {item.actions?.length}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList extraData={templates} data={templates} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  row: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#c1becb',
    padding: 8,
    marginBottom: 8,
  },
});
