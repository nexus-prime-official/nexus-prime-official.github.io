import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import PageNotFound from "./pages/PageNotFound/PageNotFound";
import SmallScreen from "./Components/SmallScreen/SmallScreen";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <SmallScreen />
    </BrowserRouter>
  )
};

export default App;