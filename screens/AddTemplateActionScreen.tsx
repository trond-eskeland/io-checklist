import { template } from '@babel/core';
import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import Checkbox from '../components/Form/Checkbox';
import TextInput from '../components/Form/TextInput';
import ScreenHeaderTemplate from '../components/ScreenHeaderTemplate';
import { Text, View, SafeAreaView } from '../components/Themed';
import { uuidv4 } from '../services/utils';
import { useStoreActions, useStoreState } from '../store';
import { RootStackScreenProps, TemplateAction, TemplateActionOption } from '../types';

export default function AddTemplateActionScreen({
  navigation,
}: RootStackScreenProps<'AddTemplateActionScreen'>) {
  const [label, setLabel] = useState('My label');
  const newTemplate = useStoreState((state) => state.templates.newTemplate);
  const setNewTemplate = useStoreActions((actions) => actions.templates.setNewTemplate);

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
    const newAction = { title: label, options: item.options, id: uuidv4() };
    return (
      <TouchableOpacity
        onPress={() => {
          setNewTemplate({
            ...newTemplate,
            actions: newTemplate?.actions ? [...newTemplate?.actions, newAction] : [newAction],
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
      <TextInput label="Label" value={label} onChangeText={setLabel} />
      <Text>Select input form</Text>
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
