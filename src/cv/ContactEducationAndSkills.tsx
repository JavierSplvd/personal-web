import {
  ChatIcon,
  EmailIcon,
  ExternalLinkIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import {
  Badge,
  Divider,
  Flex,
  GridItem,
  Link,
  Text,
  Stack,
} from "@chakra-ui/react";
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
          <HeadingCV borderLeft={true} variant="light">
            LANGUAGES
          </HeadingCV>
          <Flex direction="row" flexWrap="wrap" style={{ gap: "0.5rem" }}>
            <Badge>English (C1 Cambridge)</Badge>
            <Badge>Spansih (Native)</Badge>
          </Flex>
          <HeadingCV borderLeft={true} variant="light">
            SKILLS
          </HeadingCV>
          <Flex direction="row" flexWrap="wrap" style={{ gap: "0.5rem" }}>
            <Badge>Java</Badge>
            <Badge>Kotlin</Badge>
            <Badge>Typescript</Badge>
            <Badge>Node.js</Badge>
            <Badge>React</Badge>
            <Badge>AWS</Badge>
            <Badge>Github</Badge>
            <Badge>Gitlab</Badge>
            <Badge>Unity</Badge>
            <Badge>3D modelling</Badge>
            <Badge>JIRA</Badge>
          </Flex>
          <HeadingCV borderLeft={true} variant="light">
            EDUCATION
          </HeadingCV>
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

          <HeadingCV borderLeft={true} variant="light">
            CONTACT
          </HeadingCV>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="10rem"
            textAlign="center"
            paddingRight="0.5rem"
          >
            <ChatIcon boxSize="1rem" marginBottom="0.5rem" />
            <Link
              href="https://www.linkedin.com/in/javier-sepulveda-verdugo/"
              target="_blank"
            >
              My LinkedIn <ExternalLinkIcon mx="2px" />
            </Link>
            <Divider margin="0.5rem 0rem" width="8rem" />
            <PhoneIcon boxSize="1rem" marginBottom="0.5rem" />
            <Text>+34 629 644 848</Text>
            <Divider margin="0.5rem 0rem" width="8rem" />
            <EmailIcon boxSize="1rem" marginBottom="0.5rem" />
            <Text wordBreak="break-word">
              javier.sepulveda.verdugo@gmail.com
            </Text>
          </Flex>
        </Flex>
      </GridItem>
    </>
  );
}
