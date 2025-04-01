import React from 'react'

import { useState } from 'react'

const Pagetwo = () => {

const[value,setValue]=useState("change text")
   
    const handleclick=()=>{
        setValue("hello world")
    }

  return (
    <>
      <p>{value}</p>
      <button onClick={handleclick}>Click</button>
    </>
  )
}

export default Pagetwo
