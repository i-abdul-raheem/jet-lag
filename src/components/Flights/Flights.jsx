import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import {
  Footer,
  FooterButton,
  HeadingContainer,
  Wrapper,
} from "../Landing/elements";
import { getFormatedDate } from "../../utils";
import { ArrowBackIos } from "@mui/icons-material";
import {
  DateBox,
  Dated,
  Main,
  SearchBox,
  SearchContainer,
  SearchContent,
  SearchInput,
  SearchLayout,
  SearchRow,
  SearchTitle,
} from "./elements";
import { useNavigate } from "react-router-dom";

export const Flights = ({ date }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <HeadingContainer>Search Flight</HeadingContainer>
      <Main>
        <SearchInput
          type="search"
          name="flightNo"
          id="flightNo"
          placeholder="AB 1234"
        />
        <DateBox>
          <Dated>{getFormatedDate(date || "2023-01-01")}</Dated>
        </DateBox>
        <SearchContainer>
          <SearchBox>
            <SearchTitle>AKM 4782</SearchTitle>
            <SearchLayout>
              <SearchContent>
                <SearchRow>
                  <span style={{ width: "40%" }}>Dubai</span>
                  <span>May 9</span>
                  <span>3:20pm</span>
                </SearchRow>
                <SearchRow>
                  <span style={{ width: "40%" }}>Frankfurt</span>
                  <span>May 9</span>
                  <span>8:05pm</span>
                </SearchRow>
              </SearchContent>
              <ArrowForwardIosIcon />
            </SearchLayout>
          </SearchBox>
        </SearchContainer>
      </Main>
      <Footer>
        <FooterButton onClick={() => navigate("/")}>
          <ArrowBackIos />
          <span>Back</span>
        </FooterButton>
        <FooterButton>
          <span>Next</span>
          <ArrowForwardIosIcon />
        </FooterButton>
      </Footer>
    </Wrapper>
  );
};
