
// import React, { createContext, useState } from "react";

// import Ufour from "./Component/Ufour";
// import Uthree from "./Component/Uthree";
// import Utwo from "./Component/Utwo";
// import Uone from "./Component/Uone";



// export const ThemeContext = createContext();

// const App = () => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prevtheme) => (prevtheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//       <h1>App comp</h1>
//       <Uone/>
//       <Utwo/>
//       <Uthree/>
//       <ThemeContext.Provider value={theme}>
//         <Ufour />
//       </ThemeContext.Provider>

      
//     </>
//   );
// };

// export default App;











import React from 'react'

import Main from "./Component/Main";



const App = () => {
  return (
    <div>
      <Main/>
    </div>
  )
}

export default App ;
