import type { DefaultTheme } from 'styled-components';
import { css } from 'styled-components';

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
  },
  background: {
    transparent: css`
      background: transparent;
      color: inherit;
    `,
    color: css`
      background: linear-gradient(
        to bottom right,
        ${({ theme }) => theme.colors.gradient.blue[0]} 0%,
        ${({ theme }) => theme.colors.gradient.blue[1]} 100%
      );
      color: white;
    `
  }
};

export default theme;
