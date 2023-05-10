import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import {
  BottomSunImage,
  ContentCardFlex1,
  ContentContainer,
  FullPage,
  ImageCardFlex1,
  ImageCardFlex2,
  MobileImageFlex,
  MobileImageFlex1,
  PageContainer,
  PageLastText,
  Review,
  ReviewTextBox,
  ReviewerImage,
  TextBox,
  ThreeIconsContainer,
  TopArrow,
  TopHeading,
  Wrap,
} from "./elements";
import { useNavigate } from "react-router-dom";
import { Astronaut } from "../../assets";

export const HowToUse = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageContainer>
        <TopArrow onClick={() => navigate("/")}>
          <ArrowBackIosIcon />
        </TopArrow>

        {/* <TopHeading>
          Ready to eliminate jet lag and boost your energy level on future
          trips?
        </TopHeading> */}
        <TopHeading>Help!</TopHeading>
      </PageContainer>
      <div style={{ height: "85vh", overflow: "auto" }}>
        <ContentContainer>
          <Review>
            <ReviewTextBox sx={{fontWeight: "bold"}}>
              Ready to eliminate jet lag and boost your energy level on future
              trips?
            </ReviewTextBox>
            <ReviewerImage>
              <img
                src={Astronaut}
                alt="Image"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  width: 120,
                  height: 120,
                }}
              />
            </ReviewerImage>
            <ReviewTextBox>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              exercitationem laudantium ab iusto voluptates neque, ducimus at
              aperiam doloribus nihil quod esse a expedita ipsum praesentium
              maxime facere obcaecati aspernatur!
              <br />
              <i style={{ fontSize: "12px" }}>
                Michael | Lopez-Alegria Former NASA astronaut
              </i>
            </ReviewTextBox>
          </Review>

          <TextBox>
            It's as simple as taking small actions at specific times:
          </TextBox>
          <ThreeIconsContainer>
            <WbSunnyIcon />
            <WbSunnyIcon />
            <WbSunnyIcon />
          </ThreeIconsContainer>
          <TextBox>See bright light, see some light, or avoid light.</TextBox>
          <ThreeIconsContainer>
            <WbSunnyIcon />
            <WbSunnyIcon />
            <WbSunnyIcon />
          </ThreeIconsContainer>
          <TextBox>Go to sleep, take a nap, or nap if you can.</TextBox>
          <ThreeIconsContainer>
            <WbSunnyIcon />
            <WbSunnyIcon />
            <WbSunnyIcon />
          </ThreeIconsContainer>
          <TextBox>
            You can also turn on melatonin and/or caffeine advice to boost your
            energy level, sleep better, and shift even faster.
          </TextBox>
        </ContentContainer>
        <div style={{ backgroundColor: "whitesmoke", padding: "0 30px" }}>
          <MobileImageFlex>
            <ImageCardFlex1>
              <img src={""} alt="Image" />
            </ImageCardFlex1>
            <ContentCardFlex1>
              "Don't worry We will tell you exactly what to do and when to do
              it."
            </ContentCardFlex1>
          </MobileImageFlex>
          <ThreeIconsContainer>
            <WbSunnyIcon />
            <WbSunnyIcon />
            <WbSunnyIcon />
          </ThreeIconsContainer>
          <TextBox
            style={{
              textAlign: "center",
              padding: "30px",
              marginBottom: "20px",
            }}
          >
            You don't have to do everything perfectly, but the more you do, the
            less jet lag you will experiance.
          </TextBox>
          <MobileImageFlex>
            <ContentCardFlex1>
              "If you have a question, you can always get help by tapping on an
              activity"
            </ContentCardFlex1>
            <ImageCardFlex2>
              {" "}
              <img src={""} alt="Image" style={{}} />
            </ImageCardFlex2>
          </MobileImageFlex>
          <PageLastText>
            <p>OK! You are ready for your first timeshift.</p>
          </PageLastText>
          <BottomSunImage>
            <img src={""} alt="Image" style={{}} />
          </BottomSunImage>
        </div>
      </div>
    </>
  );
};
