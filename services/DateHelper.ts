import { DateTime } from 'luxon';

// Date => 'Weekday Month DD, YYYY, HH:MM'
export function getDateString(date: DateTime | null, includeTime: boolean) {
  if (!date) return '';
  return date.toFormat(`cccc LLLL dd, yyyy${includeTime ? ', HH:mm' : ''}`);
}

export function getShortMonth(date: DateTime | null) {
  if (!date) return null;
  return date.monthShort.toLowerCase();
}

// TravelPeriod => 'DD MON YYYY - DD MON YYYY'
// (example: '21 nov - 30 nov 2021', '30 dec 2021 - 04 jan 2022')
export function getShortTravelPeriod(travelPeriod: any) {
  if (!travelPeriod.startDate || !travelPeriod.endDate) return null;
  const startDate =
    travelPeriod.startDate.year !== travelPeriod.endDate.year
      ? travelPeriod.startDate.toFormat('dd LLL yyyy')
      : travelPeriod.startDate.toFormat('dd LLL');
  const endDate = travelPeriod.endDate.toFormat('dd LLL yyyy');
  return `${startDate} - ${endDate}`.toLowerCase();
}

// (startDate (string), add (number)) => Date+days (string)
// (example: ('2021-01-01', 3) => '2021-01-04')
export function addDays(startDate: string, add: number) {
  const date = DateTime.fromISO(startDate).plus({ days: add });
  return date.toISODate();
}
// (startDate (string), endDate (string)) => [ ...datesBetween]
export function getDatesBetween(startDate: string | null, stopDate: string | null) {
  if (!startDate) return [];
  if (!stopDate) return [startDate];
  const dateArray = new Array<string>();
  let currentDate = addDays(startDate, 0);
  while (DateTime.fromISO(addDays(currentDate, 1)) < DateTime.fromISO(stopDate)) {
    currentDate = addDays(currentDate, 1);
    dateArray.push(currentDate);
  }
  return dateArray;
}

// (startDate (string), endDate (string)) => [startDate, ...datesBetween, endDate]
export function getDatesBetweenAndIncluding(startDate: string, stopDate: string): string[] {
  return [startDate, ...getDatesBetween(startDate, stopDate), stopDate];
}

export function getNumberOfDaysBetweenAndIncluding(startDate: string, endDate: string): number {
  const start = DateTime.fromISO(startDate);
  const end = DateTime.fromISO(endDate);
  return end.diff(start, 'days').days + 1;
}

// Date => 'Weekday, DD Month' (example: 'Monday, 01 November')
export function getWeekdayDateAndMonth(date: DateTime) {
  return `${date.weekdayLong}, ${date.day} ${date.monthLong}`;
}

/**
 * Check if DateTime object is in DateTime array
 * @param array Datetime[]
 * @param value DateTime
 * @returns boolean
 */
export function dateIsInArray(array: DateTime[], value: DateTime) {
  // Comparing DateTime objects does not work, therefore we compare their millis instead
  return array.some((day) => day.toMillis() === value.toMillis());
}

// Date => 'DD.MM.YYYY'
export function getNorwegianDateFormat(date: DateTime): string {
  return date.toFormat('dd.MM.yyyy');
}

export function createSapDateAndTime(date: DateTime, type: 'TIME' | 'DATETIME'): string {
  if (type === 'DATETIME') {
    let UTC = date.setZone('UTC', { keepLocalTime: true });
    UTC = UTC.set({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    });
    return `/Date(${UTC.toMillis()})/`;
  }
  return `PT${date.hour.toString().padStart(2, '0')}H${date.minute
    .toString()
    .padStart(2, '0')}M${date.second.toString().padStart(2, '0')}S`;
}

export function readSapDateAndTime(sapDateString: string, sapTimeString?: string): DateTime | null {
  // All sequences of numbers. Example "PT10H20M54S" will return ["10", "20", "54"]
  const regex = /\d+/g;
  if (!sapTimeString) sapTimeString = 'PT00H00M00S';
  const time = sapTimeString.match(regex);
  const date = sapDateString.match(regex);
  if (!date || !time) return null;
  const hours = time[0];
  const minutes = time[1];
  const seconds = time[2];
  const unixTime = Number(date[0]);
  let dateTime = DateTime.fromMillis(unixTime);
  dateTime = dateTime.set({
    hour: Number(hours),
    minute: Number(minutes),
    second: Number(seconds),
  });
  return dateTime;
}
