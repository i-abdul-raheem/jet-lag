import { useEffect, useRef, useState } from "react";
import {
  ButtonSection,
  CaffeineButton,
  ChronoButton,
  PageContainer,
  StyledText,
  TopArrow,
  TopHeading,
} from "./elements";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

export const UseCaffeine = ({ action }) => {
  const navigate = useNavigate();
  const handleClick = (answer) => {
    action(answer);
    navigate("/use-of-melatonin");
  };
  return (
    <>
      <PageContainer>
        <TopArrow>
          <ArrowBackIosIcon onClick={() => navigate("/your-chronotype")} />
        </TopArrow>
        <TopHeading>
          <StyledText>
            Use caffeine correctly to stay energized and to minimize negative
            effects on sleep?
          </StyledText>
        </TopHeading>
      </PageContainer>
      <ButtonSection>
        <CaffeineButton onClick={() => handleClick("Yes, please")}>
          Yes, please
        </CaffeineButton>
        <CaffeineButton
          onClick={() => handleClick("No, thanks")}
          style={{ color: "#B948FF" }}
        >
          No, thanks
        </CaffeineButton>
      </ButtonSection>
    </>
  );
};
