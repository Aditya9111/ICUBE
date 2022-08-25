import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react";

const Logo = (props) => {
  return (
    <Avatar
      size="md"
      src="https://firebasestorage.googleapis.com/v0/b/test-5207a.appspot.com/o/images%2Flogo.png?alt=media&token=98be249a-7f93-449d-a732-bd468b9aa0d5"
    />
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>© 2022 ICUBE. All rights reserved</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Product</ListHeader>
            <Link href={"#"}>Overview</Link>
            <Link href={"#"}>Features</Link>
            <Link href={"#"}>Tutorials</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Releases</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Press</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Contact</Link>
            <Link href={"#"}>Partners</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Status</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>Dribbble</Link>
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
