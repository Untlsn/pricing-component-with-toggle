import styled from 'styled-components';

export const Wrapper = styled.span`
  width: 24em;
  height: 4em;
`;
export const Button = styled.button`
  width: inherit;
  height: inherit;
  font-weight: bolder;
  letter-spacing: .1em;
  background-color: transparent;
  border-radius: .5em;
  text-transform: uppercase;
  border: .1em solid ${({ theme }) => theme.colors.darkGrayishBlue};
  color: ${({ theme }) => theme.colors.grayishBlue};
  
  &:hover {
    cursor: pointer;
  }
`;
