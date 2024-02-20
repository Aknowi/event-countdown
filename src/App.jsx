import { useState } from "react";
import "./App.css";
import "./index.css";
import Event from "./Components/Event";
import waveLine from "./ImagesAndFonts/Wave.svg";
import createButton from "./ImagesAndFonts/Create.svg";
import clock from "./ImagesAndFonts/Clock.png";

function App() {
  const [eventInput, setEventInput] = useState({
    eventName: "",
    date: "",
  });

  const [eventDetails, setEventDetails] = useState([]);
  const [error, setError] = useState("");
  console.log(error);
  const handleInputOnChange = (e) => {
    const { name, value } = e.target;
    setEventInput({
      ...eventInput,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventInput.eventName !== "" && eventInput.date !== "") {
      setError("");
      let obj = {
        eventName: eventInput.eventName,
        eventDate: eventInput.date,
      };
      setEventDetails([...eventDetails, obj]);
    } else {
      setError("Nie wszystkie dane zostały uzupełnione. Spróbuj jeszcze raz.");
    }
  };
  return (
    <>
      <div className="title-box">
        <img src={clock} alt="clock" className="clock" />
        <h1>Odliczaj czas</h1>
        <img src={waveLine} alt="wave-line" className="wave-line" />
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
          className={`event-form-input ${error !== "" ? "error-input" : ""}`}
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
          className={`event-form-input ${error !== "" ? "error-input" : ""}`}
        ></input>
        <button type="submit" className="event-form-button">
          <img src={createButton} alt="create-button" className="create-svg" />
        </button>
      </form>
      {error !== "" && <p className="error-note">{error}</p>}
      <div className="event-timers">
        {eventDetails.map((eventDetail, index) => (
          <Event
            key={index}
            date={eventDetail.eventDate}
            name={eventDetail.eventName}
          />
        ))}
      </div>
    </>
  );
}

export default App;
