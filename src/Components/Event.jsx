// import { useState } from "react";

// function Event({ eventDate, eventName }) {
//   const [intervalId, setIntervalId] = useState("");

//   const getCountDown = () => {
//     let currentDate = new Date();
//     let eventEnd = new Date(eventDate);
//     console.log(eventEnd);
//     let timeSpan = eventEnd - currentDate;
//     console.log("timeStamp:" + timeSpan);
//     if (timeSpan <= 0) {
//       clearInterval(intervalId + 1); //Sprawdzic jeszcze logikę
//       console.log("w ifie" + intervalId);
//     }
//   };

//   clearInterval(intervalId);
//   // setIntervalId(setInterval(getCountDown, 1000));

//   return <h3>{eventName}</h3>;
// }

// export default Event;
