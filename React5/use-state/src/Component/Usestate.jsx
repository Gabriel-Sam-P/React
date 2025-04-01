import React from 'react'
import { useState } from 'react'

// import {Button } from '@mui/material'


const Usestate = () => {

    // const[value,setValue]=useState(0)

    const[value,setvalue]=useState(0)

    const handleclick=()=>{

        // setValue(value+1)

        setvalue(value+1)
    }
    const handle=()=>{
        setvalue(value-1)
    }

  return (
    <>
        <button onClick={handle}>sub</button>
      
        <p>{value}</p>
    
        <button onClick={handleclick}>add</button>
        
    </>
  )
}

export default Usestate
