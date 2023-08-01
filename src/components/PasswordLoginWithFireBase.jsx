import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./RegisterAndLogin";
import Home from "./Home";
import './PasswordLoginWithFireBase.css'
const PasswordLoginWithFireBase = () => {
    const loggedIn = window.localStorage.getItem("isLoggedIn");
    console.log(loggedIn, "login");
    return (
        <BrowserRouter>
            {/* <Routes>
                <Route path="/" element={loggedIn===false ? <RegisterAndLogin /> : <Home />}/>
                <Route path="/home" element={loggedIn===false ? <RegisterAndLogin /> : <Home />}/>

            </Routes> */}
        </BrowserRouter>
    )
}

export default PasswordLoginWithFireBase