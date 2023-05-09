import { Box, styled, Typography } from "@mui/material";

export const Container = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 99,
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.4)",
});

export const Form = styled("form")({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
  width: "220px",
  position: "relative",
  borderRadius: "10px",
  background: "#fff",
});

export const Heading = styled(Typography)({
  display: "block",
  textAlign: "center",
  width: "100%",
  padding: "14px 14px",
  background: "#fff",
  borderRadius: "10px 10px 0 0",
});

export const DatePicker = styled("input")({
  padding: "14px 18px",
  width: "100%",
  border: "1px solid #ddd",
});

export const SelectButton = styled("button")({
  padding: "14px 18px",
  width: "100%",
  border: "1px solid #ddd",
});

export const CancelButton = styled("button")({
  padding: "14px 18px",
  width: "100%",
  border: "1px solid #ddd",
  borderRadius: "0 0 10px 10px",
  color: "#fff",
  backgroundColor: "rgba(255, 0, 0, 0.4)",
  fontWeight: "bold",
  '&:hover': {
    backgroundColor: "rgba(255, 0, 0, 0.6)",
  }
});
