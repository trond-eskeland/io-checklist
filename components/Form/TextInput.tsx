import { Ionicons } from '@expo/vector-icons';
import { ColorValue, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../../constants/Colors';
import { Text, View, TextInput } from '../Themed';

type TextInputFormProps = {
  color?: ColorValue;
  disabled?: boolean;
  onPress?: () => void;
  preview?: boolean;
};

export default function TextInputForm(props: TextInputFormProps) {
  const Control = (props: TextInputFormProps) => {
    const { disabled, onPress } = props;
    return (
      <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.container}>
        <TextInput editable={!disabled} style={styles.textInput} />
      </TouchableOpacity>
    );
  };

  if (props.preview) {
    return (
      <View style={styles.preview}>
        <Text style={styles.previewText}>Text input</Text>
        <Control disabled {...props} />
      </View>
    );
  }
  return <Control {...props} />;
}

const styles = StyleSheet.create({
  container: {},
  textInput: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 40,
    alignItems: 'center',
    borderRadius: 4,
    padding: 4,
  },
  preview: {
    padding: 8,
  },
  previewText: {
    paddingBottom: 8,
  },
});
