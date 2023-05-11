import { useEffect, useRef, useState } from "react";
import {
  ButtonSection,
  ChronoButton,
  GeneratePlanButton,
  InputField,
  PageContainer,
  StyledText,
  TopArrow,
  TopHeading,
} from "./elements";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

export const Age = ({ action, age }) => {
  const pageHeading = useRef(null);
  const [pageHeight, setpageHeight] = useState(0);
  useEffect(() => {
    setpageHeight(pageHeading.current.clientHeight);
  }, [pageHeading]);
  const navigate = useNavigate();
  const handleClick = (answer) => {
    if(answer > 0){
      action(answer);
    }
  };
  return (
    <>
      <PageContainer ref={pageHeading}>
        <TopArrow>
          <ArrowBackIosIcon onClick={() => navigate("/use-of-melatonin")} />
        </TopArrow>
        <TopHeading>
          <StyledText>What is your Age?</StyledText>
        </TopHeading>
      </PageContainer>

      <InputField type="number" value={age || 18} onChange={(e) => handleClick(e.target.value)} placeholder="0" />

      <GeneratePlanButton onClick={()=> navigate("/generate-plan")} >Generate Plan</GeneratePlanButton>
    </>
  );
};
