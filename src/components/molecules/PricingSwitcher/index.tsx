import React from 'react';
import * as S from './style';
import NamedSwitch, { NamedSwitchProps } from '@atoms/NamedSwitch';

const PricingSwitcher = (props: Pick<NamedSwitchProps, 'value'|'onChange'>) => {
  return (
    <S.Wrapper>
      <S.Head1>Our Pricing</S.Head1>
      <NamedSwitch left='annually' right='monthly' {...props}/>
    </S.Wrapper>
  );
};

export default PricingSwitcher;
