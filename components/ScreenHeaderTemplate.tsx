import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function ScreenHeaderTemplate({ title }: { title: string }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingTop: 8,
        paddingBottom: 16,
        alignItems: 'center',
      }}>
      <Text style={Layout.styles.h1}>{title}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name="sliders-h" size={24} color="black" />
      </View>
    </View>
  );
}
