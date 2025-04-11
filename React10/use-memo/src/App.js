// import React from 'react'
// import { Memo } from './Component/Memo'
// import { Callback } from './Component/Callback'

// import User from './Component/User'

// export const App = () => {
//   return (
//     <>
//     <Memo number={6}/>
//     <Callback/>
//     <User/>
//     </>
//   )
// }

// export default App;
















// import React from 'react'


// import User from './Component/User'

// export const App = () => {
//   return (
//     <>
//       <User/>
//     </>
//   )
// }

// export default App;








































import React, { useState } from 'react';

import { Lhome } from './Component/Lhome';
import { Login } from './Component/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // This would typically be handled by actual login logic
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Lhome />
      )}
    </div>
  );
}

export default App;
