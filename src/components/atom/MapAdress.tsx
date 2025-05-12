// import {useEffect, } from "react";
import { PropsWithChildren } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import MapController from "./MapController";

type propsAdress=PropsWithChildren<{
  position:LatLngExpression,
  className:string | undefined
}>



// Configuration de l'icône
const defaultIcon = leaflet.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});



function MapAdress({position}:propsAdress) {
  
  
return (
      <MapContainer 
       center={position} 
       zoom={13}
       id="map"
       
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

       <Marker position={position} icon={defaultIcon}>
          <Popup>
            <p>kinshasa</p>
          </Popup>
        </Marker>
        <MapController center={position} />
      </MapContainer>
   
      
    
  )
}

export default MapAdress