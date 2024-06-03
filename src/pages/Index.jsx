import { Container, Text, VStack, Box, Flex, Spacer, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Heading size="md">MyApp</Heading>
        <Spacer />
        <Button as={Link} to="/" variant="ghost" colorScheme="whiteAlpha">
          Home
        </Button>
      </Flex>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="80vh">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>Start building your application by editing this page.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;