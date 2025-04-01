// import React, { useState } from 'react'
// import { Button,Box } from '@mui/material'

// export const Task2 = () => {
//     const [value,setValue]=useState({Name:"",Place:""})
//     const [name,setName]=useState('')
//     const [place,setPlace]=useState('')
//     const nameChangeHandle=(event)=>{
//         setName(event.target.value)
//     }
//     const placeChangeHandle=(event)=>{
//         setPlace(event.target.value)
//     }
//     const clickHandle=()=>{
//         setValue({Name:name,Place:place})
//     }
//   return (
//     <Box sx={{margin:"12px"}}>
//         <input type="text" placeholder='Name' value={name} onChange={nameChangeHandle} style={{padding:"10px"}}/>
//         <input type="text" placeholder='Place' value={place} onChange={placeChangeHandle} style={{marginLeft:"10px",marginRight:"10px",padding:"10px"}}/>
//         <Button variant='text' onClick={clickHandle}>Add</Button>
//         <h1>{`Name: ${value.Name}`}</h1>
//         <h1>{`Place: ${value.Place}`}</h1>
//     </Box>
//   )
// }

// export default Task2;


import React, { useState } from 'react';

const Task2 = () => {
  const [user, setUser] = useState({ name: '', age: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (user.name && user.age) {
      setSubmittedData(user);
      setUser({name:"",age:""})
      
    } else {
      alert('Please enter both Name and Age');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>User Form</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}/>
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )}
    </div>
  );
};

export default Task2;