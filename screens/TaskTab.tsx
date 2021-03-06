import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import RoundButton from '../components/RoundButton';
import ScreenHeaderTemplate from '../components/ScreenHeaderTemplate';
import { Text, View } from '../components/Themed';
import { uuidv4 } from '../services/utils';
import { useStoreActions, useStoreState } from '../store';
import { RootTabScreenProps, Task } from '../types';

export default function TaskTab({ navigation }: RootTabScreenProps<'TempalteTab'>) {
  const setNewTask = useStoreActions((actions) => actions.tasks.setNewTask);
  const tasks = useStoreState((state) => state.tasks.tasks);

  const renderItem = ({ item }: { item: Task }) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          navigation.navigate('AddTaskScreen', { id: item.id });
        }}
        style={styles.row}>
        <Text>{item.name}</Text>
        <Text>Pri: {item.pritority}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ScreenHeaderTemplate title="Tasks" />

      <FlatList extraData={tasks} data={tasks} renderItem={renderItem} />

      <RoundButton
        onpress={() => {
          setNewTask({ name: 'New Task', id: uuidv4() });
          navigation.navigate('AddTaskScreen', { id: '' });
        }}
        viewStyle={{
          bottom: 10,
          borderColor: '#fb0044',
          backgroundColor: '#fb0044',
          elevation: 4,
        }}>
        <Ionicons name="add" size={40} color="#fff" />
      </RoundButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  row: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#c1becb',
    padding: 8,
    marginBottom: 8,
  },
});
