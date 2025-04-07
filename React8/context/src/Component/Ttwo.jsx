import React from 'react';
import Tthree from './Tthree';

const Ttwo = ({ color,text }) => {
  return (
    <div>
      <h1>Two Component</h1>
      <Tthree color={color} text={text}/>
    </div>
  );
};

export default Ttwo;
