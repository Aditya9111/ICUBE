import { Box } from "@chakra-ui/layout";
import React from "react";
import Header from "./Header";
import InvestorHeader from "./InvestorHeader";
// import { useSelector } from "react-redux";

export default function Layout({ children }) {
  // const { isInvestor } = useSelector((state) => state.invauth);

  const { isInvestor } = JSON.parse(localStorage.getItem("login"));

  return (
    <Box display="flex" flexFlow="column" height="100vh" bg={"gray.50"}>
      {isInvestor ? <InvestorHeader /> : <Header />}

      <Box height="100%" flex="1 1 auto" pt="20">
        {children}
      </Box>
    </Box>
  );
}
