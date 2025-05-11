import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import Select from 'react-select'
import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-flex';




function Localisation() {

  const [selectValue,getSelectValue]=useState<string | undefined>("kinshasa");
  const [position,getPosition]=useState<LatLngExpression>([48.8566, 2.3522])

  const options = [
  { value: "kinshasa", label: "kinshasa" },
  { value: "Matadi", label: "Matadi" },
  { value: "Muanda", label: "Muanda" }
]

const coordonneesVillesRDC = [
  // Kinshasa
  {
    ville: "Kinshasa",
    latitude: -4.4419311,
    longitude: 15.2662931,
    lieu: "Place de la Gare"
  },
  {
    ville: "Kinshasa",
    latitude: -4.32758,
    longitude: 15.31357,
    lieu: "Tour de l'Échangeur"
  },
  {
    ville: "Kinshasa",
    latitude: -4.4009,
    longitude: 15.2524,
    lieu: "Stade des Martyrs"
  },
  {
    ville: "Kinshasa",
    latitude: -4.3225,
    longitude: 15.3219,
    lieu: "Palais du Peuple"
  },

  // Matadi
  {
    ville: "Matadi",
    latitude: -5.816667,
    longitude: 13.483333,
    lieu: "Centre-ville"
  },
  {
    ville: "Matadi",
    latitude: -5.8075,
    longitude: 13.4508,
    lieu: "Port de Matadi"
  },
  {
    ville: "Matadi",
    latitude: -5.8246,
    longitude: 13.4912,
    lieu: "Pont Maréchal"
  },

  // Muanda
  {
    ville: "Muanda",
    latitude: -5.9309,
    longitude: 12.3519,
    lieu: "Plage de Muanda"
  },
  {
    ville: "Muanda",
    latitude: -5.9333,
    longitude: 12.35,
    lieu: "Port de Muanda"
  },
  {
    ville: "Muanda",
    latitude: -5.9278,
    longitude: 12.3708,
    lieu: "Centre-ville"
  }
];

useEffect(()=>{


},[selectValue])
  

  return (

    <section className="localisation" >
   <h2>Explore Nos Differents Points De Vente</h2>
      <div id="map">
         <MapContainer 
      center={position} // Paris par défaut
      zoom={13} 
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={position}>
        <Popup>Hello, world!</Popup>
      </Marker>
      <Marker position={[51,505 , - 0.09]}>
        <Popup>Hello, world!</Popup>
      </Marker> 
    </MapContainer>
    

      </div>

    <div className="imgLocal">
      
      <Select className="select" options={options} defaultValue={options[0]} onChange={(getValue)=>{ getSelectValue(getValue?.value)
      }} />

      {/* <div> */}
          <Masonry columns={4} spacing={10} className="mansory">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 3</div>
      <div>Item 3</div>
      <div>Item 3</div>
      <div>Item 3</div>
      <div>Item 3</div>
      <div>Item 3</div>
      <div>Item 3</div>
      <div>Item 3</div>
      {/* Add as many items as needed */}
    </Masonry>
      {/* </div> */}

    </div>


      

   

  
    </section>
  )
}

export default Localisation