import { Box, Divider, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { HeadingCV } from "./HeadingCV";
import { JobTitle } from "./JobTitle";

export function AboutAndExperience() {
  window.addEventListener("beforeprint", (event) => {
    console.log(window.innerHeight, window.innerWidth);
  });
  return (
    <>
      <GridItem
        colSpan={2}
        bg="white"
        paddingRight="2rem"
        fontSize="0.75rem"
        textAlign="justify"
      >
        <HeadingCV borderRight={true} variant="light">
          ABOUT ME
        </HeadingCV>
        <Box marginLeft="2rem">
          <Text>
            I am a <b>full-stack developer</b> based in Madrid. I have a
            background in civil engineering and I have focused my career in
            software development. I have experience in both frontend, backend
            and I have managed the infrastructure for several projects. I
            consider myself curious, open-minded, creative and I love to learn
            new things.
          </Text>
        </Box>
        <HeadingCV borderRight={true} variant="light">
          EXPERIENCE
        </HeadingCV>
        <Box marginLeft="2rem">
          <JobTitle
            title="SOFTWARE DEVELOPER, ARUP"
            end="Present"
            start="2021"
          ></JobTitle>
          <Text>
            I managed the <b>development and release</b> of multiple
            applications within a short scope of time. This applications improve
            the workflows of other Arup teams, including teams from other
            offices. The stack of technologies is Node.js with Express, React
            with Redux, PostgreSQL database and the AWS cloud. The CI/CD was
            handled with Github Actions.
          </Text>
          <Divider margin="0.5rem 0rem" />
          <Text>
            Development of <b>microservices using Springboot</b> with JPA
            (hibernate) to create a digital twin platform for buildings. I
            worked closely with the London team remotely. These microservices
            deal with real time data from devices (temperature, sound, energy
            consumption) and make some processing or handle notifications.
          </Text>
          <Divider margin="0.5rem 0rem" />
          <Text>
            Delivering a <b>mobile application</b> for the Bridges to Prosperity
            NGO. I received the 3D models for the bridges and then adapted them
            to Unity. I also developed the features for the application, writing
            code on C# and coordinated with the Netherlands office to meet the
            deadline.
          </Text>
        </Box>
        <Box marginLeft="2rem">
          <JobTitle
            title="SOFTWARE CONSULTANT, AUTENTIA"
            end="2021"
            start="2019"
          ></JobTitle>
          <Text>
            Developing an application for solar panels installations, for
            individual customers and for business. The application was a web app
            available to iOS and Android. I had a full stack role with Angular
            on the front and Kotlin on the back. For the persistence layer I
            used Postgres and MongoDB. Developing using best practices:
            <b> clean architecture and TDD.</b>
          </Text>
          <Divider margin="0.5rem 0rem" />
          <Text>
            Improvement of an existing application for the Human Resources
            department of a company. The existing code base used obsolete
            technologies and we have to leverage that with new developments to
            deliver a web app with a modern look and feel.
          </Text>
        </Box>
        <Box marginLeft="2rem">
          <JobTitle title="ENGINEER, ARUP" end="2019" start="2018"></JobTitle>
          <Text>
            I was responsible of the gathering, processing and analysis of
            traffic data. The data was mainly from the city of Madrid but also
            from other national highways north of Spain. This data was cleaned
            and inserted on a database for further analysis. This analysis was
            done with the transport team of the office and helped them on their
            workflows.
          </Text>
          <Divider margin="0.5rem 0rem" />
          <Text>
            I created scripts to automate calculations for the geotechnics team
            related to seismic engineering and made use of the APIs of multiple
            FEM applications.
          </Text>
        </Box>
      </GridItem>
    </>
  );
}
