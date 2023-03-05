import { Box, Container } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Renderer from "./Renderer";

const HomeRoot = () => {
  return (
    <Box>
      <Navbar />
      <Renderer />
      <Container paddingTop="3rem">
        <Box zIndex={10} position="relative"></Box>
      </Container>
    </Box>
  );
};

export default HomeRoot;
