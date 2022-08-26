import React from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  Text,
  MenuDivider,
  MenuGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

export default function InvestorHeader() {
  const dispatch = useDispatch();

  const { email, name, startupName, organisation } = JSON.parse(
    localStorage.getItem("login")
  );
  const variant = useBreakpointValue({ base: "base", sm: "sm", md: "md" });

  return (
    <>
      <Box
        flex="0 1 auto"
        position="fixed"
        zIndex="999"
        width="100%"
        height={"65px"}
        bg={"white"}
        px="5"
        pt="3"
        boxShadow="base"
      >
        <Flex justify="space-between">
          <Flex alignItems="center" justify="flex-start">
            <Link to="/">
              <Text
                color={"teal"}
                fontSize="xl"
                fontWeight="bold"
                alignItems={"center"}
              >
                ICUBE
              </Text>
            </Link>
            <Link hidden={variant === "sm" || variant === "base"} to="/">
              <Button mx="2" colorScheme="teal" variant="ghost">
                Home
              </Button>
            </Link>

            <Link
              hidden={variant === "sm" || variant === "base"}
              to="/findStartup"
            >
              <Button mx="2" colorScheme="teal" variant="ghost">
                Find Startup
              </Button>
            </Link>
          </Flex>
          <Flex alignItems="center">
            <Menu>
              <MenuButton mx="2" as={Button} colorScheme="">
                <Avatar bg="teal" size="sm" name={name} />
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem>{startupName || organisation}</MenuItem>
                  <MenuItem>{name}</MenuItem>
                  <MenuItem>{email}</MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup>
                  <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
