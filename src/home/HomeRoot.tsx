import { Box, Container, Heading, Text, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Renderer from "./Renderer";
import Navbar from "./Navbar";
import { color1alpha, color2 } from "./colors";

const HomeRoot = () => {
  return (
    <Box>
      <Navbar />
      <Renderer />
      <Container paddingTop="3rem">
        <Box zIndex={10} position="relative">
          <motion.div animate={{ y: 100 }}>
            <Center
              backgroundColor={color1alpha}
              h="4rem"
              color={color2}
              borderRadius="1rem"
              margin="1rem"
              textAlign="center"
            >
              Hi! I'm Javier and I'm passionate about development.
            </Center>
            <Heading
              color={color2}
              fontFamily="Nunito"
              borderBottom="6px solid #ffffff40"
            >
              Javier Sepúlveda
            </Heading>
            <Text color={color2}>
              Software developer (MSc Civil Engineering)
            </Text>
            <Heading
              color={color2}
              fontFamily="Nunito"
              size="md"
              marginTop="2rem"
            >
              Bio
            </Heading>
            <Text color={color2} textAlign={"justify"}>
              Javier is a full-stack developer based in Madrid. He has
              experience in different technologies for the frontend (React,
              Angular), backend (Express.js, Micronaut) and infrastructure (AWS,
              Terraform). With a background in Civil Engineering he has problem
              solving skills and critical thinking. In his spare time he likes
              to draw and paint and enjoying nature.
            </Text>
            <Box height="50px" />
            <Text color={color2} textAlign={"center"}>
              Designed by Javier Sepúlveda
            </Text>
            <Box height="60px" />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeRoot;
