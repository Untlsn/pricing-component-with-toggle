import React from 'react';
import * as S from './style';
import { NamedSwitchProps } from '@atoms/NamedSwitch/types';

const NamedSwitch = ({ left, right, value, onChange }: NamedSwitchProps) => {
  return (
    <S.Wrapper>
      <S.Sides>{left}</S.Sides>
      <S.SwitchWrapper>
        <S.CheckBox />
        <S.Slider moved={value} onClick={() => onChange()}/>
      </S.SwitchWrapper>
      <S.Sides>{right}</S.Sides>
    </S.Wrapper>
  );
};

export default NamedSwitch;
export type { NamedSwitchProps } from './types';
