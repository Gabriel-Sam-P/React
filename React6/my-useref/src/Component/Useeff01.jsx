import React from 'react'

import { useState,useEffect } from 'react'


function Useeff01() {
    const [count, setCount] = useState(0);
  

    useEffect(() => {

      document.title = `You clicked ${count} times`;

      console.log(count)
    });
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

export default Useeff01













