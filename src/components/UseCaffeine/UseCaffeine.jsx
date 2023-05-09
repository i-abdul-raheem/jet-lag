

import { useEffect, useRef, useState } from "react";
import { ButtonSection, ChronoButton, PageContainer, StyledText, TopArrow, TopHeading } from "./elements"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";



export const UseCaffeine=({action})=>{
    const pageHeading=useRef(null);
    const [pageHeight,setpageHeight]=useState(0);
    useEffect(()=>{
        setpageHeight (pageHeading.current.clientHeight)

    },[pageHeading]);
    const navigate=useNavigate();
    const handleClick=(answer)=>{
        action(answer);
        navigate("/use-of-caffeine")

    }
    return(
        <>
        <PageContainer ref={pageHeading}>
            <TopArrow onClick={()=> navigate("/wakeup-time")}>
               <ArrowBackIosIcon/>
            </TopArrow>
            <TopHeading>
                <StyledText>
                 Use caffeine correctly to stay energized and to minimiza negative effects on sleep?
                </StyledText>
            </TopHeading>

        </PageContainer>
        <ButtonSection pheight={pageHeight}>
            <ChronoButton  onClick={() => handleClick("Yes, please")} pheight={pageHeight}>Yes, please</ChronoButton>
            <ChronoButton  onClick={() => handleClick("No, thanks")} pheight={pageHeight} style={{color:"red"}}>No, thanks</ChronoButton>
        </ButtonSection>
        </>
    )
}