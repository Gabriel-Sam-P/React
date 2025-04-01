// import React from 'react'
// import { useState } from 'react'

// const Page3 = () => {

//     const[value,setValue]=useState(["apple","banana","orange","mango"])

//         const handleclick=()=>{

//             setValue([...value,"kiwi","graps"])
//         }

    
//   return (

//     <>
//            <ul>
//             {
//                 value.map(data=>(
//                     <li>{data}</li>
//                 ))
//             }
//            </ul>

//         <button onClick={handleclick}>Click</button>
//     </>



//   )
// }

// export default Page3











import { useState } from "react";

const Page3 = () => {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);

  const addFruit = () => {
    
    setFruits([...fruits,"mango","kiwi"]);
  };

  return (
    <div>
      <h2>Fruits List:</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <button onClick={addFruit}>Add Mango</button>
    </div>
  );
};

export default Page3;