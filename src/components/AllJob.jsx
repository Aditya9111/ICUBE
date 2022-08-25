import React, { useState, useEffect } from "react";
import { Heading, Container, Link } from "@chakra-ui/react";
import axios from "axios";
import Navbar from "./NavBar";
import JobCard from "./JobCard";
const JobList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/jobs");
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <Navbar />
      <Container maxW={"7xl"} p="12">
        <Heading as="h1" color={"teal"}>
          Jobs by Icube
        </Heading>
        {loading && <div>Loading</div>}
        {!loading && (
          <>
            {data.map((post) => (
              <Link href={`/jobDetails/${post._id}`} textDecoration="none">
                <JobCard
                  key={post._id}
                  id={post._id}
                  title={post.title}
                  desc={post.jobDesc}
                  startupName={post.startupName}
                  username={post.startupName}
                  logo={post.logo}
                  jobType={post.jobType}
                  jobLink={post.jobLink}
                />
              </Link>
            ))}
          </>
        )}
      </Container>
    </>
  );
};

export default JobList;
