
import React, { useState } from 'react';

const Task1 = () => {

        const [inputValue, setInputValue] = useState("");
    
        const [outputValue, setoutputValue] =useState([])
    
    
        const handleChange = (event) => {
          setInputValue(event.target.value); 
        };
    
    
        const handleClick = () =>{

            setoutputValue([...outputValue, inputValue]);

            setInputValue("");
         }
             
  return (
    <div>
        <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Type something" 
      />      
      <ul>
        {outputValue.map((output, index) => (
          <li key={index}>{output}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Task1;
