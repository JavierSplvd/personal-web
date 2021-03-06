import { Box, Container, Heading, Text, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Renderer from "./Renderer";
import Navbar from "./Navbar";

const HomeRoot = () => {
  return (
    <Box>
      <Navbar />
      <Renderer />
      <Container paddingTop="3rem">
        <Box zIndex={10} position="relative">
          <motion.div animate={{ y: 100 }}>
            <Center
              backgroundColor="whiteAlpha.500"
              h="4rem"
              color="white"
              borderRadius="1rem"
              margin="1rem"
              textAlign="center"
            >
              Hi! I'm Javier and I'm passionate about development.
            </Center>
            <Heading
              color="white"
              fontFamily="Nunito"
              borderBottom="6px solid #ffffff40"
            >
              Javier SepĂșlveda
            </Heading>
            <Text color="whiteAlpha.800">
              Software developer (MSc Civil Engineering)
            </Text>
            <Heading
              color="white"
              fontFamily="Nunito"
              size="md"
              marginTop="2rem"
            >
              Bio
            </Heading>
            <Text color="whiteAlpha.800" textAlign={"justify"}>
              Javier is a full-stack developer based in Madrid. He has
              experience in different technologies for the frontend (React,
              Angular), backend (Express.js, Micronaut) and infrastructure (AWS,
              Terraform). With a background in Civil Engineering he has problem
              solving skills and critical thinking. In his spare time he likes
              to draw and paint and enjoying nature.
            </Text>
            <Box height="50px" />
            <Text color="whiteAlpha.300" textAlign={"center"}>
              Designed by Javier SepĂșlveda
            </Text>
            <Box height="60px" />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeRoot;
