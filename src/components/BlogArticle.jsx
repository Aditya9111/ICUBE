import React, { useState, useEffect } from "react";
import { Heading, Container, Link } from "@chakra-ui/react";
import axios from "axios";
import Navbar from "./NavBar";
import BlogCard from "./BlogCard";
const ArticleList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/blogs");
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
        <Heading as="h1" color="teal">
          Blogs by Icube
        </Heading>
        {loading && <div>Loading..</div>}
        {!loading && (
          <>
            {data.map((post) => (
              <Link href={`/blogs/${post._id}`} textDecoration="none">
                <BlogCard
                  key={post._id}
                  id={post._id}
                  title={post.title}
                  desc={post.desc}
                  categories={post.categories}
                  username={post.startupName}
                  photo={post.photo}
                />
              </Link>
            ))}
          </>
        )}
      </Container>
    </>
  );
};

export default ArticleList;
