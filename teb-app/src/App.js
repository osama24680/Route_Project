import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Network from './components/Network/Network';
import People from './components/People/People';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Movies from './components/Movies/Movies';
import Notfound from './components/Notfound/Notfound';

function App() {
  return (<>
    <div>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='movies' element={<Movies/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='network' element={<Network/>}/>
          <Route path='people' element={<People/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
        </div> 
    </div>
  </>
  );
}

export default App;
