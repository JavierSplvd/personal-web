import {
  Card,
  CardBody,
  Center,
  Divider,
  Grid,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const danceSteps = [
  {
    title: "Charleston",
    link: "https://www.youtube.com/embed/vCIvvkw77X8",
  },
  {
    title: "Criss Cross",
    link: "https://www.youtube.com/embed/Gu0c2TbdZx0",
  },
  {
    title: "Running Man",
    link: "https://www.youtube.com/embed/RzxqfBTQtYc",
  },
  {
    title: "T Step",
    link: "https://www.youtube.com/embed/bniL9e3aIdE",
  },
  {
    title: "V Step",
    link: "https://www.youtube.com/embed/Y9DrI9KsCdE",
  },
  {
    title: "Happy Feet",
    link: "https://www.youtube.com/embed/jHyAy6USDHs",
  },
];

export const DanceListView: React.FC = () => {
  return (
    <VStack
      backgroundColor="gray.100"
      width="100vw"
      height="100vh"
      overflowX="hidden"
      overflowY="scroll"
    >
      <Heading size="lg" color="gray.500" marginTop="4rem">
        Dance Steps Tutorials
      </Heading>
      <Center margin="2rem 2rem">
        <Grid templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]} gap={6}>
          {danceSteps.map((step) => (
            <DanceCard title={step.title} link={step.link} />
          ))}
        </Grid>
      </Center>
    </VStack>
  );
};

const DanceCard: React.FC<{ title: string; link: string }> = (props) => {
  // youtube embedded video
  return (
    <Card maxW="sm">
      <CardBody>
        <Heading size="xs">{props.title}</Heading>
        <Divider margin="1rem 0rem" />
        <iframe
          width="100%"
          height="260px"
          src={props.link}
          title="Charleston Tutorial #shorts"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </CardBody>
    </Card>
  );
};
