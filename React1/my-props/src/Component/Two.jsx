import React from 'react'


const Two = (Props) => {
  return (

    <ul>
        {Props.name.map((item)=>(<li>{item}</li>))}
    </ul>
  )
}

export default Two
