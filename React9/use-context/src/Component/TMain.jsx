
import React, { createContext, useState } from "react";

import {Button} from '@mui/material'


import Tthree from './Tthree'


export const TextContext = createContext();

const Main = () => {

    const[input,setinput]=useState("")

    const[output,setoutput]=useState("")

    const handleClick=()=>{

        setoutput(input)

        setinput("")
    }
  return (
    <>
        

      <input 
        type="text" 
        value={input} 
        onChange={(e) => setinput(e.target.value)} 
      />

        <Button onClick={handleClick} variant='contained'>click</Button>





      <TextContext.Provider value={output}>
        <Tthree />
      </TextContext.Provider>
        
    </>
  )
}

export default Main ;
