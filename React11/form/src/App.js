
import './App.css';
import { Login } from './Component/Login';
import { Home } from './Component/Home'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Home' element={<Home/>}/>
        </Routes>
      </Router>
  );
}

export default App;
