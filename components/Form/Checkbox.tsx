import { Ionicons } from '@expo/vector-icons';
import { ColorValue, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import { Text, View } from '../Themed';

type CheckBoxProps = {
  label?: string;
  color?: ColorValue;
  checked?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  preview?: boolean;
};

const Control = (props: CheckBoxProps) => {
  const { color = 'black', checked, disabled, onPress } = props;
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.container}>
      <View style={[styles.checkbox, { borderColor: color }]}>
        {checked && <Ionicons name="checkmark" size={24} color={color} />}
      </View>
    </TouchableOpacity>
  );
};

export default function Checkbox(props: CheckBoxProps) {
  if (props.preview) {
    return (
      <View style={styles.preview}>
        <Text>Checkbox</Text>
        <Control disabled {...props} />
      </View>
    );
  }
  return (
    <View style={styles.preview}>
      {!!props.label && <Text style={[styles.previewText, Layout.styles.lead]}>{props.label}</Text>}
      <Control disabled {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  checkbox: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    width: 30,
    height: 30,
    alignItems: 'center',
    borderRadius: 4,
    padding: 2,
  },
  preview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  previewText: {
    paddingBottom: 8,
    color: Colors.light.foggy,
  },
});
