


import One from './Component/One'
import Two from './Component/Two'
import Three from './Component/Three'
import Four from './Component/Four'
import Header from './Component/Header';


import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path='/One' element={<One/>}/>
          <Route path='/Two' element={<Two/>}/>
          <Route path='/Three' element={<Three/>}/>
          <Route path='/Four' element={<Four/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
