import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import Loading from './Loading';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import PersonalInfoApi from './personalInfoApi';

/**
 *
 *
 *
 */
function App() {
  const [info, setInfo] = useState({ personalData: null, isLoading: true });

  // useEffect(function getMyInfo() {
  //   async function fetchMyInfo() {
  //     const info = await PersonalInfoApi.getInfo();
  //     setInfo({ personalData: info, isLoading: false });
  //   }
  //   fetchMyInfo();
  // }, []);

  return (
    <div className='App'>
      {//info.isLoading ? <p>...Loading</p> : //TODO: replace with Loading component
        <>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path= "/home" element={<About/>} />
              <Route path= "/projects" element={<Projects/>} />
              <Route path= "/contact" element={<Contact/>} />
              <Route path= "/*" element={<Navigate to="/home"/>} />
            </Routes>
          </BrowserRouter>
        </>
      }
    </div>
  );
}

export default App;
