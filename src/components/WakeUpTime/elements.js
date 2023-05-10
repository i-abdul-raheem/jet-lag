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
  position:"relative",
  height: "50vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow:'hidden'
});

export const TopHeading = styled(Box)({
  padding: "30px",
  textAlign: "center",
});

export const StyledText = styled(Typography)({
  fontSize: "30px",
});

export const ButtonSection = styled(Box)( {
  
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    minHeight: '50vh',
    background: "red",
    overflow:'hidden'
  
});

export const TimeButton = styled("button")( {
  
    width: "100%",
    padding: "10px",
    border: "none",
    borderBottom: "1px solid #ddd",
    backgroundColor: "white",
    color: "green",
    display: "block",
    fontSize:'3vh',
    height:`${50/5}vh`,
    "&:hover":{
      backgroundColor:"whitesmoke"
    }
  
});
