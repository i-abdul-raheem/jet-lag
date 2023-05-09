import { styled, Box, Typography } from "@mui/material";

export const TopArrow = styled(Box)({
  paddingTop: "30px",
  width: "100%",
  textAlign: "left",
});

export const PageContainer = styled(Box)({
  padding: "0 30px",
  backgroundColor: "whitesmoke",
});

export const TopHeading = styled(Box)({
  padding: "30px",
  textAlign: "center",
});

export const StyledText = styled(Typography)({
  fontSize: "30px",
});

export const ButtonSection = styled(Box)(({ pheight }) => {
  return {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    minHeight: `calc(100vh - ${pheight}px)`,
    background: "red",
  };
});

export const TimeButton = styled("button")(({ pheight }) => {
  return {
    width: "100%",
    padding: "10px",
    border: "none",
    borderBottom: "1px solid #ddd",
    backgroundColor: "white",
    color: "green",
    minHeight: `calc((100vh - ${pheight}px)/8)`,
    display: "block",
    fontSize:'5vh',
    "&:hover":{
      backgroundColor:"whitesmoke"
    }
  };
});
