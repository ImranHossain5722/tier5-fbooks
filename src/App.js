
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/HeaderSection/NavBar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes><Route path='/'element={<Home/>} ></Route></Routes>     
    </div>
  );
}

export default App;
