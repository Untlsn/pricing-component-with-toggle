import React from 'react';
import * as S from './style';
import { BorderButtonProps } from '@atoms/BorderButton/types';

const BorderButton = ({ children, className, white }: BorderButtonProps) => {
  return (
    <S.Wrapper className={className}>
      <S.Button isWhite={white}>{children}</S.Button>
    </S.Wrapper>
  );
};

export default BorderButton;
