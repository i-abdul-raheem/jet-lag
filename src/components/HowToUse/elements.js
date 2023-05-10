import { Button, styled, Box, Typography } from "@mui/material";
import { useIsMobileView } from "../../utils";
export const Wrap = styled(Box)({
  backgroundColor: "whitesmoke",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  minHeight: "100vh",
});

export const ContentContainer = styled(Box)({
  textAlign: "center",
  padding: "0 30px",
  backgroundColor: "whitesmoke",
});

export const PageContainer = styled(Box)({
  padding: "0 16px",
  backgroundImage:
    "linear-gradient(to left, #2A1AD8, #4E26E2, #7231EC, #953DF5, #B948FF)",
  position: "relative",
  height: "15vh",
  display: "flex",
  width: "100%",
  justifyContent: "flex-start",
  overflow: "hidden",
  alignItems: "center",
});

export const TopArrow = styled(Box)({
  textAlign: "left",
  color: "#fff",
});

export const TopHeading = styled(Box)({
  padding: "38px",
  textAlign: "center",
  color: "#fff",
  fontSize: "24px",
  fontWeight: "bold",
  width: "100%"
});

export const Review = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: isMobileView ? "column" : "row",
    columnGap: "30px",
    rowGap: "30px",
    borderBottom: "1px solid #ddd",
    borderTop: "1px solid #ddd",
    padding: "20px 0",
  };
});
export const ReviewerImage = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  width: 120,
  height: 120,
  marginBottom: "20px",
});

export const TextBox = styled(Box)({
  padding: "30px 0",
});

export const ReviewTextBox = styled(Typography)({});

export const ThreeIconsContainer = styled(Box)({
  display: "flex",
  columnGap: "10px",
  justifyContent: "center",
  marginBottom: "20px",
});

export const ContentContainer2nd = styled(Box)({});

export const MobileImageFlex = styled(Box)(() => {
  const isMobileView = useIsMobileView();
  return {
    display: "flex",
    justifyContent: "center",
    flexDirection: isMobileView ? "column" : "row",
  };
});

export const ImageCardFlex1 = styled(Box)({ width: "100%s" });

export const ImageCardFlex2 = styled(Box)({ width: "100%" });

export const ContentCardFlex1 = styled(Box)({
  display: "flex",
  width: "100%",
  textAlign: "center",
  padding: "50px 40px",
  alignItems: "center",
  justifyContent: "center",
});

export const PageLastText = styled(Box)({
  textAlign: "center",
  padding: "50px",
  fontSize: "20px",
});

export const BottomSunImage = styled(Box)({
  display: "flex",
  justifyContent: "center",
});
