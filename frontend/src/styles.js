// import { createStyles } from "@chakra-ui/react";

// export default createStyles({
//   Box: {
//     borderRadius: "15px",
//     m: "30px 0",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// heading: {
//   color: "rgba(0,183,255, 1)",
// },
//   image: {
//     ml: "15px",
//   },
// });

import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "pink.50",
      },
      a: {
        color: "blue.500",
      },
    },
  },
});
