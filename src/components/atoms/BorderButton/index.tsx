import React from 'react';
import * as S from './style';
import { BorderButtonProps } from '@atoms/BorderButton/types';

const BorderButton = ({ children, className }: BorderButtonProps) => {
  return (
    <S.Wrapper className={className}>
      <S.Button>{children}</S.Button>
    </S.Wrapper>
  );
};

export default BorderButton;
