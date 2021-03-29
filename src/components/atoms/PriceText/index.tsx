import React from 'react';
import * as S from './style';

const PriceText = ({ children, className }: { children: number, className?: string }) => {
  return (
    <S.Wrapper className={className}>
      <S.Dollar />{children}
    </S.Wrapper>
  );
};

export default PriceText;
