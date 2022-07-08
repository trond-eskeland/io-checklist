import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableHighlight, FlatList } from 'react-native';

import InboxListItem from '../components/InboxListItem';
import ScreenHeaderTemplate from '../components/ScreenHeaderTemplate';
import { Text, View } from '../components/Themed';
import Layout from '../constants/Layout';
import { RootTabScreenProps } from '../types';

export default function InboxTab({ navigation }: RootTabScreenProps<'InboxTab'>) {
  const tasks = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      icon: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Fire Hose Service',
      project: 'XY Fire Department',
      due: 'Monday',
      color: 'red',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      icon: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Valve Inspection',
      project: 'Client XZY',
      due: 'Tuesday',
      color: 'blue',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      icon: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Prepare Birthday PArty',
      project: 'Personal',
      due: 'Friday',
      color: 'green',
    },
  ];

  return (
    <View style={styles.container}>
      <ScreenHeaderTemplate title="Inbox" />
      <FlatList
        data={tasks}
        renderItem={({ item, index, separators }) => (
          <InboxListItem item={item} index={index} separators={separators} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
});
