import styled, { css } from 'styled-components';
import PriceTextBody from '@atoms/PriceText';

const colorWrapper = css`
  ${({ theme }) => theme.background.color}
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
