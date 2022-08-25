import React, { useState } from "react";
import InvestorSignIn from "../components/InvestorLoginForm";
import InvestorRegisterForm from "../components/InvestorRegisterForm";
import Navbar from "../components/NavBar";
export default function InvestorLogin() {
  const [registered, setRegistered] = useState(true);
  return (
    <>
      {registered ? (
        <>
          <Navbar />
          <InvestorSignIn setRegistered={setRegistered} />
        </>
      ) : (
        <>
          <Navbar />
          <InvestorRegisterForm setRegistered={setRegistered} />
        </>
      )}
    </>
  );
}
