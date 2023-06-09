import { styled, Box, Typography } from "@mui/material";

export const TopArrow = styled(Box)({
  padding: "30px",
  width: "100%",
  textAlign: "left",
  position: "absolute",
  top: 0,
  left: 0,
  color: "#fff",
});

export const PageContainer = styled(Box)({
  padding: "0 30px",
  backgroundImage: "linear-gradient(to left, #2A1AD8, #4E26E2, #7231EC, #953DF5, #B948FF)",
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
  fontSize: "30px",
  color: "#fff",
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

export const ChronoButton = styled("button")({
  width: "100%",
  padding: "10px",
  border: "none",
  borderBottom: "1px solid #ddd",
  backgroundColor: "white",
  color: "#B948FF",
  display: "block",
  fontSize:"3vh",
  height: `${50 / 3}vh`,
  "&:hover": {
    backgroundColor: "whitesmoke",
  },
});
