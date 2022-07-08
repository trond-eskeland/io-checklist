import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, TextInput, Colo, ViewStyle } from 'react-native';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';

export default function SearchBar(props: object) {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('Login')}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}>
      <Ionicons name="people-outline" size={25} color="black" style={{ marginLeft: 15 }} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
