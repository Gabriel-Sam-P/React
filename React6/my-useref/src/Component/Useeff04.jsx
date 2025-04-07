// import React, { useEffect } from "react";

// const Timer = () => {
//   useEffect(() => {
//     console.log("Timer started...");

//     const interval = setInterval(() => {
//       console.log("Timer running...");
//     }, 1000);

//     return () => { 
//       clearInterval(interval);
//       console.log("Cleanup: Timer Stopped!");
//     };
//   },[]);

//   return <h1>Timer Running...</h1>;
// };

// const App = () => {
//   return (
//     <div>
//       <Timer />
//     </div>
//   );
// };

// export default App;














// import React, { useState, useEffect } from "react";

// const Timer = () => {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     console.log("Timer started...");

//     const interval = setInterval(() => {
//       setSeconds(prevSeconds => prevSeconds + 1); // Increment the seconds
//       console.log("Timer running...");
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//       console.log("Cleanup: Timer Stopped!");
//     };
//   }, []);

//   return <h1>Timer: {seconds} seconds</h1>;
// };

// const App = () => {
//   return (
//     <div>
//       <Timer />
//     </div>
//   );
// };

// export default App;
















// import React, { useEffect, useState } from "react";

// const Timer = () => {
    
//   useEffect(() => {
//     const interval = setInterval(() => {
//       console.log("Timer running...");
//     }, 1000);

//     return () => {
//       clearInterval(interval);  
//       console.log("Timer stopped!");
//     };
//   },[]);

//   return <h1>Timer Running...</h1>;
// };

// const App = () => {
//   const [show, setShow] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>Toggle Timer</button>
//       {show && <Timer />}
//     </div>
//   );
// };

// export default App;




















import React, { useEffect, useState } from "react";

const Timer = () => { 

    const [count, setCount] = useState(0);
    
  useEffect(() => {
    const interval = setInterval((s) => {
      console.log("Timer running...");
      setCount(count+1)
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Timer stopped!");
    };
  }, [count]);

  return <h1>Timer Running... Count: {count}</h1>;
};

const App = () => {
  const [show, setShow] = useState(true);
 

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Timer</button>
      
      {show && <Timer />}
    </div>
  );
};

export default App;
