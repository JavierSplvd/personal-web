import { Heading } from "@chakra-ui/react";
import React from "react";
import { color2, color4 } from "../home/colors";

interface HeadingCVProps {
  variant: "dark" | "light";
}

export const HeadingCV: React.FC<HeadingCVProps> = (props) => {
  return (
    <>
      <Heading
        fontSize="1rem"
        letterSpacing="0.1rem"
        width="100%"
        maxWidth="15rem"
        backgroundColor={props.variant === "light" ? color4 : color2}
        color={props.variant === "light" ? "#172123" : "white"}
        height="2rem"
        paddingLeft="1rem"
        marginTop="1rem"
        marginBottom="1rem"
        lineHeight="2rem"
      >
        {props.children}
      </Heading>
    </>
  );
};
