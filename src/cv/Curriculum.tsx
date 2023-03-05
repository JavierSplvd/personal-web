import { Box, Flex, Grid, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import { color4 } from "../home/colors";
import { ContactEducationAndSkills } from "./ContactEducationAndSkills";
import { AboutAndExperience } from "./AboutAndExperience";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const Curriculum: React.FC<{}> = (props: any) => {
  return (
    <Flex
      minWidth="21cm"
      minHeight="29.7cm"
      width="100vw"
      height="100vh"
      justifyContent="center"
      backgroundImage="radial-gradient(circle, #e1e1e1, gray)"
    >
      <Box
        width="21cm"
        height="29.7cm"
        backgroundColor="white"
        // boxShadow="5px 5px 5px 5px gray"
        position="relative"
      >
        <Flex
          id="header"
          width="100%"
          height="20%"
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
          <Text letterSpacing="0.15rem">
            <b>FULLSTACK DEVELOPER</b> - 5 YEARS OF EXPERIENCE
          </Text>
        </Flex>
        <Grid
          height="80%"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
        >
          <ContactEducationAndSkills />
          <AboutAndExperience />
        </Grid>
        <Text
          position="absolute"
          bottom="1rem"
          right="2rem"
          fontStyle="italic"
          fontSize="0.6rem"
        >
          Created with React+Chakra-UI (
          <Link href="https://github.com/JavierSplvd/personal-web">
            Github
            <ExternalLinkIcon mx="2px" />
          </Link>
          <Link href="https://www.javiersepulveda.es/cv">
            Web
            <ExternalLinkIcon mx="2px" />
          </Link>
          )
        </Text>
      </Box>
    </Flex>
  );
};
