import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { color2 } from "../home/colors";

interface JobTitleProps {
  title: string;
  start: string;
  end: string;
}

export const JobTitle: React.FC<JobTitleProps> = (props) => {
  return (
    <Box width="100%" position="relative" marginTop="1rem" marginBottom="1rem">
      <Flex justifyContent="space-between" gap="10px" marginRight="0.5rem">
        <Text
          height="1rem"
          marginRight="1rem"
          letterSpacing="0.1rem"
          fontWeight="semibold"
        >
          {props.title}
        </Text>
        <Box
          marginTop="0.5rem"
          height="1px"
          flexGrow={1}
          borderTop={`1px ${color2} solid`}
        ></Box>
      </Flex>
      <Box
        position="absolute"
        top="-0.5rem"
        right="1rem"
        
        fontSize="0.6rem"
      >
        {props.end}
      </Box>
      <Box
        position="absolute"
        top="0.6rem"
        right="1rem"
        
        fontSize="0.6rem"
      >
        {props.start}
      </Box>
    </Box>
  );
};
