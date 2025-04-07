import React from 'react';
import Tfour from './Tfour';

const Tthree = ({ color ,text }) => {
  return (
    <div>
      <h1>Three Component</h1>
      <Tfour color={color} text={text} />
    </div>
  );
};

export default Tthree;
