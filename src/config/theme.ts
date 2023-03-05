// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  components: {
    Badge: {
      baseStyle: {
        backgroundColor: "white",
        height: "1.5rem",
        padding: "0.4rem",
        fontSize: "0.7rem",
        lineHeight: "0.7rem",
        borderRadius: "0.25rem",
      },
    },
  },
});
