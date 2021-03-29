import styled, { css } from 'styled-components';
import PriceTextBody from '@atoms/PriceText';

const colorWrapper = css`
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.colors.gradient.blue[0]} 0%,
    ${({ theme }) => theme.colors.gradient.blue[1]} 100%
  );
  &>* {
    filter: brightness(100);
  }
  color: white;
  padding: 4em 2em 6em;
`;

export const Wrapper = styled.div<{ colored?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  border-radius: 1em;
  padding: 2em 2em 4em;
  background-color: #fff;
  ${({ colored }) => colored && colorWrapper}
`;
export const Name = styled.h3`
  margin-bottom: 0;
`;
export const PriceText = styled(PriceTextBody)`
  font-size: 5em;
`;
