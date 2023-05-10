import { useEffect, useRef, useState } from "react";
import {
  ButtonSection,
  Container,
  PageContainer,
  StyledText,
  TimeButton,
  TopArrow,
  TopHeading,
} from "./elements";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
export const WakeUpTime = ({ action }) => {
  const navigate = useNavigate();
  const handleClick = (time) => {
    action(time);
    navigate("/your-chronotype");
  };
  return (
    <>
      <PageContainer>
        <TopArrow>
          <ArrowBackIosIcon onClick={() => navigate("/fall-asleep-time")} />
        </TopArrow>
        <TopHeading>
          <StyledText>When do you normally wake up?</StyledText>
        </TopHeading>
      </PageContainer>

      <ButtonSection>
        <TimeButton
          onClick={() => handleClick("before 9am")}
          style={{ color: "red" }}
        >
          Before 9am
        </TimeButton>
        <TimeButton onClick={() => handleClick("9am")}>9am</TimeButton>
        <TimeButton onClick={() => handleClick("10am")}>10am</TimeButton>
        <TimeButton onClick={() => handleClick("11am")}>11am</TimeButton>
        <TimeButton
          onClick={() => handleClick("after 11am")}
          style={{ color: "red" }}
        >
          After 11am
        </TimeButton>
      </ButtonSection>
    </>
  );
};
