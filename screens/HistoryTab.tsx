import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, SectionList, StyleSheet } from 'react-native';

import HistoryListItem from '../components/HistoryListItem';
import ScreenHeaderTemplate from '../components/ScreenHeaderTemplate';
import SearchBar from '../components/SearchBar';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default function HistoryTab() {
  const newTaskData = [
    {
      title: 'XY Fire Department',
      color: 'red',
      data: [
        {
          id: '58694a0f-3da1-4711f-bd6-145571e29d72',
          icon: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Task 1',
          project: 'XY Fire Department',
          due: '2022-07-07',
        },
        {
          id: '58694a0f-3da1-4711f-bd6-145571e29d72',
          icon: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Other task',
          project: 'XY Fire Department',
          due: '2022-07-07',
        },
        {
          id: '58694a0f-3da1-4711f-bd6-145571e29d72',
          icon: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'yea',
          project: 'XY Fire Department',
          due: '2022-07-07',
        },
        {
          id: '58694a0f-3da1-4711f-bd6-145571e29d72',
          icon: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'oage',
          project: 'XY Fire Department',
          due: '2022-07-07',
        },
        {
          id: '58694a0f-3da1-4711f-bd6-145571e29d72',
          icon: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'okok',
          project: 'XY Fire Department',
          due: '2022-07-07',
        },
      ],
    },
    {
      title: 'Personal',
      color: 'orange',
      data: [
        {
          id: '58694a0f-3da1-4711f-bd6-145571e29d72',
          icon: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Other stuff',
          project: 'Personal',
          due: '2022-07-07',
        },
        {
          id: '58694a0f-3da1-4711f-bd6-145571e29d72',
          icon: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Other stuff',
          project: 'Personal',
          due: '2022-07-07',
        },
        {
          id: '58694a0f-3da1-4711f-bd6-145571e29d72',
          icon: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Other stuff',
          project: 'Personal',
          due: '2022-07-07',
        },
        {
          id: '58694a0f-3da1-4711f-bd6-145571e29d72',
          icon: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Other stuff',
          project: 'Personal',
          due: '2022-07-07',
        },
        {
          id: '58694a0f-3da1-4711f-bd6-145571e29d72',
          icon: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Other stuff',
          project: 'Personal',
          due: '2022-07-07',
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <SearchBar />
      {/* <ScreenHeaderTemplate title="History" /> */}
      <SectionList
        sections={[...newTaskData]}
        renderItem={({ item }) => <HistoryListItem item={item} />}
        renderSectionHeader={({ section }) => (
          <Text style={{ ...Layout.styles.h2, paddingLeft: 10, paddingBottom: 15 }}>
            <Ionicons name="pricetag" size={18} color={section.color} /> {section.title}
          </Text>
        )}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled
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
