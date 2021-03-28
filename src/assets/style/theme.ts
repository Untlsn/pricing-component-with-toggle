import type { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = { // Add own themes (remember to copy it to style.d.ts)
  colors: {
    white: '#ffffff',
    black: '#000000',
    veryLightGrayishBlue: '#f6f6fe',
    lightGrayishBlue: '#b3b5c6',
    grayishBlue: '#6d708d',
    darkGrayishBlue: '#494c5f',
    gradient: {
      blue: [
        '#a3a8f0',
        '#696fdd',
      ]
    }
  }
};

export default theme;
