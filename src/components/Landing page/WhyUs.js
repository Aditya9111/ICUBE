import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

export default function WhyUs() {
  return (
    <Box bg={"gray.200"} position={"relative"}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        backgroundImage="url('/templates/stats-grid-with-image.png')"
        backgroundSize={"cover"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={"absolute"}
        width={"50%"}
        insetY={0}
        right={0}
      >
        <Flex
          bgGradient={"linear(to-r, gray.200 10%, transparent)"}
          w={"full"}
          h={"full"}
        />
      </Flex>
      <Container maxW={"7xl"} zIndex={10} position={"relative"}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            flex={1}
            color={"gray.100"}
            justify={{ lg: "center" }}
            py={{ base: 4, md: 20, xl: 20 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={"heading"}
                fontWeight={700}
                textTransform={"uppercase"}
                mb={3}
                fontSize={"xl"}
                color={"black"}
              >
                Technology
              </Text>
              <Heading
                color={"black"}
                mb={5}
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                21st century agriculture
              </Heading>
              <Text fontSize={"xl"} color={"black"}>
                The NewLife™ technology allows you to monitor your crops and get
                complete insights at real time. The proprietary
                software/hardware ecosystem prevents your plants from getting
                neglected.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={"heading"}
                    fontSize={"3xl"}
                    color={"black"}
                    mb={3}
                  >
                    {stat.title}
                  </Text>
                  <Text fontSize={"xl"} color={"black"} colorScheme={"black"}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }) => (
  <Text as={"span"} fontWeight={700} color={"black"}>
    {children}
  </Text>
);

const stats = [
  {
    title: "10+",
    content: (
      <>
        <StatsText>Software modules</StatsText> for detailed monitoring and
        real-time analytics
      </>
    ),
  },
  {
    title: "24/7",
    content: (
      <>
        <StatsText>Analytics</StatsText> enabled right in your dashboard without
        history limitations
      </>
    ),
  },
  {
    title: "13%",
    content: (
      <>
        <StatsText>Farms</StatsText> in North America has chosen NewLife™ as
        their management solution
      </>
    ),
  },
  {
    title: "250M+",
    content: (
      <>
        <StatsText>Plants</StatsText> currently connected and monitored by the
        NewLife™ software
      </>
    ),
  },
];
