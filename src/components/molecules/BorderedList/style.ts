import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: center;
  padding: 0;
  
  width: 20em;
  
  li:first-child {
    border-top: solid .1em ${({ theme }) => theme.colors.lightGrayishBlue};
  }
  li {
    padding: 1em 0;
    border-bottom: solid .1em ${({ theme }) => theme.colors.lightGrayishBlue};
  }
`;
