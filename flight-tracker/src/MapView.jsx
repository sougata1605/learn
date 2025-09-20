import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";



function MapView({ flights }) {
  return (
    <MapContainer center={[20, 77]} zoom={5} style={{ height: "200vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {flights?.map((flight, index) => (
        <Marker key={index} position={[flight.lat, flight.lng]}>
          <Popup>

            {flight.callsign || flight.name} - {flight.origin_country}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;