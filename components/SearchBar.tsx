import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, ViewStyle } from 'react-native';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';

export default function SearchBar(props: object) {
  return (
    <View style={styles.passwordContainer}>
      <Ionicons name="ios-search-sharp" size={20} color="black" />
      <TextInput
        style={styles.inputStyle}
        autoCorrect={false}
        placeholder="Search..."
        placeholderTextColor="grey"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    margin: 10,
    height: 50,
  },
  inputStyle: {
    flex: 1,
    fontSize: 17,
  },
});
