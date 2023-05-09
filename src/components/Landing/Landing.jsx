import FlightIcon from "@mui/icons-material/Flight";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Calender } from "../Calender/Calender";
import {
  BigCircleButton,
  Footer,
  FooterButton,
  HeadingContainer,
  MainContent,
  Wrapper,
} from "./elements";

export const Landing = ({ showCalender, setShowCalendar, setDate, date }) => {
  return (
    <Wrapper>
      <HeadingContainer>JET LAG APPLICATION</HeadingContainer>
      <MainContent>
        <BigCircleButton onClick={() => setShowCalendar(true)}>
          <FlightIcon />
          Add Flight
        </BigCircleButton>
        <BigCircleButton>
          <QuestionMarkIcon />
          How to use?
        </BigCircleButton>
        <Calender
          show={showCalender}
          hide={() => setShowCalendar(false)}
          setDate={setDate}
          date={date}
        />
      </MainContent>
      <Footer>
        <FooterButton>
          <FlightIcon />
        </FooterButton>
        <FooterButton>
          <FlightIcon />
        </FooterButton>
        <FooterButton>
          <FlightIcon />
        </FooterButton>
      </Footer>
    </Wrapper>
  );
};
