import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, StyleSheet } from 'react-native';

import Button from '../components/Button';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default function ViewArchivedTask() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={Layout.styles.h1}>Report</Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          alignSelf: 'stretch',
          paddingVertical: 8,
        }}
      />
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingTop: 15,
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name="ios-folder-outline" size={24} color={Colors.light.text} />
          <Text style={Layout.styles.h3}>project-name</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name="pricetag" size={24} color={Colors.light.text} />
          <Text style={Layout.styles.h3}> tag-name</Text>
        </View>
      </View>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name="person" size={24} color={Colors.light.text} />
          <Text style={Layout.styles.h3}>completed-by</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name="calendar" size={24} color={Colors.light.text} />
          <Text style={Layout.styles.h3}> 2022-07-07</Text>
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
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingTop: 15,
        }}>
        <Button
          viewStyle={{ backgroundColor: Colors.light.primary }}
          textStyle={{ color: Colors.light.background }}>
          Export
        </Button>
        <Button
          viewStyle={{ backgroundColor: Colors.light.foggy }}
          textStyle={{ color: Colors.light.background }}>
          Delete
        </Button>
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 25,
  },
});
