import { Box, GridItem, Text } from "@chakra-ui/react";
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
        paddingTop="1rem"
        fontSize="0.75rem"
        textAlign="justify"
      >
        <HeadingCV borderRight={true} variant="dark">
          ABOUT ME
        </HeadingCV>
        <Text>
          I am a full-stack developer based in Madrid. I have a background in
          civil engineering but have worked mostly in software development. I
          have experience in different technologies for the frontend (React,
          Angular), backend (Express.js, Micronaut) and infrastructure (AWS). I
          consider myself curious, open-minded and I love to learn new things.
        </Text>

        <Box>
          <HeadingCV borderRight={true} variant="dark">
            EXPERIENCE
          </HeadingCV>
          <Box>
            <JobTitle
              title="SOFTWARE DEVELOPER, ARUP"
              end="Present"
              start="2021"
            ></JobTitle>
            <Text>
              Development of backend applications using Node.js and Express for
              multiple internal departments to improve their workflows. These
              backends feed other frontend application developed with typescript
              and react that served as control dashboard to visualize existing
              data and as a way of input new data. Deployment in AWS with
              Cloudformation, CICD pipelines with Github actions.
            </Text>
            <Text>
              Development of microservices using Springboot with JPA (hibernate)
              to create a digital twin platform for an office building. These
              microservices deal with realtime data from devices (temperature,
              sound, energy consumption) and make some processing or handle
              notifications.
            </Text>
            <Text>
              Creating 3D applications in Unity for web and mobile platforms to
              visualize the construction process of bridges of different
              typologies. There are special views and features for the complex
              parts of the bridge.
            </Text>
          </Box>
          <Box>
            <JobTitle
              title="SOFTWARE CONSULTANT, AUTENTIA"
              end="2021"
              start="2019"
            ></JobTitle>
            <Text>
              Developing an application for solar panels instalations, for
              individual customers and for business. The application was a web
              app available to iOS and Android. Full stack development with
              Angular on the front and Kotlin on the back. For the persistence
              layer using Postgres and MongoDB. Developing using best practices:
              clean architecture and TDD.
            </Text>
            <Text>
              Improvement of an existing application for the Human Resources
              department of a company. The existing code base used obsolete
              technologies and we have to leverage that with new developments to
              deliver a web app with a modern look and feel.
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
              Data gathering and processing of traffic data from Madrid to help
              the Transport team with the Due Diligence process. The data was
              collected from open sources over the course of a month and
              transformed so the engineers could take some insight from it.
            </Text>
          </Box>
        </Box>
      </GridItem>
    </>
  );
}
