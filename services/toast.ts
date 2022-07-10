import Toast from 'react-native-root-toast';

import Colors from '../constants/Colors';

export default function showToast(message: string) {
  const toast = Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.TOP,
    shadow: true,
    animation: true,
    textColor: 'white',

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
