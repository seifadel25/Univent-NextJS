// components/MapComponent.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

// Fix default marker icons (optional)
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

const branches = [
  {
    id: 1,
    name: "Factory Branch",
    description: "The factory branch",
    lat: 30.0901542091268, // Example latitude
    lng: 31.021737613926838, // Example longitude
  },
  {
    id: 2,
    name: "Head Office Branch",
    description: "The head office branch",
    lat: 30.06881803408081, // Another latitude
    lng: 31.195725506081914, // Another longitude
  },
];

//30.0901542091268, 31.021737613926838

//30.06881803408081, 31.195725506081914
const MapComponent = () => {
  const branchLocation = [30.06881803408081, 31.195725506081914]; // Example coordinates for Giza
  return (
    <MapContainer
      center={branchLocation}
      zoom={15}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {branches.map((branch) => (
        <Marker key={branch.id} position={[branch.lat, branch.lng]}>
          <Popup>
            <b>{branch.name}</b>
            <br />
            {branch.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
