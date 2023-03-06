import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Renderer from "./Renderer";

const HomeRoot = () => {
  return (
    <Box>
      <Navbar />
      <Renderer />
    </Box>
  );
};

export default HomeRoot;
