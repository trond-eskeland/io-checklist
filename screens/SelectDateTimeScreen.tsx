import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
// @ts-ignore
import DatePicker from 'react-native-modern-datepicker';
import { RRule, RRuleSet, rrulestr } from 'rrule';

import Button from '../components/Button';
import { View, Text } from '../components/Themed';
import { useStoreActions, useStoreState } from '../store';
import { RootTabScreenProps } from '../types';
import TimeView from './TimeView';

export default function SelectTemplateScreen({
  navigation,
  route,
}: RootTabScreenProps<'TempalteTab'>) {
  const newTask = useStoreState((state) => state.tasks.newTask);
  const setNewTask = useStoreActions((actions) => actions.tasks.setNewTask);
  const [selectedDate, setSelectedDate] = useState(null);

  // every monday
  const rule = new RRule({
    freq: RRule.WEEKLY,
    interval: 1,
    byweekday: [RRule.MO],
    dtstart: new Date(2012, 2, 1, 10, 30),
    until: new Date(2012, 12, 31),
  });

  return (
    <View style={styles.container}>
      <DatePicker mode="calendar" onSelectedChange={(date: any) => setSelectedDate(date)} />

      <View style={styles.bottomContainer}>
        <View style={{ flex: 1 }}></View>
        <TimeView dateType="Start date" date={null} setDate={() => null} isTimeDisabled={false} />
        <Text>Recurring?</Text>
        <TimeView dateType="End date" date={null} setDate={() => null} isTimeDisabled={true} />
        <View style={{ flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
          <Button>Week</Button>
          <Button>Month</Button>
          <Button>Year</Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button viewStyle={styles.secondaryButton} onPress={() => navigation.goBack()}>
            Clear all
          </Button>
          <Button viewStyle={styles.primaryButton} onPress={() => navigation.goBack()}>
            Confirm
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#c1becb',
    padding: 8,
    marginBottom: 8,
  },
  calendarContainer: { margin: 32, marginBottom: 0, flex: 1 },
  bottomContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    paddingBottom: 60,
    paddingTop: 24,
    backgroundColor: 'white',
    borderBottomColor: '#f7f7f7',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: 'white',
    paddingHorizontal: 48,
    borderWidth: 1,
    borderColor: '#007079',
  },
  primaryButton: { paddingHorizontal: 48 },
});
