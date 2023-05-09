import { Box, styled } from "@mui/material";
import { useIsMobileView } from "../../utils";

export const Wrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  width: "100%",
  minHeight: "100vh",
});

export const HeadingContainer = styled(Box)({
  position: "relative",
  width: "100%",
  textAlign: "center",
  padding: "12px 16px",
  fontWeight: "bold",
  borderBottom: "1px solid #ddd",
  height: "61px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const MainContent = styled(Box)(({ height }) => {
  const isMobileView = useIsMobileView();
  return {
    position: "relative",
    minHeight: `calc(100vh - 61px - 61px)`,
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
  border: "1px solid #ddd",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  rowGap: "20px",
  fontSize: "20px",
});

export const Footer = styled(Box)({
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const FooterButton = styled("button")({
  border: "1px solid #ddd",
  padding: "16px 18px",
  width: "100%",
  maxHeight: "61px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 20,
  columnGap: 20,
});
