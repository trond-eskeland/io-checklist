import { template } from '@babel/core';
import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import Checkbox from '../components/Form/Checkbox';
import TextInput from '../components/Form/TextInput';
import ScreenHeaderTemplate from '../components/ScreenHeaderTemplate';
import { Text, View, SafeAreaView } from '../components/Themed';
import { useStoreActions, useStoreState } from '../store';
import { RootStackScreenProps, TemplateAction, TemplateActionOption } from '../types';

export default function AddTemplateActionScreen({
  navigation,
}: RootStackScreenProps<'AddTemplateActionScreen'>) {
  const addTemplate = useStoreState((state) => state.templates.addTemplate);
  const setAddTemplate = useStoreActions((actions) => actions.templates.setAddTemplate);

  const controls: { name: string; options: TemplateActionOption; control: () => JSX.Element }[] = [
    {
      name: 'Input',
      options: { type: 'input', multiLine: false },
      control: () => <TextInput preview />,
    },
    {
      name: 'Checkbox',
      options: { type: 'checkbox' },
      control: () => <Checkbox color="red" checked preview />,
    },
  ];
  const renderItem = ({
    item,
  }: {
    item: { name: string; options: TemplateActionOption; control: () => JSX.Element };
  }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setAddTemplate({
            ...addTemplate,
            actions: addTemplate?.actions
              ? [...addTemplate?.actions, { title: '', options: item.options }]
              : [],
          });
          navigation.goBack();
        }}
        style={styles.row}>
        {item.control()}
      </TouchableOpacity>
    );
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
