import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Land from './Land';
import Coding from './Coding';
import { useState } from 'react';

function App() {
  const[landCount, setLandCount] = useState(0)
  

  return (

    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Land count = {landCount}  setCount={setLandCount}/>} />
    <Route path='/coding-arena' element={<Coding count = {landCount}/>} />
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;