import React from 'react';
import * as S from './style';
import CostTile from '@organisms/CostTile';

const CostTileWrapper = ({ isMonthly }: { isMonthly: boolean }) => {
  const costsType = isMonthly ? 'monthly' : 'annually';

  const costs = {
    monthly: [
      19.99,
      24.99,
      39.99
    ],
    annually: [
      199.99,
      249.99,
      399.99
    ]
  };
  return (
    <S.Wrapper>
      <CostTile
        name='Professional'
        cost={costs[costsType][0]}
        storage={1000}
        users={5}
        sendUp={10} />
      <CostTile
        name='Professional'
        cost={costs[costsType][1]}
        storage={1000}
        users={5}
        sendUp={10}
        colored />
      <CostTile
        name='Professional'
        cost={costs[costsType][2]}
        storage={1000}
        users={5}
        sendUp={10} />
    </S.Wrapper>
  );
};

export default CostTileWrapper;
