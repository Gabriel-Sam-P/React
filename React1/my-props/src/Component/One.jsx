// import React from 'react'
// import Index from './Index'

import React from 'react'
// import Two from './Two'
import Table from './Table'


const One = () => {

    // const Fruit = ['orange', 'banana', 'apple','grapes']

    const Person =[{name:'Gabriel',age:23,place:'Ngl'},
        {name:'Sam',age:24,place:'chennai'},
        {name:'gabriel',age:25,place:'Kottar'},{name:'prem',age:27,place:'palkulam'}]

  return (
    <div>
      {/* <Index name='sam' age={24}/>

      <Two name={Fruit}/> */}

      <Table tab={Person}/>
    </div>
  )
}

export default One
