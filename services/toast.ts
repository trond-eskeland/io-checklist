import Toast from 'react-native-root-toast';
import { initialWindowMetrics } from 'react-native-safe-area-context';

import Colors from '../constants/Colors';

export default function showToast(message: string) {
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: initialWindowMetrics?.insets.top || 40,
    shadow: true,
    animation: true,
    textColor: 'white',
    opacity: 1,

    containerStyle: {
      width: '90%',
      backgroundColor: Colors.light.secondary,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
    },
    textStyle: {
      padding: 4,
      flex: 1,
      fontSize: 20,

      fontFamily: 'OpenSans-Bold',
      textAlign: 'center',
    },
  });
}
