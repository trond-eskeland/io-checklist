import { template } from '@babel/core';
import { Ionicons } from '@expo/vector-icons';
import { useLinkProps } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import Toast from 'react-native-root-toast';
import Snackbar from 'react-native-snackbar';

import Button from '../components/Button';
import TextInput from '../components/Form/TextInput';
import componentsMapper from '../components/Form/componentsMapper';
import RoundButton from '../components/RoundButton';
import SwipeOut from '../components/Swipeout';
import { View, SafeAreaView, Text } from '../components/Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
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
      setNewTemplate({ name: '', id: uuidv4() });
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
            <View></View>
            <View>{componentsMapper(item)}</View>
          </SwipeOut>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* <Text style={{ ...Layout.styles.lead, padding: 10 }}>Metadata</Text> */}
        <View style={{ margin: 15 }}>
          <TextInput
            label="Checklist template name:"
            autofocus={true}
            placeholder={'Enter a name for your new template...'}
            value={newTemplate?.name}
            onChangeText={(text) => setNewTemplate({ ...newTemplate, name: text })}
          />
        </View>

        <View
          style={{
            flex: 1,
            paddingTop: 25,
          }}>
          <Text style={{ ...Layout.styles.lead, textAlign: 'center' }}>Checklist Actions</Text>
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
            borderColor: Colors.light.primary,
            backgroundColor: Colors.light.primary,
            elevation: 4,
          }}>
          <Ionicons name="add" size={40} color="#fff" />
        </RoundButton>
        <Button
          onPress={() => {
            if (newTemplate) {
              saveTemplate(newTemplate);
              navigation.goBack();
              const toast = Toast.show('Checklist saved', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.CENTER,
                backgroundColor: Colors.light.secondary,
              });
            }
          }}
          viewStyle={{ backgroundColor: Colors.light.secondary, margin: 10 }}
          textStyle={{ color: 'white', ...Layout.styles.lead }}>
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
    borderRadius: 8,
    marginBottom: 8,
    borderColor: Colors.light.foggy,
    borderWidth: 1,
    padding: 8,
    marginBottom: 8,
  },
});
