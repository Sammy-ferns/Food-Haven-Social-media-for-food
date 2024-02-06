import React, { useState } from "react";
import {
  TextField,
  Button,
  Text,
  Box,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import FileBase from "react-file-base64";
import { set } from "mongoose";

function Form() {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    description: "",
    tags: "",
    recipe: "",
    ingredients: "",
    selectedFile: "",
  });
  const handleSubmit = () => {};
  const clear = () => {};
  return (
    <Box className="">
      <form
        autoComplete="off"
        noValidate
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          border: "1em solid #F3CCF3",
          padding: "20px",
        }}
        onSubmit={handleSubmit}
      >
        <Text as="h6">Whippin' up a new Post</Text>
        <FormLabel htmlFor="creator">Creator</FormLabel>
        <Input
          name="creator"
          variant="filled"
          id="creator" // Add an ID for the label to reference
          size="md" // Make the input full-width
          value={postData.creator}
          onChange={(e) => {
            setPostData({ ...postData, creator: e.target.value });
          }}
        />
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input
          name="title"
          variant="filled"
          id="title" // Add an ID for the label to reference
          size="md" // Make the input full-width
          value={postData.title}
          onChange={(e) => {
            setPostData({ ...postData, title: e.target.value });
          }}
        />
        <FormLabel htmlFor="description">Description</FormLabel>
        <Input
          name="description"
          variant="filled"
          id="description" // Add an ID for the label to reference
          size="md" // Make the input full-width
          value={postData.description}
          onChange={(e) => {
            setPostData({ ...postData, description: e.target.value });
          }}
        />
        <FormLabel htmlFor="ingredients">Ingredients</FormLabel>
        <Input
          name="ingredients"
          variant="filled"
          id="ingredients" // Add an ID for the label to reference
          size="md" // Make the input full-width
          value={postData.ingredients}
          onChange={(e) => {
            setPostData({ ...postData, ingredients: e.target.value });
          }}
        />
        <FormLabel htmlFor="recipe">Recipe</FormLabel>
        <Input
          name="recipe"
          variant="filled"
          id="recipe" // Add an ID for the label to reference
          size="md" // Make the input full-width
          value={postData.recipe}
          onChange={(e) => {
            setPostData({ ...postData, recipe: e.target.value });
          }}
        />
        <FormLabel htmlFor="tags">Tags</FormLabel>
        <Input
          name="tags"
          variant="filled"
          id="tags" // Add an ID for the label to reference
          size="md" // Make the input full-width
          value={postData.tags}
          onChange={(e) => {
            setPostData({ ...postData, tags: e.target.value });
          }}
        />
        <div
          style={{
            width: "97%",
            margin: "10px 0",
          }}
        >
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          mb={4} // Using spacing prop for margin-bottom equivalent to 10px
          variant="solid" // Equivalent to "contained"
          colorScheme="primary" // Equivalent to "color" with value "primary"
          size="md" // Equivalent to "size" with value "large"
          type="submit"
          backgroundColor="pink"
          margin="0.2em"
          isFullWidth
        >
          Submit
        </Button>
        <Button
          mb={4} // Using spacing prop for margin-bottom equivalent to 10px
          variant="solid" // Equivalent to "contained"
          colorScheme="secondary" // Equivalent to "color" with value "primary"
          size="md" // Equivalent to "size" with value "large"
          onClick={clear}
          backgroundColor="pink"
          margin="0.2em"
          isFullWidth
        >
          Clear
        </Button>
      </form>
    </Box>
  );
}

export default Form;
