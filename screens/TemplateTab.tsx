import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import RoundButton from '../components/RoundButton';
import ScreenHeaderTemplate from '../components/ScreenHeaderTemplate';
import SearchBar from '../components/SearchBar';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { uuidv4 } from '../services/utils';
import { useStoreActions, useStoreState } from '../store';
import { RootTabScreenProps, Template } from '../types';

export default function TemplateTab({ navigation }: RootTabScreenProps<'TempalteTab'>) {
  const setNewTemplate = useStoreActions((actions) => actions.templates.setNewTemplate);
  const templates = useStoreState((state) => state.templates.templates);

  const renderItem = ({ item }: { item: Template }) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          navigation.navigate('AddTemplateScreen', { id: item.id });
        }}
        style={styles.row}>
        <View style={styles.listItem}>
          <Ionicons name="clipboard-outline" size={24} color={Colors.light.foggy} />
          <View style={{ alignItems: 'left', flex: 1, paddingLeft: 10 }}>
            <Text style={Layout.styles.h3}>{item.name}</Text>
            <Text
              style={{
                ...Layout.styles.smallText,
              }}>
              Actions: {item.actions?.length}
            </Text>
          </View>
          <Ionicons name="md-chevron-forward" size={24} color={Colors.light.foggy} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <SearchBar />
      {/* <Text style={Layout.styles.h2}>My templates</Text> */}
      <FlatList extraData={templates} data={templates} renderItem={renderItem} />

      <RoundButton
        onpress={() => {
          setNewTemplate({ name: 'New Checklist', id: uuidv4() });
          navigation.navigate('AddTemplateScreen', { id: '' });
        }}
        viewStyle={{
          bottom: 10,
          borderColor: Colors.light.primary,
          backgroundColor: Colors.light.primary,
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
    paddingHorizontal: 8,
  },
  row: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#c1becb',
    padding: 8,
    marginBottom: 8,
  },
  listItem: {
    padding: 8,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
