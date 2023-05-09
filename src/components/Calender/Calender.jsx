import { useNavigate } from "react-router-dom";
import {
  CancelButton,
  Container,
  DatePicker,
  Form,
  Heading,
  SelectButton,
} from "./elements";

export const Calender = ({ show, hide, setDate, date }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setDate(e.target[0].value);
    if (!date) {
      return;
    }
    navigate("/flights");
  };
  return (
    <Container style={{ display: show ? "flex" : "none" }}>
      <Form onSubmit={handleSubmit}>
        <Heading>SELECT DATE</Heading>
        <DatePicker type={"date"} />
        <SelectButton type="submit">Select</SelectButton>
        <CancelButton
          onClick={() => {
            hide();
            return;
          }}
        >
          Cancel
        </CancelButton>
      </Form>
    </Container>
  );
};
