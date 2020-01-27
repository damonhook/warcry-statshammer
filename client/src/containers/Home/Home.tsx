import React from 'react';
import AppBar from 'components/AppBar';
import Fighters from 'containers/Fighters';

const Home: React.FC = () => {
  return (
    <div>
      <AppBar />
      <Fighters />
    </div>
  );
};

export default Home;
