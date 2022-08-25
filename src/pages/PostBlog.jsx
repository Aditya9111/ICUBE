import { useState } from "react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Box,
  Text,
} from "@chakra-ui/react";

export default function PostBlog() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImg] = useState("");
  const [categories, setcategories] = useState("");

  const { name, startupName } = JSON.parse(localStorage.getItem("login"));

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setDesc(inputValue);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: name,
      title,
      desc,
      categories,
      startupName,
      photo: image,
    };

    try {
      await axios.post("/api/blogs", newPost);
      window.location.replace("/blog/");
    } catch (err) {}
  };
  return (
    <>
      <Box p={10}>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              placeholder="Enter title"
              onChange={(event) => setTitle(event.currentTarget.value)}
            />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Categories</FormLabel>
            <Input
              type="text"
              placeholder="Enter description"
              onChange={(event) => setcategories(event.currentTarget.value)}
            />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Image URL </FormLabel>
            <Input
              type="text"
              placeholder="Enter image url"
              onChange={(event) => setImg(event.currentTarget.value)}
            />
          </FormControl>
          <Text mt={6} fontWeight={"bold"} fontSize={"16"} mb={2}>
            Blog :
          </Text>
          <Textarea
            mt={6}
            value={desc}
            onChange={handleInputChange}
            placeholder="Enter blog"
            size="sm"
          />
          <Button mt={6} colorScheme="teal" type="submit">
            Publish
          </Button>
        </form>
      </Box>
    </>
  );
}
