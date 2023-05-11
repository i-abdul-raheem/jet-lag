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
import { useNavigate } from "react-router-dom";
import { Plane } from "../../assets";

export const Landing = ({ setDate }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <HeadingContainer>JET LAG</HeadingContainer>
      <MainContent>
        <input
          style={{ width: 0, height: 0, border: "none" }}
          type="date"
          id="myDate"
          onChange={(e) => {
            setDate(e.target.value);
            navigate("/flights");
          }}
        />
        <BigCircleButton onClick={() => console.log("s")}>
          <label htmlFor="myDate">
            <img src={Plane} alt="asd" style={{ width: "100px" }} />
          </label>
          {/* <Plane/> */}
          Add Flight
        </BigCircleButton>
        <BigCircleButton onClick={() => navigate("/how-to-use")}>
          <QuestionMarkIcon />
          How to use?
        </BigCircleButton>
      </MainContent>
      {/* <Footer>
        <FooterButton>
          <FlightIcon />
        </FooterButton>
        <FooterButton>
          <FlightIcon />
        </FooterButton>
      </Footer> */}
    </Wrapper>
  );
};
