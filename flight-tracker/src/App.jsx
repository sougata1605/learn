
import React, { useEffect, useState } from "react";
import MapView from "./MapView";
import "./index.css";

function App() {
  const [flights, setFlights] = useState([]);

  
  const flightsData = [
    { lat: 28.7041, lng: 77.1025, name: "Delhi Flight" },
    { lat: 19.076, lng: 72.8777, name: "Mumbai Flight" },
  ];

  // fetch flights (example API)
  useEffect(() => {
    fetch("https://opensky-network.org/api/states/all")
      .then((res) => res.json())
      .then((data) => {
        if (data.states) {
          const flightData = data.states
            .filter(f => f[5] !== null && f[6] !== null) // remove null lat/lng
            .map(f => ({
              callsign: f[1] || "N/A",
              origin_country: f[2] || "Unknown",
              lat: f[5], // correct: f[5] = latitude
              lng: f[6], // correct: f[6] = longitude
            }));
          setFlights(flightData);
        }
      })
      .catch((err) => {
        console.error("Error fetching flights:", err);
        setFlights(flightsData); 
      });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>✈️ Real Time Flight Tracking System</h1>
      <MapView flights={flights} />
    </div>
  );
}

export default App;
