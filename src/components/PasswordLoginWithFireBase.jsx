import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./RegisterAndLogin";
import Home from "./Home";
import './PasswordLoginWithFireBase.css'
const PasswordLoginWithFireBase = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RegisterAndLogin />}/>
                <Route path="/home" element={<Home/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default PasswordLoginWithFireBase