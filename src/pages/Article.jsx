import React, { useEffect, useState } from "react";
import { Box, Heading, Link, Image, Text, HStack, Tag } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Navbar from "../components/NavBar";
import axios from "axios";
export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const BlogCard = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/blogs/" + id);
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);
  console.log("/api/blogs/" + id);
  return (
    <>
      {loading && <div>Loading..</div>}
      {!loading && (
        <>
          <Navbar />
          <Box p="6" bg="white" marginTop={{ base: "1", sm: "5" }}>
            <Box
              alignItems={"center"}
              display="flex"
              flexDirection={{ base: "column" }}
              justifyContent="space-between"
            >
              <Heading marginTop="1">
                <Link
                  color="teal"
                  textDecoration="none"
                  _hover={{ textDecoration: "none" }}
                >
                  {data["title"]}
                </Link>
              </Heading>
              <Box
                display="flex"
                flex="1"
                marginRight="3"
                position="relative"
                alignItems="center"
              >
                <Box
                  width={{ base: "50%", sm: "85%" }}
                  zIndex="2"
                  marginLeft={{ base: "0", sm: "5%" }}
                  marginTop="5%"
                >
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Image
                      borderRadius="lg"
                      width={"400px"}
                      height={"300px"}
                      objectFit="cover"
                      src={data["photo"]}
                      alt=" alt text"
                      margin={"20px"}
                    />
                  </Link>
                </Box>
                <Box zIndex="1" width="100%" position="absolute" height="100%">
                  <Box backgroundSize="20px 20px" opacity="0.4" height="100%" />
                </Box>
              </Box>
              <Box
                m={50}
                display="flex"
                flex="1"
                flexDirection="column"
                justifyContent="center"
                marginTop={{ base: "20", sm: "0" }}
              >
                <BlogTags tags={[data["categories"]]} />

                <Text as="p" marginTop="2" fontSize="lg" alignItems={"center"}>
                  {data["desc"]}
                </Text>
                <BlogAuthor
                  name={data["username"]}
                  date={new Date("2021-04-06T19:01:27Z")}
                />
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default BlogCard;
