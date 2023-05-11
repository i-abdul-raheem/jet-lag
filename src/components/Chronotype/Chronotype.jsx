import { useEffect, useRef, useState } from "react";
import { ButtonSection, ChronoButton, PageContainer, StyledText, TopArrow, TopHeading } from "./elements"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";



export const Chronotype=({action})=>{
   
    const navigate=useNavigate();
    const handleClick=(answer)=>{
        action(answer);
        navigate("/use-of-caffeine")

    }
    return(
        <>
        <PageContainer >
            <TopArrow>
               <ArrowBackIosIcon onClick={()=> navigate("/wakeup-time")}/>
            </TopArrow>
            <TopHeading>
                <StyledText>
                 What is your chronotype?
                </StyledText>
            </TopHeading>

        </PageContainer>
        <ButtonSection>
            <ChronoButton  onClick={() => handleClick("Early Bird")}>Early Bird</ChronoButton>
            <ChronoButton  onClick={() => handleClick("Night Owl")} sx={{color: "#2A1AD8"}}>Night Owl</ChronoButton>
            <ChronoButton  onClick={() => handleClick("Neither")}>Neither</ChronoButton>
        </ButtonSection>
        </>
    )
}