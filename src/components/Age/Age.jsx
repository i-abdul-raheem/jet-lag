import { useEffect, useRef, useState } from "react";
import {
  ButtonSection,
  ChronoButton,
  InputField,
  PageContainer,
  StyledText,
  TopArrow,
  TopHeading,
} from "./elements";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

export const Age = ({ action }) => {
  const pageHeading = useRef(null);
  const [pageHeight, setpageHeight] = useState(0);
  useEffect(() => {
    setpageHeight(pageHeading.current.clientHeight);
  }, [pageHeading]);
  const navigate = useNavigate();
  const handleClick = (answer) => {
    action(answer);
    navigate("/use-of-melatonin");
  };
  return (
    <>
      <PageContainer ref={pageHeading}>
        <TopArrow>
          <ArrowBackIosIcon onClick={() => navigate("/wakeup-time")} />
        </TopArrow>
        <TopHeading>
          <StyledText>What is your Age?</StyledText>
        </TopHeading>
      </PageContainer>

      <InputField type="number" name="" id="" placeholder="Your Age" />
      
        <button
          style={{border:"1px solid #ddd", width:"100%",height:"10vh", position: "relative", padding: "10px", fontSize: "15px" }}
        >
          Generate Plan
        </button>
    </>
  );
};
