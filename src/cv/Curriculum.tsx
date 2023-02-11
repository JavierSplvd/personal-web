import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { color4 } from "../home/colors";
import { LateralBar } from "./LateralBar";
import { MainContent } from "./MainContent";

export const Curriculum: React.FC<{}> = (props: any) => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      justifyContent="center"
      backgroundColor="gray.200"
    >
      <Box
        width="71vh"
        height="100vh"
        backgroundColor="white"
        boxShadow="5px 5px 5px 5px gray"
        position="relative"
      >
        <Flex
          id="header"
          width="100%"
          height="20vh"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          backgroundColor={color4}
        >
          <Heading
            fontSize="3.5rem"
            letterSpacing="0.5rem"
            fontFamily="Bebas Neue"
          >
            JAVIER SEPÚLVEDA
          </Heading>
          <Text letterSpacing="0.4rem">SOFTWARE DEVELOPER</Text>
        </Flex>
        <Grid
          height="80vh"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
        >
          <LateralBar />
          <MainContent />
        </Grid>
        <Text
          position="absolute"
          bottom="1rem"
          right="2rem"
          fontStyle="italic"
          fontSize="0.6rem"
        >
          Created with React+Chakra-UI
        </Text>
      </Box>
    </Flex>
  );
};
