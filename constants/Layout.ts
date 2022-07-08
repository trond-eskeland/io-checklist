import { Dimensions, StyleSheet } from 'react-native';

import Colors from './Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
// const fontBlack = 'Montserrat-Black';
const fontBold = 'OpenSans-Bold';
// const fontBlackItalic = 'Montserrat-BoldItalic';
// const fontLight = 'Montserrat-Light';
// const fontLightItalic = 'Montserrat-LightItalic';
const fontRegular = 'Montserrat-Regular';

const styles = StyleSheet.create({
  // This is a lead paragraph. It stands out from regular paragraphs...
  lead: {
    fontSize: 24,
    // fontFamily: fontLight,
    // color: Colors.dark.primaryText,
  },
  p: {
    fontSize: 15,
    // fontFamily: fontRegular,
    // color: Colors.dark.primaryText,
  },
  secondaryText: {
    fontSize: 15,
    letterSpacing: -0.24,
    // fontFamily: fontBold,
    // color: Colors.dark.primaryText,
  },
  smallestText: {
    fontSize: 10,
    letterSpacing: 0.12,
    // fontFamily: fontRegular,
    // color: Colors.dark.primaryText,
  },
  smallText: {
    fontSize: 14,
    letterSpacing: 0.12,
    // fontFamily: fontRegular,
    // color: Colors.dark.primaryText,
  },
  blockquote: {
    marginLeft: 8,
    paddingLeft: 8,
    borderLeftWidth: 1,
    // borderLeftColor: Colors.dark.warning,
    marginBottom: 8,
  },
  h1: {
    fontSize: 42,
    fontWeight: 'bold',
    fontFamily: fontBold,
    letterSpacing: 0.41,
    // color: Colors.dark.primaryText,
  },
  h2: {
    fontSize: 24,
    // fontFamily: fontRegular,
    letterSpacing: 0.41,
    fontWeight: 'bold',

    // color: Colors.dark.primaryText,
  },
  h3: {
    fontSize: 17,
    letterSpacing: 0.41,
    fontWeight: 'bold',

    // fontFamily: fontBold,
    // color: Colors.dark.primaryText,
  },
});
export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  styles,
};
