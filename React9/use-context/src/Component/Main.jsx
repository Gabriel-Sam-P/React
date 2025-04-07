
import React, { useState } from 'react';

import {Button} from '@mui/material'

import Mshow from './Mshow'

const Main = () => {

    const[input,setinput]=useState("")

    const[output,setoutput]=useState("")

    const handleClick=()=>{

        setoutput(input)
    }
  return (
    <>
        

        <input 
        type="text" 
        value={input} 
        onChange={(e) => setinput(e.target.value)} 
      />

        <Button onClick={handleClick} variant='contained'>click</Button>

        <Mshow one={output}/>
    </>
  )
}

export default Main
