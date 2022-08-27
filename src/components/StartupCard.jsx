import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  useColorModeValue,
  Button,
  Flex,
} from "@chakra-ui/react";
import { AiFillLinkedin } from "react-icons/ai";
export const JobAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.email}</Text>
    </HStack>
  );
};

const JobTag = (props) => {
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

const StartupCard = ({ startupName, name, photo, domain, email, website }) => {
  return (
    <Box
      boxShadow="xl"
      p="6"
      rounded="md"
      bg="white"
      marginTop={{ base: "1", sm: "5" }}
    >
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
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
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={photo}
                alt="alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <JobTag tags={[domain]} />
          <Heading marginTop="1">
            <Link
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              color="teal"
            >
              {startupName}
            </Link>
          </Heading>

          <Flex justifyContent="space-between" alignItems="center">
            <JobAuthor name={name} email={email} />
            <Link href={website} isExternal textDecoration="none" ml="20px">
              <Button colorScheme="teal" size="md">
                <AiFillLinkedin size={30} />
              </Button>
            </Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default StartupCard;
