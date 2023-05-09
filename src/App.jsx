import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Chronotype, FallAsleep, Flights, Landing, UseCaffeine } from "./components";
import { HowToUse } from "./components/HowToUse/HowToUse";
import { WakeUpTime } from "./components/WakeUpTime/WakeUpTime";
import { UseMelatonin } from "./components/UseMelatonin";

export default function App() {
  const [showCalender, setShowCalendar] = useState(false);
  const [date, setDate] = useState(null);
  const [sleepTime, setSleepTime] = useState(null);
  const [wakeupTime, setwakeupTime]=useState(null);
  const[yourChronotype, setyourChronotype]=useState(null);
  const[useCaffeine, setuseCaffeine]=useState(null);
  const[useMelatonin, setuseMelatonin]=useState(null);
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
      <Route path="/how-to-use" element={<HowToUse />} />
      <Route
        path="/fall-asleep-time"
        element={<FallAsleep action={setSleepTime} />}
      />
      <Route path="/wakeup-time" element={<WakeUpTime action={setwakeupTime}/>}/>
      <Route path="/your-chronotype" element={<Chronotype action={setyourChronotype}/>}/>
      <Route path="/use-of-caffeine" element={<UseCaffeine action={setuseCaffeine}/>}/>
      <Route path="/use-of-melatonin" element={<UseMelatonin action={setuseMelatonin}/>}/>
      
    </Routes>
  );
}
