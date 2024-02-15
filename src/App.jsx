import { useState } from "react";
import "./App.css";
import "./index.css";
import Event from "./Components/Event";

/* dodanie errorów: 
   - brak wpisanej daty i nazwy wydarzenia
   - dodanie informacji, ze juz jest ten dzien
*/
function App() {
  const [eventInput, setEventInput] = useState({
    eventName: "",
    date: "",
  });
  const [eventDetails, setEventDetails] = useState([]);

  const handleInputOnChange = (e) => {
    const { name, value } = e.target;
    setEventInput({
      ...eventInput,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      eventName: eventInput.eventName,
      eventDate: eventInput.date,
    };
    console.log(obj);
    setEventDetails([...eventDetails, obj]);
  };
  console.log(eventDetails);
  return (
    <>
      <div className="title-box">
        <div className="clock"></div>
        <h1>Odliczaj czas</h1>
      </div>
      <form onSubmit={handleSubmit} className="event-form">
        <label htmlFor="event-name">Nazwa wydarzenia</label>
        <input
          type="text"
          id="event-name"
          name="eventName"
          value={eventInput.eventName}
          onChange={handleInputOnChange}
          placeholder="Wpisz nazwę wydarzenia"
          className="event-form-input"
        ></input>
        <label htmlFor="event-date">Data wydarzenia</label>
        <input
          type="date"
          id="date"
          name="date"
          value={eventInput.date}
          onChange={handleInputOnChange}
          min="2000-01-01"
          max="2050-01-01"
          className="event-form-input"
        ></input>
        <div className="break"></div>
        <button type="submit" className="event-form-button">
          Stwórz
        </button>
      </form>
      {eventDetails.map((eventDetail, index) => (
        <Event
          key={index}
          date={eventDetail.eventDate}
          name={eventDetail.eventName}
        />
      ))}
    </>
  );
}

export default App;
