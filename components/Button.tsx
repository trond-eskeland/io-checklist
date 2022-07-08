import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';

export default function Button(props: {
  viewStyle?: ViewStyle;
  textStyle?: ViewStyle;
  children: string | JSX.Element;
  onpress?: () => void;
}) {
  const { viewStyle, textStyle, children, onpress } = props;

  return (
    <TouchableOpacity onPress={onpress} style={[styles.container, viewStyle]}>
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
    minWidth: 150,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  text: {
    padding: 2,
  },
});
