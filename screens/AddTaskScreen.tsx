import { template } from '@babel/core';
import { Ionicons } from '@expo/vector-icons';
import { useLinkProps } from '@react-navigation/native';
import { DateTime } from 'luxon';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import { Chip } from 'react-native-paper';

import Button from '../components/Button';
import DatePicker from '../components/DatePicker';
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
  const newTask = useStoreState((state) => state.tasks.newTask);
  const setNewTask = useStoreActions((actions) => actions.tasks.setNewTask);
  const saveTask = useStoreActions((actions) => actions.tasks.saveTask);
  const removeTask = useStoreActions((actions) => actions.tasks.removeTask);
  const beginEditTask = useStoreActions((actions) => actions.tasks.beginEditTask);

  useEffect(() => {
    if (route.params.id) {
      beginEditTask({ id: route.params.id });
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              if (route.params.id) {
                removeTask({ id: route.params.id });
                navigation.goBack();
              }
            }}>
            <Text>Delete</Text>
          </TouchableOpacity>
        ),
      });
    } else if (!newTask?.id) {
      setNewTask({ name: 'New checlist', id: uuidv4() });
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.container}>
          <TextInput
            label="Task name"
            value={newTask?.name}
            onChangeText={(text) => setNewTask({ ...newTask, name: text })}
          />
          <Button
            onPress={() => navigation.navigate('SelectTemplateScreen', { taskId: newTask.id })}>
            Select check list
          </Button>
          <Button onPress={() => navigation.navigate('SelectDateTimeScreen', {})}>
            Select Date
          </Button>
          {/* <Text style={Layout.styles.h3}>Priority</Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingTop: 10,
            }}>
            <Chip icon="flag" mode="flat" onPress={() => console.log('Pressed')}>
              High
            </Chip>
            <Chip icon="flag" mode="flat" onPress={() => console.log('Pressed')}>
              Medium
            </Chip>
            <Chip icon="flag" mode="flat" onPress={() => console.log('Pressed')}>
              Low
            </Chip>
          </View> */}
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 15,
            }}>
            <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
              <Ionicons name="calendar" size={24} color={Colors.light.text} />
              <Text style={Layout.styles.h3}>Schedule</Text>
            </View>
            <View style={{ flexDirection: 'row', width: '50%', paddingVertical: 8 }}>
              <Ionicons name="flag" size={24} color={Colors.light.text} />
              <Text style={Layout.styles.h3}> Priority</Text>
            </View>
          </View>

          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
              <Ionicons name="ios-alarm" size={24} color={Colors.light.text} />
              <Text style={Layout.styles.h3}>Set reminder</Text>
            </View>
            <View style={{ flexDirection: 'row', width: '50%', paddingVertical: 8 }}>
              <Ionicons name="qr-code" size={24} color={Colors.light.text} />
              <Text style={Layout.styles.h3}> QR</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
              alignSelf: 'stretch',
              paddingVertical: 8,
            }}
          />
          <TextInput
            label="Project / Tag"
            value={newTask?.tag || ''}
            onChangeText={(text) => setNewTask({ ...newTask, tag: text })}
          />
          <Text style={Layout.styles.h3}>Who will be assigned this task?</Text>
        </View>

        <Button
          onPress={() => {
            if (newTask) {
              saveTask(newTask);
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
