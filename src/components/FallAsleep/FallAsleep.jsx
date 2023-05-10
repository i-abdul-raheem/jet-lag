
import {
  ButtonSection,
  PageContainer,
  StyledText,
  TimeButton,
  TopArrow,
  TopHeading,
} from "./elements";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
export const FallAsleep = ({ action }) => {
 
  const navigate = useNavigate();
  const handleClick = (time) => {
    action(time);
    navigate("/wakeup-time");
  };
  return (
    <>
      <PageContainer>
        <TopArrow>
          <ArrowBackIosIcon onClick={()=> navigate("/flights")}/>
        </TopArrow>
        <TopHeading>
          <StyledText>When do you normally fall asleep?</StyledText>
        </TopHeading>
      </PageContainer>

      <ButtonSection>
        <TimeButton
          onClick={() => handleClick("before 9pm")}
          
          style={{ color: "red" }}
        >
          Before 9pm
        </TimeButton>
        <TimeButton onClick={() => handleClick("9pm")} >
          9pm
        </TimeButton>
        <TimeButton onClick={() => handleClick("10pm")} >
          10pm
        </TimeButton>
        <TimeButton onClick={() => handleClick("11pm")} >
          11pm
        </TimeButton>
        <TimeButton onClick={() => handleClick("12pm")} >
          12pm
        </TimeButton>
        <TimeButton onClick={() => handleClick("1am")} >
          1am
        </TimeButton>
        <TimeButton onClick={() => handleClick("2am")} >
          2am
        </TimeButton>
        <TimeButton
          onClick={() => handleClick("after 2am")}
          
          style={{ color: "red" }}
        >
          After 2am
        </TimeButton>
      </ButtonSection>
    </>
  );
};
