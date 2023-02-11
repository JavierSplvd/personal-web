import { EmailIcon, PhoneIcon, Search2Icon } from "@chakra-ui/icons";
import { Divider, Flex, GridItem, Text } from "@chakra-ui/react";
import { color2 } from "../home/colors";
import { HeadingCV } from "./HeadingCV";

export function ContactEducationAndSkills() {
  return (
    <>
      <GridItem
        rowSpan={1}
        colSpan={1}
        bg={color2}
        color="white"
        fontSize="0.7rem"
        paddingLeft="2rem"
        paddingTop="3rem"
      >
        <Flex flexDirection="column">
          <HeadingCV variant="light">CONTACT</HeadingCV>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="14rem"
            textAlign="center"
            paddingRight="0.5rem"
          >
            <Search2Icon boxSize="2rem" marginBottom="0.5rem" />
            <Text>San Fernando de Henares, Madrid</Text>
            <Divider margin="0.5rem 0rem" width="8rem" />
            <PhoneIcon boxSize="2rem" marginBottom="0.5rem" />
            <Text>+34 629 644 848</Text>
            <Divider margin="0.5rem 0rem" width="8rem" />
            <EmailIcon boxSize="2rem" marginBottom="0.5rem" />
            <Text wordBreak="break-word">
              javier.sepulveda.verdugo@gmail.com
            </Text>
          </Flex>
          <HeadingCV variant="light">EDUCATION</HeadingCV>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="12rem"
            textAlign="center"
            paddingRight="0.5rem"
          >
            <Text>
              Master en Ingeniería de Caminos, Canales y Puertos (UPM)
            </Text>
            <Text fontStyle="italic">2016 - 2018</Text>
            <Divider margin="0.5rem 0rem" width="8rem" />

            <Text>Exchange at Universidad Federico Santa María, Chile</Text>
            <Text fontStyle="italic">2015 (6 months)</Text>
            <Divider margin="0.5rem 0rem" width="8rem" />

            <Text>Grado en Ingeniería Civil y Territorial (UPM)</Text>
            <Text fontStyle="italic">2011 - 2016</Text>
          </Flex>

          <HeadingCV variant="light">SKILLS</HeadingCV>
          <Text>Cambridge C1 Advanced</Text>
          <Text>AWS Cloud</Text>
          <Text>Java / Kotlin</Text>
          <Text>Typescript + Node.js + React</Text>
          <Text>Unity (iOS / Android / WebGL)</Text>
        </Flex>
      </GridItem>
    </>
  );
}
