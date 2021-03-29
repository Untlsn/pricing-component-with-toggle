import styled, { css } from 'styled-components';

export const Wrapper = styled.span`
  width: 24em;
  height: 4em;
`;
export const Button = styled.button<{ isWhite?: boolean }>`
  width: inherit;
  height: inherit;
  font-weight: bolder;
  letter-spacing: .1em;
  border-radius: .5em;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  color: ${({ isWhite, theme }) => isWhite ? theme.colors.gradient.blue[1] : 'white'};
  
  position: relative;
  z-index: 10;
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    display: block;
    height: inherit;
    width: inherit;
    border-radius: inherit;
    ${({ isWhite, theme }) => isWhite ? css`
      background: white;
    ` : theme.background.color};
    transition: opacity .5s;  
  }
  
  &:hover {
    cursor: pointer;
    color: inherit;
    border: .1em solid ${({ isWhite, theme }) =>
      isWhite ? 'white' : theme.colors.darkGrayishBlue
    };
      
    &::before {
      opacity: 0;
    }
  }
`;
