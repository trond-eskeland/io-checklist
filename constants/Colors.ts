const colors = {
  dark: {
    // Text and
    primaryText: '#F6F6F6',
    accentText: '#f2cc8f',
    // Buttons etc.
    primary: '#000',
    info: '#808080',
    //info: '#808080',
    success: '#25F4EE',
    danger: '#FE2C55',
    warning: '#FFFFFF',
    default: '#f2cc8f',
    // Background Colors
    // primaryBackground: '#111',
    //accentBackground: '#1b1f1f',
    primaryBackground: '#010101',
    accentBackground: '#1f1f1f',
    black: '#050505',

    highScoreColor: ['#C9B037', '#D7D7D7', '#AD8A56'],
  },
  light: {
    // Not implemented
  },
};

export default {
  ...colors,
  light: colors.dark,
};
