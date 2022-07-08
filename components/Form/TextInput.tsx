import { ColorValue, StyleSheet } from 'react-native';

import { Text, View, TextInput } from '../Themed';

type TextInputFormProps = {
  label?: string;
  value?: string;
  color?: ColorValue;
  disabled?: boolean;
  onPress?: () => void;
  onChangeText?: (text: string) => void;
  preview?: boolean;
};

export default function TextInputForm(props: TextInputFormProps) {
  const Control = (props: TextInputFormProps) => {
    const { disabled, value, onChangeText } = props;
    return (
      <View style={styles.container}>
        <TextInput
          editable={!disabled}
          style={styles.textInput}
          value={value || ''}
          onChangeText={onChangeText}
        />
      </View>
    );
  };

  if (props.preview) {
    return (
      <View style={styles.preview}>
        <Text style={styles.previewText}>{props.label ? props.label : 'Text input'}</Text>
        <Control disabled {...props} />
      </View>
    );
  }

  return (
    <View style={styles.preview}>
      {props.label && <Text style={styles.previewText}>{props.label}</Text>}
      <Control {...props} />
    </View>
  );
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
