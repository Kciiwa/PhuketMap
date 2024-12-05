import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIconNotAvailable = new L.Icon({
  iconUrl: "/img/notAvailableMarker.svg",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const customIconAvailable = new L.Icon({
  iconUrl: "/img/availableMarker.svg",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

function App() {
  const [villas, setVillas] = useState([]);

  useEffect(() => {
    fetch("https://map-server-orcin.vercel.app/api/villas")
      .then((response) => response.json())
      .then((data) => {
        setVillas(() => data);
      })
      .catch((error) => {
        console.error("Error fetching villas:", error);
      });
  }, []);
  console.log(villas);

  const markers = villas.map((el) => (
    <Marker
      key={el.id}
      position={el.coordinates
        .split(",")
        .map((coord) => parseFloat(coord.trim()))} // Используем координаты виллы
      icon={el.availability ? customIconAvailable : customIconNotAvailable} // Применяем кастомную иконку
    >
      <Popup>
        <h3>{el.name}</h3>
        <p>{el.description}</p>
      </Popup>
    </Marker>
  ));

  return (
    <div style={{ height: "100vh" }}>
      <MapContainer
        center={[7.8804, 98.3923]}
        zoom={12}
        style={{ height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {markers}
      </MapContainer>
    </div>
  );
}

export default App;
