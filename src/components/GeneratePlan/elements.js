import { Box, styled } from "@mui/material";

export const TableField = styled("td")({
  border: "1px solid #ddd",
  padding: 10,
});
export const TableHeading = styled("th")({
  border: "1px solid #ddd",
  background: "#ddd",
  padding: "4px 10px",
});
export const TableRow = styled("tr")({
  "& td:first-child": {
    width: "40px",
    border: "none",
  },
  "& td:last-child": {
    width: "40px",
    border: "none",
  },
});

export const CalendarContainer = styled(Box)({});

export const PageContainer = styled(Box)({
  padding: "0 16px",
  backgroundImage:
    "linear-gradient(to left, #2A1AD8, #4E26E2, #7231EC, #953DF5, #B948FF)",
  position: "relative",
  height: "85px",
  display: "flex",
  width: "100%",
  justifyContent: "center",
  overflow: "hidden",
  alignItems: "center",
});

export const EachTableBox = styled(Box)({
  position: "relative",
});

export const EachTable = styled("table")({
  borderCollapse: "collapse",
  width: "100%",
  fontSize: 10,
  marginBottom: "20px",
  // position: "relative",
});

export const TableHead = styled("thead")({
  zIndex: 100
});
export const TableBody = styled("thead")({});

export const OverlayBox = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  flexDirection: "",
});

export const OverlayContainer = styled(Box)({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  padding: "3px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  columnGap: "70px",
});

export const OverlayColumns = styled(Box)(
  ({ topL = null, leftL = null, heightL = null }) => {
    return {
      position: "absolute",
      top: `${topL * 75}px`,
      left: `${(leftL + 1) * (10 + 45.53)}px`,
      borderRadius: "20px",
      width: "30px",
      overflow: "hidden",
      height: `${heightL * 30}px`,
      backgroundColor: "brown",
      display: "flex",
      justifyContent: "center",
      padding: "5px",
    };
  }
);
