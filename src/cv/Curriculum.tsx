import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { color4 } from "../home/colors";

export const Curriculum: React.FC<{}> = (props: any) => {
  return (
    <Box width="100vw" height="100vh">
      <Flex
        id="header"
        width="100%"
        height="20vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor={color4}
      >
        <Heading fontFamily="Nunito">JAVIER SEPÚLVEDA</Heading>
        <Text>Software Developer</Text>
      </Flex>
      <Grid
        height="80vh"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="gray">
          Contact Education Skills
        </GridItem>
        <GridItem colSpan={2} bg="white">
          About Me Experience Arup Trainee Autentia Consultant Arup Software
          Developer
        </GridItem>
      </Grid>
    </Box>
  );
};
