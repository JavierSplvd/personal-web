import { Box, ChakraProvider } from "@chakra-ui/react";
import HomeRoot from "./home/HomeRoot";
import { color1 } from "./home/colors";

function App() {
  return (
    <ChakraProvider>
      <Box
        className="App"
        backgroundColor={color1}
        minHeight="calc(100vh + 100px)"
        height="100%"
        width="100%"
      >
        <HomeRoot />
      </Box>
    </ChakraProvider>
  );
}

export default App;
