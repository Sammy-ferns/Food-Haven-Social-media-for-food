import {
  Box,
  Heading,
  Flex,
  Image,
  Grid,
  Container,
  useColorModeValue,
  ChakraProvider,
} from "@chakra-ui/react";
import foodHaven from "./images/foodHaven.avif";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
// import { createStyles } from "./styles";

function App() {
  return (
    <ChakraProvider>
      <Container maxW="lg">
        <Flex as="header" alignItems="center" justifyContent="space-between">
          <Heading
            as="h2"
            size="lg"
            textAlign="center"
            justifySelf="center"
            alignSelf="center"
          >
            Food Haven
            <Image
            src={foodHaven}
            alt="Food Haven"
            justifySelf="center"
            alignSelf="center"
          />
          </Heading>
          
        </Flex>
        <Grid
          templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
          gap={3}
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={7} justifySelf="center" alignSelf="center">
            <Posts />
          </Grid>
          <Grid item md={7} justifySelf="center" alignSelf="center">
            <Form />
          </Grid>
        </Grid>
      </Container>
    </ChakraProvider>
  );
}

export default App;
