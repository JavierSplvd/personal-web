import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: true,
  components: {
    Badge: {
      baseStyle: {
        backgroundColor: "gray.200",
        height: "1.5rem",
        padding: "0.4rem",
        fontSize: "0.7rem",
        lineHeight: "0.7rem",
        borderRadius: "0.25rem",
      },
    },
  },
});
