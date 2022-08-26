import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function InvestorRoute({ path, ...props }) {
  const { isLoggedIn } = useSelector((state) => state.invauth);
  if (isLoggedIn) {
    return <Route path={path} {...props} />;
  } else {
    return <Redirect to="/home" />;
  }
}
