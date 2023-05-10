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
  backgroundImage:
    "linear-gradient(to left, #2A1AD8, #4E26E2, #7231EC, #953DF5, #B948FF)",
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
  color: "#fff",
});

export const StyledText = styled(Typography)({
  fontSize: "30px",
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

export const TimeButton = styled("button")({
  width: "100%",
  padding: "10px",
  fontSize:"3vh",
  border: "none",
  borderBottom: "1px solid #ddd",
   
  backgroundColor:'#fff',
  color: "#B948FF",
  display: "block",
  height: `${50 / 8}vh`,
  "&:hover": {
  backgroundColor:'whitesmoke'
  },
});
