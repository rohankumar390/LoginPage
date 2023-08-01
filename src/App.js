import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./components/RegisterAndLogin";
import HomeScreen from "./components/Home";
import ForgotPassword from "./components/ForgetPass";

function App() {
  const logedIn = window.localStorage.getItem("isLoggedIn");
  console.log(logedIn);
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            exact
            element={logedIn === true ? <HomeScreen /> : <RegisterAndLogin />}
          />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/reset" element={<ForgotPassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
