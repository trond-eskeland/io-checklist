import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';

export default function RoundButton(props: {
  viewStyle?: ViewStyle;
  children: JSX.Element;
  onpress?: () => void;
}) {
  const { viewStyle, children, onpress } = props;
  return (
    <TouchableOpacity onPress={onpress} style={[styles.container, viewStyle]}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
});
