import React from 'react';
import { StyleProvider } from '@providers/all';

const montserratUrl = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap';

const Home = () => {
  return (
    <StyleProvider fonts={[montserratUrl]}>
      <div>Hello World!</div>
    </StyleProvider>
  );
};

export default Home;
