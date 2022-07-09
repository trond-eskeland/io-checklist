import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTime } from 'luxon';
import { StyleSheet, View } from 'react-native';

import { Text } from '../components/Themed';
import { getNorwegianDateFormat } from '../services/DateHelper';

function TimeView(props: {
  dateType: 'Start date' | 'End date' | 'Date';
  date: DateTime | null;
  setDate: (date: DateTime) => void;
  isTimeDisabled?: boolean;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.leftSideContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="calendar" size={24} color="#007079" />
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.dateType}>{props.dateType.toUpperCase()}</Text>
          <Text>{props.date ? `${getNorwegianDateFormat(props.date)}` : '--.--.----'}</Text>
        </View>
      </View>
      {!!props.isTimeDisabled === false && (
        <View style={styles.rightSideContainer}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="clock-outline" size={24} color="#007079" />
          </View>
          <View style={styles.timePickerContainer}>
            <DateTimePicker
              value={
                props.date?.toJSDate() || DateTime.now().set({ hour: 0, minute: 0 }).toJSDate()
              }
              display="default"
              textColor="#007079"
              is24Hour
              // disabled={!props.date}
              onChange={(_: unknown, selectedTime?: Date) => {
                // if (!selectedTime) return;
                // if (!props.date) return;
                // let newDate = DateTime.fromISO(props.date.toISO());
                // newDate = newDate.set({
                //   hour: selectedTime.getHours(),
                //   minute: selectedTime.getMinutes(),
                // });
                // props.setDate(newDate);
              }}
              mode="time"
              style={styles.timePicker}
              locale="no-NB"
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    backgroundColor: 'white',
    borderBottomColor: '#f7f7f7',
    borderBottomWidth: 1,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSideContainer: {
    marginHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
  },
  iconContainer: {
    width: 32,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#F2F2F7',
  },
  dateContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 8,
    backgroundColor: 'white',
  },
  dateType: { letterSpacing: 1.1, marginBottom: 6 },
  rightSideContainer: {
    marginHorizontal: 16,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  timePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  timePicker: {
    marginLeft: 16,
    height: 36,
    width: 64,
    flexDirection: 'row',
    backgroundColor: 'rgba(118,118,128,0)',
    borderRadius: 4,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default TimeView;
