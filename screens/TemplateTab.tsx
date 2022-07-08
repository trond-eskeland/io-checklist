import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import RoundButton from '../components/RoundButton';
import ScreenHeaderTemplate from '../components/ScreenHeaderTemplate';
import { Text, View } from '../components/Themed';
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
        <Text>{item.name}</Text>
        <Text>Actions: {item.actions?.length}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ScreenHeaderTemplate title="Templates" />

      {/* <Button>Jadda</Button> */}
      <FlatList extraData={templates} data={templates} renderItem={renderItem} />

      <RoundButton
        onpress={() => {
          setNewTemplate({ name: 'New Checklist' });
          navigation.navigate('AddTemplateScreen', { id: '' });
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
