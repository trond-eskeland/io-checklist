import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, ViewStyle } from 'react-native';
import { Searchbar } from 'react-native-paper';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { Text, View } from './Themed';

export default function SearchBar(props: object) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.searchbar}>
      <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchbar: {
    margin: 15,
  },
});
