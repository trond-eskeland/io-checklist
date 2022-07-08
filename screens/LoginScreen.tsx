import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Button from '../components/Button';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, TextInput, View } from '../components/Themed';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ ...Layout.styles.h2, width: '80%', paddingBottom: 25 }}>
        Share your project with your teammates
      </Text>
      <Text style={{ ...Layout.styles.lead, width: '80%' }}>
        Some projects are too big to tackle alone. Share your projects with others so you can work
        on completing them together.
      </Text>

      <TouchableOpacity style={{ width: 290, paddingTop: 75 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: Colors.light.primary,
            borderRadius: 8,
            height: 44,
            marginBottom: 16,
          }}>
          <Ionicons name="mail" size={25} color="white" style={{ marginHorizontal: 12 }} />

          <Text style={Layout.styles.lead} lightColor="white" darkColor="white">
            Continue with email
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 290 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#2f2f2f',
            borderRadius: 8,
            height: 44,
            marginBottom: 16,
          }}>
          <Image style={styles.tinyLogo} source={require('../assets/images/microsoft.png')} />

          <Text style={Layout.styles.lead} lightColor="white" darkColor="white">
            Sign in with Microsoft
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderBottomColor: 1,
    borderBottomWidth: 2,
  },
  tinyLogo: {
    marginHorizontal: 12,

    width: 25,
    height: 25,
  },
});
