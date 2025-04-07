import React from 'react'

import { useState } from 'react'

import { Button } from '@mui/material';

import Tone from './Tone'

const Alltask = () => {

    const [color,setColor]=useState('')
    const [text,settext]=useState("")  
  return (
    <div>
        <Tone colour={color} texts={text}/>
        <Button variant="contained" onClick={() => {setColor('green')
          settext('white')}}>Task1</Button>
    </div>
  )
}

export default Alltask
