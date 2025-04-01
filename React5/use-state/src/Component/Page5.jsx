

import React, { useState } from 'react';



const Page5 = () => {

    const [inputValue, setInputValue] = useState('');

    const [outputValue, setoutputValue] =useState('')


    const handleChange = (event) => {
      setInputValue(event.target.value); 
    };


    const handleClick = () =>{
        setoutputValue(inputValue)
     }
   

  return (
    <div>
        <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Type something" 
      />
      <button onClick={handleClick}>Click</button>
      <h1>{outputValue}</h1> 
    </div>
  )
}


export default Page5
