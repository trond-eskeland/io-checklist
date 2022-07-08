import { template } from '@babel/core';
import { Ionicons } from '@expo/vector-icons';
import { useLinkProps } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

import Button from '../components/Button';
import TextInput from '../components/Form/TextInput';
import componentsMapper from '../components/Form/componentsMapper';
import RoundButton from '../components/RoundButton';
import { View, SafeAreaView, Text } from '../components/Themed';
import { useStoreActions, useStoreState } from '../store';
import { RootStackScreenProps, TemplateAction } from '../types';

export default function AddTemplateScreen({
  navigation,
  route,
}: RootStackScreenProps<'AddTemplateScreen'>) {
  const newTemplate = useStoreState((state) => state.templates.newTemplate);
  const setNewTemplate = useStoreActions((actions) => actions.templates.setNewTemplate);
  const saveTemplate = useStoreActions((actions) => actions.templates.saveTemplate);
  const removeTemplate = useStoreActions((actions) => actions.templates.removeTemplate);
  const beginEditTemplate = useStoreActions((actions) => actions.templates.beginEditTemplate);

  useEffect(() => {
    if (route.params.id) {
      beginEditTemplate({ id: route.params.id });
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              if (route.params.id) {
                removeTemplate({ id: route.params.id });
                navigation.goBack();
              }
            }}>
            <Text>Delete</Text>
          </TouchableOpacity>
        ),
      });
    } else if (!newTemplate?.id) {
      setNewTemplate({ name: 'New checlist', id: uuidv4() });
    }
  }, []);

  const renderItem = ({ item }: { item: TemplateAction }) => {
    return <View style={styles.row}>{componentsMapper(item)}</View>;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          label="Checklist name"
          value={newTemplate?.name}
          onChangeText={(text) => setNewTemplate({ ...newTemplate, name: text })}
        />
        <FlatList data={newTemplate?.actions ? newTemplate?.actions : []} renderItem={renderItem} />
        <RoundButton
          onpress={() => navigation.navigate('AddTemplateActionScreen', { id: newTemplate?.id })}
          viewStyle={{
            bottom: 60,
            borderColor: '#fb0044',
            backgroundColor: '#fb0044',
            elevation: 4,
          }}>
          <Ionicons name="add" size={40} color="#fff" />
        </RoundButton>
        <Button
          onpress={() => {
            if (newTemplate) {
              saveTemplate(newTemplate);
              navigation.goBack();
            }
          }}>
          Save
        </Button>
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
