import { useNavigate } from "react-router-dom";
import { StyledText, TopArrow, TopHeading } from "../Chronotype/elements";
import {
  CalendarContainer,
  EachTable,
  EachTableBox,
  OverlayBox,
  OverlayColumns,
  OverlayContainer,
  PageContainer,
  TableBody,
  TableField,
  TableHead,
  TableHeading,
  TableRow,
} from "./elements";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
export const GeneratePlan = () => {
  const navigate = useNavigate();
  return (
    <div>
      <PageContainer>
        <TopArrow>
          <ArrowBackIosIcon onClick={() => navigate("/your-age")} />
        </TopArrow>
        <TopHeading>
          <StyledText style={{paddingLeft:"20px", fontSize:'25px'}}>Singapore</StyledText>
        </TopHeading>
      </PageContainer>
      <CalendarContainer>
        <EachTableBox>
          <EachTable>
          <OverlayBox>
              <OverlayContainer>
                <OverlayColumns topL={1} leftL={0} heightL={3}>
                  <EmojiFoodBeverageIcon style={{ color: "#fff" }} />
                </OverlayColumns>
              </OverlayContainer>
              <OverlayContainer>
                <OverlayColumns
                  style={{ backgroundColor: "yellow" }}
                  topL={4}
                  leftL={1}
                  heightL={6}
                >
                  <WbSunnyIcon style={{ color: "white" }} />
                </OverlayColumns>
              </OverlayContainer>
              <OverlayContainer>
                <OverlayColumns
                  style={{ backgroundColor: "black" }}
                  topL={1}
                  leftL={2}
                  heightL={4}
                >
                  <EmojiFoodBeverageIcon style={{ color: "#fff" }} />
                </OverlayColumns>
              </OverlayContainer>
              <OverlayContainer>
                <OverlayColumns
                  style={{ backgroundColor: "orange" }}
                  topL={1.5}
                  leftL={3}
                  heightL={2}
                >
                  <WbSunnyIcon style={{ color: "yellow" }} />
                </OverlayColumns>
              </OverlayContainer>
            </OverlayBox>
            <TableHead>
              <TableRow>
                <TableHeading>Sat, May 6</TableHeading>
                <TableHeading colSpan={2} style={{ textAlign: "right" }}>
                  Singapore 15:00
                </TableHeading>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableField>00:00</TableField>
                <TableField></TableField>
                <TableField>00:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>01:00</TableField>
                <TableField></TableField>
                <TableField>01:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>02:00</TableField>
                <TableField></TableField>
                <TableField>02:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>03:00</TableField>
                <TableField></TableField>
                <TableField>03:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>04:00</TableField>
                <TableField></TableField>
                <TableField>04:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>05:00</TableField>
                <TableField></TableField>
                <TableField>05:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>06:00</TableField>
                <TableField></TableField>
                <TableField>06:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>07:00</TableField>
                <TableField></TableField>
                <TableField>07:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>08:00</TableField>
                <TableField></TableField>
                <TableField>08:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>09:00</TableField>
                <TableField></TableField>
                <TableField>09:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>10:00</TableField>
                <TableField></TableField>
                <TableField>10:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>11:00</TableField>
                <TableField></TableField>
                <TableField>11:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>12:00</TableField>
                <TableField></TableField>
                <TableField>12:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>13:00</TableField>
                <TableField></TableField>
                <TableField>13:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>14:00</TableField>
                <TableField></TableField>
                <TableField>14:00</TableField>
              </TableRow>
            </TableBody>
          </EachTable>
        </EachTableBox>
        <EachTableBox>
          <EachTable>
          <OverlayBox>
              <OverlayContainer>
                <OverlayColumns topL={1} leftL={0} heightL={3}>
                  <EmojiFoodBeverageIcon style={{ color: "#fff" }} />
                </OverlayColumns>
              </OverlayContainer>
              <OverlayContainer>
                <OverlayColumns
                  style={{ backgroundColor: "yellow" }}
                  topL={4}
                  leftL={1}
                  heightL={6}
                >
                  <WbSunnyIcon style={{ color: "white" }} />
                </OverlayColumns>
              </OverlayContainer>
              <OverlayContainer>
                <OverlayColumns
                  style={{ backgroundColor: "black" }}
                  topL={1}
                  leftL={2}
                  heightL={4}
                >
                  <EmojiFoodBeverageIcon style={{ color: "#fff" }} />
                </OverlayColumns>
              </OverlayContainer>
              <OverlayContainer>
                <OverlayColumns
                  style={{ backgroundColor: "orange" }}
                  topL={1.5}
                  leftL={3}
                  heightL={2}
                >
                  <WbSunnyIcon style={{ color: "yellow" }} />
                </OverlayColumns>
              </OverlayContainer>
            </OverlayBox>
            <TableHead>
              <TableRow>
                <TableHeading>Sat, May 6</TableHeading>
                <TableHeading colSpan={2} style={{ textAlign: "right" }}>
                  Singapore 15:00
                </TableHeading>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableField>00:00</TableField>
                <TableField></TableField>
                <TableField>00:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>01:00</TableField>
                <TableField></TableField>
                <TableField>01:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>02:00</TableField>
                <TableField></TableField>
                <TableField>02:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>03:00</TableField>
                <TableField></TableField>
                <TableField>03:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>04:00</TableField>
                <TableField></TableField>
                <TableField>04:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>05:00</TableField>
                <TableField></TableField>
                <TableField>05:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>06:00</TableField>
                <TableField></TableField>
                <TableField>06:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>07:00</TableField>
                <TableField></TableField>
                <TableField>07:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>08:00</TableField>
                <TableField></TableField>
                <TableField>08:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>09:00</TableField>
                <TableField></TableField>
                <TableField>09:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>10:00</TableField>
                <TableField></TableField>
                <TableField>10:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>11:00</TableField>
                <TableField></TableField>
                <TableField>11:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>12:00</TableField>
                <TableField></TableField>
                <TableField>12:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>13:00</TableField>
                <TableField></TableField>
                <TableField>13:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>14:00</TableField>
                <TableField></TableField>
                <TableField>14:00</TableField>
              </TableRow>
            </TableBody>
          </EachTable>
        </EachTableBox>
        <EachTableBox>
          <EachTable>
            <OverlayBox>
              <OverlayContainer>
                <OverlayColumns topL={1} leftL={0} heightL={3}>
                  <EmojiFoodBeverageIcon style={{ color: "#fff" }} />
                </OverlayColumns>
              </OverlayContainer>
              <OverlayContainer>
                <OverlayColumns
                  style={{ backgroundColor: "yellow" }}
                  topL={4}
                  leftL={1}
                  heightL={6}
                >
                  <WbSunnyIcon style={{ color: "white" }} />
                </OverlayColumns>
              </OverlayContainer>
              <OverlayContainer>
                <OverlayColumns
                  style={{ backgroundColor: "black" }}
                  topL={1}
                  leftL={2}
                  heightL={4}
                >
                  <EmojiFoodBeverageIcon style={{ color: "#fff" }} />
                </OverlayColumns>
              </OverlayContainer>
              <OverlayContainer>
                <OverlayColumns
                  style={{ backgroundColor: "orange" }}
                  topL={1.5}
                  leftL={3}
                  heightL={2}
                >
                  <WbSunnyIcon style={{ color: "yellow" }} />
                </OverlayColumns>
              </OverlayContainer>
            </OverlayBox>
            <TableHead>
              <TableRow>
                <TableHeading>Sat, May 6</TableHeading>
                <TableHeading colSpan={2} style={{ textAlign: "right" }}>
                  Singapore 15:00
                </TableHeading>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableField>00:00</TableField>
                <TableField></TableField>
                <TableField>00:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>01:00</TableField>
                <TableField></TableField>
                <TableField>01:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>02:00</TableField>
                <TableField></TableField>
                <TableField>02:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>03:00</TableField>
                <TableField></TableField>
                <TableField>03:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>04:00</TableField>
                <TableField></TableField>
                <TableField>04:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>05:00</TableField>
                <TableField></TableField>
                <TableField>05:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>06:00</TableField>
                <TableField></TableField>
                <TableField>06:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>07:00</TableField>
                <TableField></TableField>
                <TableField>07:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>08:00</TableField>
                <TableField></TableField>
                <TableField>08:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>09:00</TableField>
                <TableField></TableField>
                <TableField>09:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>10:00</TableField>
                <TableField></TableField>
                <TableField>10:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>11:00</TableField>
                <TableField></TableField>
                <TableField>11:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>12:00</TableField>
                <TableField></TableField>
                <TableField>12:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>13:00</TableField>
                <TableField></TableField>
                <TableField>13:00</TableField>
              </TableRow>
              <TableRow>
                <TableField>14:00</TableField>
                <TableField></TableField>
                <TableField>14:00</TableField>
              </TableRow>
            </TableBody>
          </EachTable>
        </EachTableBox>
      </CalendarContainer>
    </div>
  );
};
