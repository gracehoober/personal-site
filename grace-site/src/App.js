import './App.css';
import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import Loading from './Loading';
import PersonalInfoApi from './personalInfoApi';

function App() {
  const [isLoaded, setIsLoaded] = useState({personalData: false, isLoading: true})

  useEffect(function getMyInfo(){
      async function fetchMyInfo(){
        const info = await PersonalInfoApi.getInfo();
        setIsLoaded()
      }
  })
  return (
    <div className='App'>
      <NavBar/>
    {/* {!isLoaded ? <Loading/> :
        <NavBar/>
      // <BrowserRouter>
      //   <Routes>
      //     <Route element={<Home/>}/>
      //     <Route element={<Projects/>}/>
      //     <Route element={}/>
      //     <Route element={<Navigate to="/home"/>} path="/*"/>
      //   </Routes>
      // </BrowserRouter>
    } */}
  </div>
  );
}

export default App;
