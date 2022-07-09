import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';

export default function Button(props: {
  viewStyle?: ViewStyle;
  textStyle?: ViewStyle;
  children: string | JSX.Element;
  onPress?: () => void;
}) {
  const { viewStyle, textStyle, children, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, viewStyle]}>
      {typeof children === 'string' ? (
        <Text style={[styles.text, textStyle]}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
    height: 50,
    borderRadius: 8,
  },
  text: {
    padding: 2,
  },
});
