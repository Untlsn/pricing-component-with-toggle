import React from 'react';
import { StyleProvider } from '@providers/all';
import CostTileWrapper from '@components/view/CostTileWrapper';
import PricingSwitcher from '@components/molecules/PricingSwitcher';
import useBoolState from '@hooks/useBoolState';
import Background from '../components/view/Background';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const montserratUrl = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap';

const Home = () => {
  const [isMonthly, changeIsMonthly] = useBoolState();
  return (
    <StyleProvider fonts={[montserratUrl]}>
      <Background />
      <Wrapper>
        <PricingSwitcher value={isMonthly} onChange={changeIsMonthly}/>
        <CostTileWrapper isMonthly={isMonthly}/>
      </Wrapper>
    </StyleProvider>
  );
};

export default Home;
