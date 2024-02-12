import "../App.css";
import "../index.css";

function Event({ date, name, timer }) {
  return (
    <div className="events-box">
      <h3 className="events-box-title">{name}</h3>
      <p className="events-box-date">{date}</p>
      <p className="events-box-timer">{timer}</p>
    </div>
  );
}

export default Event;
