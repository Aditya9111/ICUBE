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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
export const AuctionAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text fontWeight="medium">{props.startupName}</Text>
      <Text>—</Text>
      <Text>{props.name}</Text>
    </HStack>
  );
};

const AuctionTag = (props) => {
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

const AuctionCard = ({
  title,
  description,
  photo,
  username,
  startupName,
  status,
  askprice,
  bids,
  id,
}) => {
  const data = JSON.parse(localStorage.getItem("login"));
  const name = data && data.name;

  const email = data && data.email;

  // const { isOpen, onOpen, onClose } = useDisclosure();

  const modal1 = useDisclosure();
  const modal2 = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [bidAmount, setbidAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: username,
      bidAmount: bidAmount,
      bidderId: email,
      bidderName: name,
    };

    try {
      await axios.post(`/api/auction/bid/${id}`, newPost);
      window.location.replace("/");
    } catch (err) {}
  };

  return (
    <>
      <Box
        boxShadow="md"
        p="6"
        rounded="md"
        bg="white"
        marginTop={{ base: "1", sm: "5" }}
        _hover={{ filter: "brightness(98%)", boxShadow: "sm" }}
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
            <AuctionTag tags={[status]} />
            <Heading marginTop="1">
              <Link
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
                color="teal"
              >
                {title}
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              {description}
            </Text>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              Ask Price : ₹ {askprice}
            </Text>

            <Flex justifyContent="space-between" alignItems="center">
              <AuctionAuthor name={username} startupName={startupName} />
              {status === "CLOSED" ? null : (
                <Link isExternal textDecoration="none" ml="20px">
                  <Button onClick={modal1.onOpen} colorScheme="teal" size="md">
                    Bid
                  </Button>
                </Link>
              )}
              <Button onClick={modal2.onOpen} colorScheme="teal" size="md">
                All biddings
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={modal1.isOpen}
          onClose={modal1.onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Place your bid</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleSubmit}>
              <ModalBody pb={6}>
                <Input placeholder="medium size" size="md" value={title} />

                <FormControl mt={4}>
                  <FormLabel>Amount</FormLabel>

                  <Input
                    type="text"
                    placeholder="Enter bidding amount"
                    onChange={(event) =>
                      setbidAmount(event.currentTarget.value)
                    }
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button type="submit" colorScheme="teal" mr={3}>
                  Bid
                </Button>

                <Button onClick={modal1.onClose}>Cancel</Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </>
      <>
        <Modal onClose={modal2.onClose} size={"xl"} isOpen={modal2.isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>All biddings</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Bidder Email</Th>
                      <Th isNumeric>Bid Amount</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {bids.map((bid) => (
                      <Tr>
                        <Td>{bid.bidderId}</Td>
                        <Td isNumeric> {bid.bidAmount} </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </ModalBody>
            <ModalFooter>
              <Button onClick={modal2.onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </>
  );
};

export default AuctionCard;
