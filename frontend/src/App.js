import React, { useEffect } from "react";
import {
  Box,
  ChakraProvider,
  Container,
  Text,
  Image,
  Grid,
} from "@chakra-ui/react";
import { getPosts } from "./actions/posts";
import pastelFood from "./images/pastelFood.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
// import { createStyles } from "./styles";
import { customTheme } from "./styles";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <ChakraProvider theme={customTheme}>
      <Container maxWidth="lg">
        <Box
          sx={{
            borderRadius: "15px",
            m: "30px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bg: "Pink",
          }}
        >
          <Text fontSize="xl" fontWeight="bold" color={"white"}>
            Food Haven
          </Text>
          <Image src={pastelFood} alt="Food" height={10} sx={{ ml: "15px" }} />
        </Box>
      </Container>
      <Container>
        <Grid gap={3} spacing={4}>
          <Box gridColumn="span 7" gridRow="1 / 3">
            {/* <Posts /> */}
          </Box>
          <Box gridColumn="span 5" gridRow="1 / 3">
            <Form />
          </Box>
        </Grid>
        {/* <IconAttribution /> */}
      </Container>
    </ChakraProvider>
  );
}

export default App;
