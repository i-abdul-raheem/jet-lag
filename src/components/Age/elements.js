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
    fontSize: "30px",
  });

  export const InputField = styled("input")({
    padding: "14px 18px",
    border: "1px solid #ddd",
    display:"flex",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    border:"1px solid #ddd",
    width:"100%",
    height:"40vh",
    fontSize:"5vh"
  });