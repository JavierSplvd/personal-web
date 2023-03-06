import { Box, ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { theme } from "./config/theme";
import { Curriculum } from "./cv/Curriculum";
import { color1 } from "./home/colors";
import HomeRoot from "./home/HomeRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Box className="App" backgroundColor={color1} height="100%" width="100%">
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
