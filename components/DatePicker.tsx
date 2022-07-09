import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';

const DatePickerControl = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return <DatePicker mode="calendar" onSelectedChange={(date) => setSelectedDate(date)} />;
};

export default DatePickerControl;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
