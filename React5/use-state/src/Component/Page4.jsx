import React, { useState } from 'react';

const Page4 = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value); 
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Type something" 
      />
      <h1>{inputValue}</h1> 
    </div>
  );
};

export default Page4;