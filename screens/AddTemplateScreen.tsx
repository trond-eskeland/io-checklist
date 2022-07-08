import { template } from '@babel/core';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

import Button from '../components/Button';
import TextInput from '../components/Form/TextInput';
import RoundButton from '../components/RoundButton';
import { View, SafeAreaView } from '../components/Themed';
import { useStoreActions, useStoreState } from '../store';
import { RootStackScreenProps } from '../types';

export default function AddTemplateScreen({
  navigation,
  route,
}: RootStackScreenProps<'AddTemplateScreen'>) {
  const addTemplate = useStoreState((state) => state.templates.addTemplate);
  const setAddTemplate = useStoreActions((actions) => actions.templates.setAddTemplate);

  useEffect(() => {
    if (!addTemplate?.id) {
      setAddTemplate({ id: uuidv4() });
    }
  }, []);

  const renderItem = ({ item }: { item: { name: string; control: () => JSX.Element } }) => {
    return <TouchableOpacity style={styles.row}>{item.control()}</TouchableOpacity>;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          label="Checklist name"
          value={addTemplate?.name}
          onChangeText={(text) => setAddTemplate({ ...addTemplate, name: text })}
        />
        <FlatList data={[]} renderItem={renderItem} />
        <RoundButton
          onpress={() => navigation.navigate('AddTemplateActionScreen', { id: addTemplate?.id })}
          viewStyle={{
            bottom: 60,
            borderColor: '#fb0044',
            backgroundColor: '#fb0044',
            elevation: 4,
          }}>
          <Ionicons name="add" size={40} color="#fff" />
        </RoundButton>
        <Button>Save</Button>
      </View>
    </SafeAreaView>
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
