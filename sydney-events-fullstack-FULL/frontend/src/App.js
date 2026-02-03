import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/events")
      .then(res => setEvents(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Sydney Events</h2>
      {events.map(event => (
        <div key={event._id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <a href={event.eventUrl} target="_blank">GET TICKETS</a>
        </div>
      ))}
    </div>
  );
}

export default App;
