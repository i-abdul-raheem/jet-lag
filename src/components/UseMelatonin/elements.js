import { styled, Box, Typography } from "@mui/material";

export const TopArrow = styled(Box)({
  padding: "30px",
  width: "100%",
  textAlign: "left",
  position: "absolute",
  top: 0,
  left: 0,
});

export const PageContainer = styled(Box)({
  padding: "0 30px",
  backgroundColor: "whitesmoke",
  position: "relative",
  height: "50vh",
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
  alignItems: "center",
});

export const TopHeading = styled(Box)({
  padding: "30px",
  textAlign: "center",
});

export const StyledText = styled(Typography)({
  fontSize: "24px",
});

export const ButtonSection = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  alignItems: "center",
  background: "green",
  height: "50vh",
  overflow: "hidden",
});

export const MelatoninButton = styled("button")({
  width: "100%",
  padding: "10px",
  border: "none",
  borderBottom: "1px solid #ddd",
  backgroundColor: "white",
  color: "green",
  display: "block",
  fontSize:"6vh",
  height: `${50 / 2}vh`,
  "&:hover": {
    backgroundColor: "whitesmoke",
  },
});
