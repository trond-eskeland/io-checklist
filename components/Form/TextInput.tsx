import { ColorValue, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import { Text, View, TextInput } from '../Themed';

type TextInputFormProps = {
  label?: string;
  value?: string;
  color?: ColorValue;
  disabled?: boolean;
  onPress?: () => void;
  onChangeText?: (text: string) => void;
  preview?: boolean;
  autofocus?: boolean;
  placeholder?: string;
  keyboardtype?: undefined;
};

const Control = (props: TextInputFormProps) => {
  const { disabled, value, onChangeText } = props;
  return (
    <View style={styles.container}>
      <TextInput
        editable={!disabled}
        style={styles.textInput}
        value={value || ''}
        onChangeText={onChangeText}
        autoFocus={props.autofocus}
        placeholder={props.placeholder}
        keyboardType={props.keyboardtype || 'default'}
      />
    </View>
  );
};

export default function TextInputForm(props: TextInputFormProps) {
  if (props.preview) {
    return (
      <View style={styles.preview}>
        <Text style={[styles.previewText, Layout.styles.p]}>
          {props.label ? props.label : 'Text input'}
        </Text>
        <Control disabled {...props} />
      </View>
    );
  }

  return (
    <View style={styles.preview}>
      {!!props.label && <Text style={[styles.previewText, Layout.styles.p]}>{props.label}</Text>}
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
    fontSize: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,

    elevation: 5,
  },
  preview: {
    padding: 8,
  },
  previewText: {
    paddingBottom: 8,
    color: Colors.light.foggy,
  },
});
