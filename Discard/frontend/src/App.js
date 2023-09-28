import logo from './logo.svg';
import './App.css';
import Test from './Test.js';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='app'>
    <Routes>
      <Route path='/' element= {<Homepage />} />
      <Route path='signup' element= {<Signup />} />
      <Route path='login' element= {<Login />} />            
    </Routes>
    </div>
    
  );
}

export default App;
