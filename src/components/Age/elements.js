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

  export const InputField = styled("input")({
    padding: "14px 18px",
    border: "1px solid #ddd",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    border:"1px solid #ddd",
    width:"100%"
  });