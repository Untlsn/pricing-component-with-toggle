import React from 'react';
import * as S from './style';

const BorderedList = ({ children }: { children: string[] }) => {
  return (
    <S.Wrapper>
      {children.map(
        (child, key) => <li key={key}>{child}</li>
      )}
    </S.Wrapper>
  );
};

export default BorderedList;
