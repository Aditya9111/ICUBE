import React, { useState } from "react";
import { Heading, Container } from "@chakra-ui/react";
import axios from "axios";
import StartupCard from "../components/StartupCard";
import { useEffect } from "react";
const Admin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/auth/unverifiedStartups");
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Container maxW={"7xl"} p="12">
        <Heading as="h1" color="teal">
          Verify Startups
        </Heading>

        {data.map((post) => (
          <StartupCard
            photo={
              "https://i0.wp.com/www.inventiva.co.in/wp-content/uploads/2022/06/BgWmTW6J-startup-company-1.jpg"
            }
            name={post.name}
            startupName={post.startupName}
            email={post.email}
            domain={post.domain}
            website={
              '"https://i0.wp.com/www.inventiva.co.in/wp-content/uploads/2022/06/BgWmTW6J-startup-company-1.jpg"'
            }
          />
        ))}
      </Container>
    </>
  );
};

export default Admin;
