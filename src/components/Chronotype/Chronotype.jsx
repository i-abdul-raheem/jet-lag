import { useEffect, useRef, useState } from "react";
import { ButtonSection, ChronoButton, PageContainer, StyledText, TopArrow, TopHeading } from "./elements"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";



export const Chronotype=({action})=>{
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
                 What is your chronotype?
                </StyledText>
            </TopHeading>

        </PageContainer>
        <ButtonSection pheight={pageHeight}>
            <ChronoButton  onClick={() => handleClick("Early Bird")} pheight={pageHeight}>Early Bird</ChronoButton>
            <ChronoButton  onClick={() => handleClick("Night Owl")} pheight={pageHeight}>Night Owl</ChronoButton>
            <ChronoButton  onClick={() => handleClick("Neither")} pheight={pageHeight}>Neither</ChronoButton>
        </ButtonSection>
        </>
    )
}