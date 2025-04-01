
// import Usestate from "./Component/Usestate"

// import Pagetwo from "./Component/Pagetwo";

// import Page3 from "./Component/Page3";
// import Page4 from "./Component/Page4";
// import Page5 from "./Component/Page5";


import {BrowserRouter,Routes,Route} from 'react-router-dom'

import AllTask from "./Component/AllTask";
import Task1 from "./Component/Task1";
import Task2 from './Component/Task2';

function App() {
  return (
    <>
    {/* <Usestate/> */}

    {/* <Pagetwo/> */}

    {/* <Page3/>
    <Page4/>
    <Page5/> */}

   <BrowserRouter>
    <AllTask/>
        <Routes>
          <Route path='/Task1' element={<Task1/>}/>
          <Route path='/Task2' element={<Task2/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
