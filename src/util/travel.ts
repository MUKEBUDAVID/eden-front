import { LatLngExpression } from "leaflet";

interface Option {
  value: string;
  label: string;
}

interface Ville {
  nom: string;
  latitude: number;
  longitude: number;
  image: string;
}

interface VillesData {
  kinshasa: Ville[];
  Matadi: Ville[];
  Muanda: Ville[];
}

const DEFAULT_COORDINATES: LatLngExpression = [-4.4009, 15.2524];

export async function cityMove(
  selectValue: string | undefined, 
  options: Option[]
): Promise<LatLngExpression> {
  try {
    const response = await fetch("./data/depotAdress.json");
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data: VillesData = await response.json();
    const { kinshasa, Matadi, Muanda } = data;

    if (!selectValue) {
      return DEFAULT_COORDINATES;
    }

    const villeMap: Record<string, LatLngExpression> = {
      [options[0].value]: [kinshasa[0].latitude, kinshasa[0].longitude],
      [options[1].value]: [Matadi[0].latitude, Matadi[0].longitude],
      [options[2].value]: [Muanda[0].latitude, Muanda[0].longitude],
    };

    return villeMap[selectValue] || DEFAULT_COORDINATES;
    
  } catch (error) {
    console.error("Error in makerMove:", error);
    return DEFAULT_COORDINATES;
  }
}





