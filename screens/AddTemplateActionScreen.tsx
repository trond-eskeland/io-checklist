import { template } from '@babel/core';
import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import Checkbox from '../components/Form/Checkbox';
import TextInput from '../components/Form/TextInput';
import ScreenHeaderTemplate from '../components/ScreenHeaderTemplate';
import { Text, View, SafeAreaView } from '../components/Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { uuidv4 } from '../services/utils';
import { useStoreActions, useStoreState } from '../store';
import { RootStackScreenProps, TemplateAction, TemplateActionOption } from '../types';

export default function AddTemplateActionScreen({
  navigation,
}: RootStackScreenProps<'AddTemplateActionScreen'>) {
  const [label, setLabel] = useState('');
  const newTemplate = useStoreState((state) => state.templates.newTemplate);
  const setNewTemplate = useStoreActions((actions) => actions.templates.setNewTemplate);

  const controls: { name: string; options: TemplateActionOption; control: () => JSX.Element }[] = [
    {
      name: 'Textfield',
      options: { type: 'input', multiLine: false },
      control: () => <TextInput label={label} />,
    },
    {
      name: 'Numbers',
      options: { type: 'input', multiLine: false },
      control: () => <TextInput label={label} keyboardtype={'numeric'} />,
    },
    {
      name: 'Checkbox',
      options: { type: 'checkbox' },
      control: () => <Checkbox color="green" checked label={label} />,
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
        <Text style={Layout.styles.h3}>{item.name}</Text>

        {item.control()}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={Layout.styles.h2}>Step 1.</Text>

      <TextInput
        label="Describe action that needs to be taken"
        value={label}
        onChangeText={setLabel}
        autofocus={true}
        placeholder={'Type a label for the input form...'}
      />
      <Text style={Layout.styles.lead}>Select input form</Text>
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
    borderRadius: 8,
    marginBottom: 8,
    borderColor: Colors.light.foggy,
    borderWidth: 1,
    borderRadius: 1,
    padding: 8,
    marginBottom: 8,
  },
});
