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
export const FallAsleep = ({ action }) => {
  const pageHeading = useRef(null);
  const [pageHeight, setPageHeight] = useState(0);
  useEffect(() => {
    setPageHeight(pageHeading.current.clientHeight);
  }, [pageHeading]);
  const navigate = useNavigate();
  const handleClick = (time) => {
    action(time);
    navigate("/wakeup-time");
  };
  return (
    <>
      <PageContainer ref={pageHeading}>
        <TopArrow>
          <ArrowBackIosIcon onClick={()=> navigate("/flights")}/>
        </TopArrow>
        <TopHeading>
          <StyledText>When do you normally fall asleep?</StyledText>
        </TopHeading>
      </PageContainer>

      <ButtonSection pheight={pageHeight}>
        <TimeButton
          onClick={() => handleClick("before 9pm")}
          pheight={pageHeight}
          style={{ color: "red" }}
        >
          Before 9pm
        </TimeButton>
        <TimeButton onClick={() => handleClick("9pm")} pheight={pageHeight}>
          9pm
        </TimeButton>
        <TimeButton onClick={() => handleClick("10pm")} pheight={pageHeight}>
          10pm
        </TimeButton>
        <TimeButton onClick={() => handleClick("11pm")} pheight={pageHeight}>
          11pm
        </TimeButton>
        <TimeButton onClick={() => handleClick("12pm")} pheight={pageHeight}>
          12pm
        </TimeButton>
        <TimeButton onClick={() => handleClick("1am")} pheight={pageHeight}>
          1am
        </TimeButton>
        <TimeButton onClick={() => handleClick("2am")} pheight={pageHeight}>
          2am
        </TimeButton>
        <TimeButton
          onClick={() => handleClick("after 2am")}
          pheight={pageHeight}
          style={{ color: "red" }}
        >
          After 2am
        </TimeButton>
      </ButtonSection>
    </>
  );
};
