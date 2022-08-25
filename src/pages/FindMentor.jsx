import React, { useState } from "react";
import { Heading, Container, Select, Flex, Button } from "@chakra-ui/react";
import axios from "axios";
import MentorCard from "../components/MentorCard";
const FindMentor = () => {
  const [data, setData] = useState([]);

  const [industry, setIndustry] = React.useState("");
  const [city, setcity] = React.useState("");
  const handleChangeIndudtry = (event) => {
    setIndustry(event.target.value);
  };
  const handleChangeCity = (event) => {
    setcity(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/mentor/" + industry + "/" + city);
      setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Container maxW={"7xl"} p="12">
        <Heading as="h1" color="teal">
          Find Mentor
        </Heading>

        <Flex alignItems="center">
          <Select
            m={2}
            value={industry}
            onChange={handleChangeIndudtry}
            placeholder="Industry"
          >
            <option value="IT">Compute Science</option>
            <option value="Electronics">Electronics</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Electrical">Electrical</option>
          </Select>
          <Select
            m={2}
            value={city}
            onChange={handleChangeCity}
            placeholder="City"
          >
            <option value="Bangalore">Bangalore</option>
            <option value="Delhi">Delhi</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Kolkata">Kolkata</option>
          </Select>
          <Button
            onClick={fetchData}
            colorScheme="teal"
            size="sm"
            type="submit"
          >
            Search
          </Button>
        </Flex>

        {data.map((post) => (
          <MentorCard
            key={post._id}
            city={post.city}
            organisation={post.organisation}
            username={post.username}
            photo={post.photo}
            linkedin={post.linkedin}
            industry={post.industry}
          />
        ))}
      </Container>
    </>
  );
};

export default FindMentor;
