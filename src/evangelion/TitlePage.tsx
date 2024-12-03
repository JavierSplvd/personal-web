import { Box } from "@chakra-ui/react";

export const TitlePage: React.FC = () => {
  // read query params: title1, title2, title3
  const urlParams = new URLSearchParams(window.location.search);
  const title1 = urlParams.get("title1") || "TAIPEI";
  const title2 = urlParams.get("title2");
  const title3 = urlParams.get("title3");
  const isLongTitle = title1.length > 9;
  return (
    <Box
      sx={{
        backgroundColor: "black",
        padding: "2rem",
        paddingTop: "8rem",
        width: "100vw",
        height: "100vh",
        fontFamily: "Noto Serif, serif",
        overflowY: "hidden",
      }}
    >
      <Box sx={{ position: "relative", height: "100%" }}>
        <Box
          sx={{
            color: "white",
            height: "6rem",
            fontSize: isLongTitle ? "3.3rem" : "4rem",
            letterSpacing: "0.1rem",
          }}
        >
          <Box sx={{ transform: isLongTitle ? "scaleY(1.5)" : "scaleY(2)" }}>{title1}</Box>
        </Box>
        <Box
          sx={{
            color: "white",
            fontSize: "3rem",
            fontWeight: 300,
            marginTop: "-0.5rem",
          }}
        >
          {title2 || "臺北"}
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "20rem",
            right: 0,
            color: "white",
            fontSize: "3rem",
            fontFamily: "Noto Sans, sans-serif",
            textAlign: "end",
            marginTop: "1rem",
            writingMode: "tb-rl",
            transform: "rotate(-180deg)",
          }}
        >
          {title3 || "Day 1"}
        </Box>
      </Box>
    </Box>
  );
};
