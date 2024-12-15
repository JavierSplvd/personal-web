import { Box } from "@chakra-ui/react";

export const TitlePage: React.FC = () => {
  // read query params: title1, title2, title3
  const urlParams = new URLSearchParams(window.location.search);
  const title1 = urlParams.get("title1") || "TAIPEI";
  const title2 = urlParams.get("title2");
  const title3 = urlParams.get("title3");
  const isLongTitle = title1.length >= 9;
  const titleStyle: React.CSSProperties = {
    color: "white",
    lineHeight: "3rem",
    fontSize: isLongTitle ? "2rem" : "2.8rem",
    letterSpacing: "0.1rem",
    textTransform: "uppercase",
  };
  return (
    <Box
      sx={{
        backgroundColor: "black",
        padding: "6rem 2rem",
        width: "100vw",
        height: "100vh",
        fontFamily: "Noto Serif, serif",
        overflowY: "hidden",
      }}
    >
      <Box
        sx={{ position: "relative", height: "100%", border: "0px solid pink" }}
      >
        <Box sx={titleStyle}>
          <Box sx={{ transform: isLongTitle ? "scaleY(1.5)" : "scaleY(2)" }}>
            {title1}
          </Box>
        </Box>
        <Box
          sx={{
            ...titleStyle,
            position: "absolute",
            top: 0,
            right: 0,
            writingMode: "vertical-rl",
            textOrientation: "upright",
            fontFamily: "Noto Sans, sans-serif",
          }}
        >
          {title2 || "臺北"}
        </Box>
        <Box
          sx={{ ...titleStyle, position: "absolute", bottom: "0rem", right: 0 }}
        >
          {title3 || "Day 1"}
        </Box>
        <Box
          sx={{
            fontFamily: "Noto Sans, serif",
            fontSize: "12rem",
            transform: "rotate(-25deg)",
            color: "red",
            position: "absolute",
            top: "0rem",
            right: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
        >
          {title2 || "臺北"}
        </Box>
      </Box>
    </Box>
  );
};
