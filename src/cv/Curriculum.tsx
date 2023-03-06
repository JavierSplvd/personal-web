import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
  useColorMode
} from "@chakra-ui/react";
import React from "react";
import { color4 } from "../home/colors";
import { AboutAndExperience } from "./AboutAndExperience";
import { ContactEducationAndSkills } from "./ContactEducationAndSkills";

export const Curriculum: React.FC<{}> = (props: any) => {
  const { setColorMode } = useColorMode();
  setColorMode("light");

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
          height="18%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          backgroundColor={color4}
        >
          <Heading fontSize="3.5rem" fontFamily="Noto Sans TC">
            JAVIER SEPULVEDA
          </Heading>
          <Text letterSpacing="0.22rem">
            <b>FULLSTACK DEVELOPER</b> - 5 YEARS OF EXPERIENCE
          </Text>
        </Flex>
        <Grid
          height="82%"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(3, 1fr)"
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
