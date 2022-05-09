import Calendar from "react-calendar";
// import Message from "./components/Message";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./App.css";

function App() {
  const [value, onChange] = useState(new Date());
  // const [title, setTitle] = useState("Welcome here!");

  return (
    <div className="App">
      <h1>Calendar</h1>
      {/* <Message msg={title} onChange={setTitle} /> */}
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default App;
