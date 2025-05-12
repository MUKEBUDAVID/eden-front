import {useEffect, } from "react";
import { LatLngExpression } from 'leaflet';
import { useMap } from "react-leaflet";




interface propsMapControlller{
  center:LatLngExpression
}



// Composant pour gérer le déplacement de la carte
const MapController = ({ center }:propsMapControlller) => {
   const map = useMap();
  
  useEffect(() => {
    map.flyTo(center, map.getZoom());
  }, [center, map]);
 

  return null;
};


export default MapController