

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
  const pageHeading = useRef(null);
  const [pageHeight, setPageHeight] = useState(0);
  useEffect(() => {
    setPageHeight(pageHeading.current.clientHeight);
  }, [pageHeading]);
  const navigate = useNavigate();
  const handleClick = (time) => {
    action(time);
    navigate("/your-chronotype");
  };
  return (
    <>
      <PageContainer ref={pageHeading}>
        <TopArrow>
          <ArrowBackIosIcon  onClick={()=> navigate("/fall-asleep-time")}/>
        </TopArrow>
        <TopHeading>
          <StyledText>When do you normally wake up?</StyledText>
        </TopHeading>
      </PageContainer>

      <ButtonSection pheight={pageHeight}>
        <TimeButton
          onClick={() => handleClick("before 9am")}
          pheight={pageHeight}
          style={{ color: "red" }}
        >
          Before 9am
        </TimeButton>
        <TimeButton onClick={() => handleClick("9am")} pheight={pageHeight}>
          9am
        </TimeButton>
        <TimeButton onClick={() => handleClick("10am")} pheight={pageHeight}>
          10am
        </TimeButton>
        <TimeButton onClick={() => handleClick("11am")} pheight={pageHeight}>
          11am
        </TimeButton>
        <TimeButton
          onClick={() => handleClick("after 11am")}
          pheight={pageHeight}
          style={{ color: "red" }}
        >
          After 11am
        </TimeButton>
      </ButtonSection>
    </>
  );
};
