import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";
import { UserContext } from "../../context/useContext";
import LoginCreate from "./LoginCreate/LoginCreate";
import LoginForm from "./LoginForm/LoginForm";
import LostPassword from "./LostPassword/LostPassword";
import ResetPassword from "./ResetPassword/ResetPassword";

const Login = () => {
  const { login } = useContext(UserContext)

  if(login === true) return <Navigate to="/account"/>
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="lost" element={<LostPassword />} />
        <Route path="reset" element={<ResetPassword />} />
      </Routes>
    </>
  );
};

export default Login;
