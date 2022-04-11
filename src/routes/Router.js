import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../views/pages/signup/SignUp";
import Login from "../views/pages/Login/Login";
const Router = () => {
  return (
    <Routes>
      <Route path="/React-Login-Form" element={<SignUp />} />
      <Route path="/" element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};

export default Router;
