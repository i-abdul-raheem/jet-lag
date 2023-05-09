import { Box, styled, Typography } from "@mui/material";

export const Main = styled(Box)({
  position: "relative",
  width: "100%",
  height: "calc(100vh - 61px - 59px)",
  background: "#ddd",
});

export const SearchInput = styled("input")({
  width: "100%",
  padding: "16px 20px",
  border: "1px solid #ddd",
  fontSize: 20,
});

export const DateBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "8px 14px",
});

export const Dated = styled(Typography)({
  background: "#fff",
  border: "1px solid #aaa",
  padding: "10px 20px",
  borderRadius: "20px",
});

export const SearchContainer = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: 12,
  flexDirection: "column",
  width: "100%",
  height: "calc(100vh - 61px - 61px - 57px - 59px)",
  overflow: "hidden",
  overflowY: "scroll",
  rowGap: 10,
});

export const SearchBox = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
  backgroundColor: "#fff",
  width: "100%",
  padding: "20px",
  rowGap: 10,
  fontSize: 18,
});

export const SearchTitle = styled(Typography)({
  color: "#888",
  fontWeight: "bold",
});

export const SearchLayout = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  columnGap: 32,
});

export const SearchContent = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  rowGap: 10,
});

export const SearchRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});
