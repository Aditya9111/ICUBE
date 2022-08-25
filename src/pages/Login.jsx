import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import Navbar from "../components/NavBar";
export default function Login() {
  const [registered, setRegistered] = useState(true);
  return (
    <>
      {registered ? (
        <>
          <Navbar />
          <LoginForm setRegistered={setRegistered} />
        </>
      ) : (
        <>
          <Navbar />
          <RegisterForm setRegistered={setRegistered} />
        </>
      )}
    </>
  );
}
