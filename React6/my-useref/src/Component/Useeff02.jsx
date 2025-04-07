// import React from 'react'

// import { useEffect } from 'react'

// const Useeff02 = () => {

//     useEffect(()=>{
//         console.log("hello!")
//     },[])
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Useeff02













// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Component Rendered!");
//   });

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//     </div>
//   );
// };

// export default App;









import React from 'react'
import { useEffect } from 'react';

const Useeff02 = () => {
    useEffect(() => {
        
        return () => {
          console.log("Component unmounted!");
        };
      }, []);
      
  return (
    <>
    </>
  )
}

export default Useeff02