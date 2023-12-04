import { useState } from "react";
import "./App.css";

function App() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  console.log(eventName);

  const handleSubmit = () => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="event-name">Nazwa wydarzenia</label>
        <input
          type="text"
          id="event-name"
          name="event-name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Wpisz nazwę wydarzenia"
        ></input>
        <label htmlFor="event-date">Data wydarzenia</label>
        <input
          type="date"
          id="event-date"
          name="event-date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          min="1960-01-01"
          max="2050-01-01"
        ></input>
        <button type="submit">Stwórz</button>
      </form>
    </>
  );
}

export default App;
