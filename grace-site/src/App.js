import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import Loading from './Loading';

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className='App'>
    {!isLoaded ? <Loading/> :
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route element={<Home/>}/>
          <Route element={<Projects/>}/>
          <Route element={}/>
          <Route element={<Navigate to="/home"/>} path="/*"/>
        </Routes>
      </BrowserRouter>
    }
  </div>
  );
}

export default App;
