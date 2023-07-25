import logo from './logo.svg';
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./components/RegisterAndLogin";
import Home from "./components/Home";
import './App.css';
import {database} from './components/FireBaseConfig'
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<RegisterAndLogin />}/>
        <Route path="/home" element={<Home/>}/>

    </Routes>
</BrowserRouter>
  );
}

export default App;
