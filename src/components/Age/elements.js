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
    fontSize:"25vh",
    backgroundColor:"whitesmoke",
  });

  export const GeneratePlanButton=styled('button')({
    border: "1px solid #ddd",
    width: "100%",
    height: "10vh",
    position: "relative",
    padding: "10px",
    fontSize: "25px",
    color: "#B948FF"
  })