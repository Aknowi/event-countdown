import { useState } from "react";
import "../App.css";
import "../index.css";

function Event({ date, name }) {
  const [eventCountDown, setEventCountDown] = useState("");

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const getCountDown = () => {
    let currentDate = new Date();
    let eventEnd = new Date(date);
    let timeSpan = eventEnd - currentDate;
    let days = Math.floor(timeSpan / day);
    let hours = Math.floor((timeSpan % day) / hour);
    let minutes = Math.floor((timeSpan % hour) / minute);
    let seconds = Math.floor((timeSpan % minute) / second);

    console.log(timeSpan);

    if (timeSpan <= 0) {
      clearInterval(intervalID);
      setEventCountDown("Wydarzenie sie już odbyło");
    } else {
      setEventCountDown(`${days} : ${hours} : ${minutes} : ${seconds}`);
    }
  };
  const intervalID = setInterval(getCountDown, 1000);

  return (
    <div className="events-box">
      <h3 className="events-box-title">{name}</h3>
      <p className="events-box-date">{date}</p>
      <p className="events-box-timer">{eventCountDown}</p>
    </div>
  );
}

export default Event;
