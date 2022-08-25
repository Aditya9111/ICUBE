import { Box } from "@chakra-ui/layout";
import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <Box display="flex" flexFlow="column" height="100vh" bg={"gray.50"}>
      <Header />
      <Box height="100%" flex="1 1 auto" pt="20">
        {children}
      </Box>
    </Box>
  );
}
