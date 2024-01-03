import './App.css';
import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import Loading from './Loading';
import PersonalInfoApi from './personalInfoApi';

function App() {
  const [info, setInfo] = useState({ personalData: null, isLoading: true });

  useEffect(function getMyInfo() {
    async function fetchMyInfo() {
      const info = await PersonalInfoApi.getInfo();
      setInfo({ personalData: info, isLoading: false });
    }
    fetchMyInfo();
  }, []);
  return (
    <div className='App'>
      {info.isLoading ? <p>...Loading</p> : //TODO: replace with Loading component
        <NavBar />
        // <BrowserRouter>
        //   <Routes>
        //     <Route element={<Home/>}/>
        //     <Route element={<Projects/>}/>
        //     <Route element={}/>
        //     <Route element={<Navigate to="/home"/>} path="/*"/>
        //   </Routes>
        // </BrowserRouter>
      }
    </div>
  );
}

export default App;
