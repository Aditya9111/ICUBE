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

export default function PostJob() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImg] = useState("");
  const [jobLink, setJobLink] = useState("");

  const { name, startupName } = JSON.parse(localStorage.getItem("login"));
  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setDesc(inputValue);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newJob = {
      title,
      jobDesc: desc,
      logo: image,
      username: name,
      jobType: type,
      startupName,
      jobLink,
    };
    console.log(newJob);
    try {
      const res = await axios.post("/api/jobs", newJob);
      console.log(res);
      window.location.replace("/job/");
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
              placeholder="Enter Job title"
              onChange={(event) => setTitle(event.currentTarget.value)}
            />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Job type</FormLabel>
            <Input
              type="text"
              placeholder="Enter job type- Full time/ Internship"
              onChange={(event) => setType(event.currentTarget.value)}
            />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Job URL </FormLabel>
            <Input
              type="text"
              placeholder="Enter Job url"
              onChange={(event) => setJobLink(event.currentTarget.value)}
            />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Image URL </FormLabel>
            <Input
              type="text"
              placeholder="Enter Company logo url"
              onChange={(event) => setImg(event.currentTarget.value)}
            />
          </FormControl>

          <Text mt={6} fontWeight={"bold"} fontSize={"16"} mb={2}>
            Job description :
          </Text>
          <Textarea
            mt={6}
            value={desc}
            onChange={handleInputChange}
            placeholder="Enter job description"
            size="sm"
          />
          <Button mt={6} colorScheme="teal" type="submit">
            Post
          </Button>
        </form>
      </Box>
    </>
  );
}
