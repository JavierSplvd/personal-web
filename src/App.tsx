import { Box, ChakraProvider } from "@chakra-ui/react";
import HomeRoot from "./home/HomeRoot";
import { color1 } from "./home/colors";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Curriculum } from "./cv/Curriculum";
import { theme } from "./config/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Box
        className="App"
        backgroundColor={color1}
        height="100%"
        width="100%"
      >
        <HomeRoot />
      </Box>
    ),
  },
  {
    path: "/cv",
    element: <Curriculum />,
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
