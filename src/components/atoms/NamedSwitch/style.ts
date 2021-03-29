import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
`;
export const Sides = styled.span`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.lightGrayishBlue};
`;
export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;
export const Slider = styled.span<{ moved?: boolean }>`
  display: inline-block;
  height: 2em;
  width: 4em;
  border-radius: 1em;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.gradient.blue[0]} 0%,
    ${({ theme }) => theme.colors.gradient.blue[1]} 100%
  );
  position: relative; 
  &::before, &::after {
    content: '';
    display: block;
    position: absolute;
  }
  &::after {
    height: 1.5em;
    width:  1.5em;
    background-color: #fff;
    top: .25em;
    left: .25em;
    border-radius: 2em;
    transition: transform .5s;
    ${({ moved }) => moved && css`transform: translateX(2em)`}
  }
  &::before {
    top: 0;
    left: 0;
    height: inherit;
    width: inherit;
    border-radius: inherit;
    color: white;
    transition: opacity .5s;
    z-index: 10;
  }
  &:hover {
    cursor: pointer;
    &::before {
      opacity: .2;
    }
  }
`;
export const SwitchWrapper = styled.span``;
