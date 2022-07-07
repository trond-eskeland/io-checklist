import * as Analytics from 'expo-firebase-analytics';
import { Platform } from 'react-native';

export type Event = {
  category: 'View' | 'Click';
  name: 'NoContent' | 'Button' | 'RowClick' | 'FetchFailed' | 'Share' | 'Cancel';
  screen: string;
  purpose: string;
  details?: string;
};

export const track = (event: Event) => {
  if (Platform.OS !== 'web') {
    Analytics.logEvent(event.category, {
      name: event.name,
      screen: event.screen,
      purpose: event.purpose,
    });
  }
};

export default track;
