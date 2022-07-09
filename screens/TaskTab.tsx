import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Chip } from 'react-native-paper';

import Button from '../components/Button';
import TextInputForm from '../components/Form/TextInput';
import ScreenHeaderTemplate from '../components/ScreenHeaderTemplate';
import SnackBar from '../components/SnackBar';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default function TaskTab() {
  return (
    <View style={styles.container}>
      <Text style={Layout.styles.h3}>Priority</Text>
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
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingTop: 15,
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name="calendar" size={24} color={Colors.light.text} />
          <Text style={Layout.styles.h3}>Schedule</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name="flag" size={24} color={Colors.light.text} />
          <Text style={Layout.styles.h3}> Priority</Text>
        </View>
      </View>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name="ios-alarm" size={24} color={Colors.light.text} />
          <Text style={Layout.styles.h3}>Set reminder</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
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
      <Text style={Layout.styles.h3}>Who will be assigned this task?</Text>
      <Chip icon="alarm" mode="flat" onPress={() => console.log('Pressed')}>
        Low
      </Chip>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
