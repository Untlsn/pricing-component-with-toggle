import React from 'react';
import { StyleProvider } from '@providers/all';
import CostTileWrapper from '@components/view/CostTileWrapper';
import PricingSwitcher from '@components/molecules/PricingSwitcher';
import useBoolState from '@hooks/useBoolState';

const montserratUrl = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap';

const Home = () => {
  const [isAnnually, changeIsAnnually] = useBoolState();
  return (
    <StyleProvider fonts={[montserratUrl]}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <PricingSwitcher value={isAnnually} onChange={changeIsAnnually}/>
        <CostTileWrapper isAnnually={isAnnually}/>
      </div>
    </StyleProvider>
  );
};

export default Home;
