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
  Select,
} from "@chakra-ui/react";

export default function PostAuction() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImg] = useState("");
  const [duration, setduration] = useState(0);
  const [funding, setfunding] = useState(0);

  const { name, startupName, email } = JSON.parse(
    localStorage.getItem("login")
  );

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setDesc(inputValue);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: name,
      title,
      description: desc,
      duration,
      userId: email,
      startupName,
      photo: image,
      fundingTarget: funding,
    };

    try {
      await axios.post("/api/auction", newPost);
      window.location.replace("/");
    } catch (err) {}
  };

  const handleChangeDuration = (event) => {
    setduration(event.target.value);
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
          <Select
            my={6}
            value={duration}
            onChange={handleChangeDuration}
            placeholder="Duration of campaign"
          >
            <option value="15">15 days</option>
            <option value="30">30 days</option>
          </Select>
          <FormControl mt={6}>
            <FormLabel>Enter image related to campaign </FormLabel>
            <Input
              type="text"
              placeholder="Enter image related to campaign"
              onChange={(event) => setImg(event.currentTarget.value)}
            />
          </FormControl>
          <Text mt={6} fontWeight={"bold"} fontSize={"16"} mb={2}>
            Explain funding requirement :
          </Text>
          <Textarea
            mt={6}
            value={desc}
            onChange={handleInputChange}
            placeholder="Explain funding requirement."
            size="sm"
          />
          <FormControl mt={6}>
            <FormLabel>Value of share to be auctioned</FormLabel>
            <Input
              type="text"
              placeholder="Enter value of share to be auctioned"
              onChange={(event) => setfunding(event.currentTarget.value)}
            />
          </FormControl>
          <Button mt={6} colorScheme="teal" type="submit">
            Publish
          </Button>
        </form>
      </Box>
    </>
  );
}
