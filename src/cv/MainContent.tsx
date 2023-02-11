import { Box, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { HeadingCV } from "./HeadingCV";
import { JobTitle } from "./JobTitle";

export function MainContent() {
  return (
    <>
      <GridItem
        colSpan={2}
        bg="white"
        paddingRight="2rem"
        fontSize="0.75rem"
        textAlign="justify"
      >
        <HeadingCV variant="dark">ABOUT ME</HeadingCV>I am a full-stack
        developer based in Madrid. I have a background in civil engineering but
        have worked mostly in software development. I have experience in
        different technologies for the frontend (React, Angular), backend
        (Express.js, Micronaut) and infrastructure (AWS). I consider myself
        curious, open-minded and I love to learn new things. In my free time I
        enjoy painting with watercolor, going to dance classes and enjoying
        nature.
        <Box>
          <HeadingCV variant="dark">EXPERIENCE</HeadingCV>
          <Box>
            <JobTitle
              title="SOFTWARE DEVELOPER, ARUP"
              end="Present"
              start="2021"
            ></JobTitle>
            <Text>
              NodeJS: development of backend applications using Express and Knex
              for the persistence layer. Deployment in AWS with Cloudformation,
              CICD pipelines with Github actions.
            </Text>
            <Text>
              Java: development of backend application (microservices) using
              Springboot with JPA (hibernate).
            </Text>
            <Text>
              Typescript and React: development of web applications for desktop
              and mobile. Developing WPA apps with Ionic.
            </Text>
            <Text>
              Creating 3D applications in Unity for web and mobile platforms.
            </Text>
          </Box>
          <Box>
            <JobTitle
              title="SOFTWARE CONSULTANT, AUTENTIA"
              end="2021"
              start="2019"
            ></JobTitle>
            <Text>
              Full stack development with Angular on the front and Kotlin (with
              some Java) on the back. For the persistence layer using Postgres
              and MongoDB. Developing using best practices: clean architecture
              and TDD.
            </Text>
          </Box>
          <Box>
            <JobTitle
              title="GEOTECHNICS ENGINEER, ARUP"
              end="2019"
              start="2018"
            ></JobTitle>
            <Text>
              Developing automation scripts (Python) for the seismic assesment
              of buildings and foundations in the Netherlands. These scripts
              leverage the APIs of different geotechnical applications to
              streamline the calculations. The results wre aggregated and
              processed to create visualizations.
            </Text>
            <Text>
              Data gathering and processing of traffic data from Madrid.
            </Text>
          </Box>
        </Box>
      </GridItem>
    </>
  );
}
