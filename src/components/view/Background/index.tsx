import React from 'react';
import * as S from './style';
import TopImage from '@assets/icons/bg-top.svg';
import BottomImage from '@assets/icons/bg-bottom.svg';

const Background = () => {
  return (
    <S.Wrapper>
      <S.TopImage src={TopImage} />
      <S.BottomImage src={BottomImage} />
    </S.Wrapper>
  );
};

export default Background;
