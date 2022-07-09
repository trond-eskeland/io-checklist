import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function ScreenHeaderTemplate({
  item,
  index,
  separators,
}: {
  item: object;
  index: number;
  separators: any;
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.row}
      key={item.key}
      onPress={() => navigation.navigate('ViewArchivedTask')}>
      <View style={styles.listItem}>
        <Ionicons name="pricetag" size={18} color={item.color} />
        <View style={{ alignItems: 'left', flex: 1, paddingLeft: 10 }}>
          <Text style={Layout.styles.h3}>{item.title}</Text>
          <Text style={Layout.styles.smallText}>{item.project}</Text>
        </View>
        <Text style={{ ...Layout.styles.smallText }}>{item.due}</Text>
      </View>

      {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 8,
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome5 name="tag" size={18} color={item.color} />
            <Text style={{ ...Layout.styles.h3, paddingLeft: 8 }}> {item.title}</Text>
          </View>
          <Text style={{ ...Layout.styles.smallText, color: 'grey' }}>{item.due}</Text>
        </View>
        <Text
          style={{
            ...Layout.styles.smallText,
            paddingLeft: 33,
            paddingBottom: 8,
            color: 'grey',
          }}>
          {item.project}
        </Text> */}
    </TouchableOpacity>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  row: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#c1becb',
    padding: 8,
    marginBottom: 8,
  },
});
