import { useMediaQuery } from "@mui/material";

export const useIsMobileView = () => !useMediaQuery(`(min-width: 620px)`);

export const getFormatedDate = (val) => {
  const date = val.split("-");
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  return `${months[parseInt(date[1] - 1)]} ${date[2]}`;
};
