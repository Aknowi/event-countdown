import { useState, useRef } from "react";
import "./App.css";
// import Event from "./Components/Event";

/* dodanie errorów: 
   - brak wpisanej daty i nazwy wydarzenia
   - dodanie informacji, ze juz jest ten dzien
*/
function App() {
  const [eventInput, setEventInput] = useState({
    eventName: "",
    date: "",
  });
  const [eventCountDown, setEventCountDown] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const intervalIdRef = useRef(null);

  const getCountDown = () => {
    let currentDate = new Date();
    let eventEnd = new Date(eventInput.date);
    let timeSpan = eventEnd - currentDate;
    let days = Math.floor(timeSpan / day);
    let hours = Math.floor((timeSpan % day) / hour);
    let minutes = Math.floor((timeSpan % hour) / minute);
    let seconds = Math.floor((timeSpan % minute) / second);

    console.log(timeSpan);

    if (timeSpan <= 0) {
      clearInterval(intervalIdRef.current); //Sprawdzic jeszcze logikę
      setEventCountDown("Wydarzenie sie już odbyło");
    } else {
      setEventCountDown(`${days} : ${hours} : ${minutes} : ${seconds}`);
    }
  };

  const handleInputOnChange = (e) => {
    const { name, value } = e.target;
    setEventInput({
      ...eventInput,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearInterval(intervalIdRef.current);
    setEventName(eventInput.eventName);
    setEventDate(eventInput.date);
    intervalIdRef.current = setInterval(getCountDown, 1000);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="event-name">Nazwa wydarzenia</label>
        <input
          type="text"
          id="event-name"
          name="eventName"
          value={eventInput.eventName}
          onChange={handleInputOnChange}
          placeholder="Wpisz nazwę wydarzenia"
        ></input>
        <label htmlFor="event-date">Data wydarzenia</label>
        <input
          type="date"
          id="date"
          name="date"
          value={eventInput.date}
          onChange={handleInputOnChange}
          min="1900-01-01" //min data dzisiejsza? Błąd nie moze być wcześniejsza
          max="2050-01-01"
        ></input>
        <button type="submit">Stwórz</button>
      </form>
      {/* <Event eventDate={eventDate} eventName={eventName} /> */}
      <div>
        <h3>{eventName}</h3>
        <p>{`Do daty ${eventDate} pozostało ${eventCountDown}`}</p>
      </div>
    </>
  );
}

export default App;
