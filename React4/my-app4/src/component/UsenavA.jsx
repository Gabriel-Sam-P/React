import React from 'react'

import { useNavigate } from "react-router-dom"



const UsenavA = () => {

    const navigate=useNavigate();

    const page=()=>{
        navigate("/UsenavB")
    }
     
  return (
    <div>
      <button onClick={page}>Click</button>
    </div>
  )
}

export default UsenavA
