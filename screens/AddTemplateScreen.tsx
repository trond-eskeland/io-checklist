import { template } from '@babel/core';
import { Ionicons } from '@expo/vector-icons';
import { useLinkProps } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';

import Button from '../components/Button';
import TextInput from '../components/Form/TextInput';
import componentsMapper from '../components/Form/componentsMapper';
import RoundButton from '../components/RoundButton';
import SwipeOut from '../components/Swipeout';
import { View, SafeAreaView, Text } from '../components/Themed';
import { uuidv4 } from '../services/utils';
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
  const removeTemplateAction = useStoreActions((actions) => actions.templates.removeTemplateAction);

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

  // const renderItem = ({ item }: { item: TemplateAction }) => {
  //   return (
  //     <ScaleDecorator>
  //       <View style={styles.row}>{componentsMapper(item)}</View>
  //     </ScaleDecorator>
  //   );
  // };

  const renderItem = ({ item, drag, isActive }: RenderItemParams<TemplateAction>) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={[styles.row, { backgroundColor: isActive ? 'red' : undefined }]}>
          <SwipeOut
            onDelete={() => removeTemplateAction({ templateId: newTemplate.id, action: item })}>
            <View style={styles.row}>{componentsMapper(item)}</View>
          </SwipeOut>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          label="Checklist name"
          value={newTemplate?.name}
          onChangeText={(text) => setNewTemplate({ ...newTemplate, name: text })}
        />
        <View style={{ flex: 1 }}>
          <DraggableFlatList
            style={{ height: '100%' }}
            data={newTemplate?.actions ? newTemplate?.actions : []}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            onDragEnd={({ data }) => setNewTemplate({ ...newTemplate, actions: data })}
          />
        </View>

        {/* <FlatList data={newTemplate?.actions ? newTemplate?.actions : []} renderItem={renderItem} /> */}
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
