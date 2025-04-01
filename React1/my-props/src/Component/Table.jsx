import React from 'react'

const Table = (Props) => {
  return (

    <table className='struct'>
        <thead className='head'>
          <tr>
            <th>SL.No.</th>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody className='body'>
          {Props.tab.map((person, index) => (
            <tr key={person.Id}>
              <td>{index + 1}</td> 
              <td>{Math.floor(Math.random()*(1000-199)+199)}</td> 
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.place}</td>
            </tr>
          ))}
        </tbody>
    </table>
  )
}

export default Table
