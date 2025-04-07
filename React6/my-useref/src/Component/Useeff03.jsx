// import React, { useEffect, useState } from "react";

// const Useeff03 = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     return () => {
//         console.log("Component unmounted!");
//       };
//     }, []);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
      
//     </div>
//   );
// };

// export default Useeff03;










import React, { useEffect, useState } from "react";

const Useeff03 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");




      useEffect(() => {
          
          return () => {
            console.log(`Count: ${count}, Name: ${name}`);
          };
        }, [count, name]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
    </div>
  );
};

export default Useeff03;