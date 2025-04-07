import React from 'react';
import Ttwo from './Ttwo';

const Tone = ({ colour,texts }) => {
  return (
    <div>
      <h1>One Component</h1>
      <Ttwo color={colour} text={texts} />
    </div>
  );
};

export default Tone;
