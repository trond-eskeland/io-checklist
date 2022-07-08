import React from 'react';
import { FlatList, ListRenderItem, StyleSheet } from 'react-native';

import Button from '../components/Button';
import RoundButton from '../components/RoundButton';
import ScreenHeaderTemplate from '../components/ScreenHeaderTemplate';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TemplateTab({ navigation }: RootTabScreenProps<'TempalteTab'>) {
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View>
        <Text>Test</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScreenHeaderTemplate title="Templates" />

      <Button>Jadda</Button>
      <FlatList data={[]} renderItem={renderItem} />
      <RoundButton onpress={() => navigation.navigate('AddTemplateScreen')}>
        <Text>x</Text>
      </RoundButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
});
