import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Flights, Landing } from "./components";
import { HowToUse } from "./components/HowToUse/HowToUse";

export default function App() {
  const [showCalender, setShowCalendar] = useState(false);
  const [date, setDate] = useState(null);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Landing
            showCalender={showCalender}
            setShowCalendar={setShowCalendar}
            setDate={setDate}
            date={date}
          />
        }
      />
      <Route path="/flights" element={<Flights date={date} />} />
      <Route path="/how-to-use" element={<HowToUse/>}/>
    </Routes>
  );
}
