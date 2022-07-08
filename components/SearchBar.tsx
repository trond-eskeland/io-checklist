import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, ViewStyle } from 'react-native';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { Text, View } from './Themed';

export default function SearchBar(props: object) {
  return (
    <View style={styles.searchbar}>
      <Ionicons name="ios-search-sharp" size={20} color="black" />
      <TextInput
        style={Layout.styles.p}
        autoCorrect={false}
        placeholder="Search..."
        placeholderTextColor={Colors.light.foggy}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchbar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    margin: 10,
    height: 50,
  },
});
