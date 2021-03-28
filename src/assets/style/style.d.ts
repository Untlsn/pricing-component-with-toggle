import 'styled-components';

declare module 'styled-components' { // Add own themes (remember to copy it to theme.ts)
  export interface DefaultTheme {
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
  }
}

