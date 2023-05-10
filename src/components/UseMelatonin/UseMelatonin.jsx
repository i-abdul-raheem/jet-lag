import { useEffect, useRef, useState } from "react";
import {
  ButtonSection,
  ChronoButton,
  MelatoninButton,
  PageContainer,
  StyledText,
  TopArrow,
  TopHeading,
} from "./elements";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

export const UseMelatonin = ({ action }) => {
  const pageHeading = useRef(null);
  const [pageHeight, setpageHeight] = useState(0);
  useEffect(() => {
    setpageHeight(pageHeading.current.clientHeight);
  }, [pageHeading]);
  const navigate = useNavigate();
  const handleClick = (answer) => {
    action(answer);
    navigate("/your-age");
  };
  return (
    <>
      <PageContainer ref={pageHeading}>
        <TopArrow>
          <ArrowBackIosIcon onClick={() => navigate("/use-of-caffeine")} />
        </TopArrow>
        <TopHeading>
          <StyledText>
            Would you like to use melatonin to timeshift faster and sleep
            better?
          </StyledText>
        </TopHeading>
      </PageContainer>
      <ButtonSection pheight={pageHeight}>
        <MelatoninButton
          onClick={() => handleClick("Yes, please")}
          pheight={pageHeight}
        >
          Yes, please
        </MelatoninButton>
        <MelatoninButton
          onClick={() => handleClick("No, thanks")}
          pheight={pageHeight}
          style={{ color: "red" }}
        >
          No, thanks
        </MelatoninButton>
      </ButtonSection>
    </>
  );
};
