import { Box, styled } from "@mui/material";
import { useIsMobileView } from "../../utils";

export const Wrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  width: "100%",
  minHeight: "100vh",
  backgroundImage:
    "linear-gradient(to left, #2A1AD8, #4E26E2, #7231EC, #953DF5, #B948FF)",
});

export const HeadingContainer = styled(Box)({
  position: "relative",
  color: "#fff",
  width: "100%",
  textAlign: "center",
  padding: "12px 16px",
  fontWeight: "bold",
  // borderBottom: "1px solid #953DF5",
  height: "101px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "32px",
  padding: 32
});

export const MainContent = styled(Box)(({ height }) => {
  const isMobileView = useIsMobileView();
  return {
    position: "relative",
    minHeight: `calc(100vh - 101px - 61px)`,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "50px",
    rowGap: "50px",
    flexDirection: isMobileView ? "column" : "row",
    padding: 32,
  };
});

export const BigCircleButton = styled("button")({
  width: "220px",
  height: "220px",
  borderRadius: "50%",
  border: "1px solid #4E26E2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  rowGap: "4px",
  fontSize: "20px",
  backgroundColor: "rgba(255,255,255, 0.6)",
  transition: "1s",
  "&:hover": {
    backgroundColor: "rgba(255,255,255, 0.8)",
    transition: "1s",
  },
  "@keyframes myEffect": {
    "0%": {
      transform: "rotateY(50deg)"
    },
    "25%": {
      transform: "rotateY(140deg)"
    },
    "75%": {
      transform: "rotateY(230deg)"
    },
    "100%": {
      transform: "rotateY(320deg)"
    },
  },
  "@keyframes myEffectImage": {
    "0%": {
      transform: "scale(1)"
    },
    "25%": {
      transform: "scale(1.05)"
    },
    "50%": {
      transform: "scale(1.1)"
    },
    "75%": {
      transform: "scale(1.05)"
    },
    "100%": {
      transform: "scale(1)"
    },
  },
  "& > svg": {
    fontSize: 100,
    animation: `myEffect 3000ms infinite`
  },
  "& > img": {
    fontSize: 100,
    animation: `myEffectImage 3000ms infinite`
  }
});

export const Footer = styled(Box)({
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const FooterButton = styled("button")({
  border: "none",
  padding: "16px 18px",
  width: "100%",
  color: "#fff",
  background: "none",
  maxHeight: "61px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 20,
  columnGap: 20,
});
