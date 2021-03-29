import React from 'react';
import * as S from './style';
import { CostTileProps } from '@organisms/CostTile/types';
import BorderedList from '@molecules/BorderedList';
import { createList } from '@organisms/CostTile/helpers';
import BorderButton from '@atoms/BorderButton';

const CostTile = ({ name, cost, sendUp, storage, users, colored }: CostTileProps) => {
  const list = createList({ sendUp, storage, users });
  return (
    <S.Wrapper colored={colored}>
      <S.Name>{name}</S.Name>
      <S.PriceText>{cost}</S.PriceText>
      <BorderedList>{list}</BorderedList>
      <BorderButton>learn more</BorderButton>
    </S.Wrapper>
  );
};

export default CostTile;
