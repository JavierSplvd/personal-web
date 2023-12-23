import { Box } from "@chakra-ui/react";
import { Menu } from "./Menu";
import Navbar from "./Navbar";
import Renderer from "./Renderer";

const HomeRoot = () => {
  return (
    <Box>
      <Menu />
      <Renderer />
    </Box>
  );
};

export default HomeRoot;
