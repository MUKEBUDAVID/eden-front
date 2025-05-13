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
  matadi: Ville[];
  muanda: Ville[];
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
    const { kinshasa, matadi, muanda } = data;

    if (!selectValue) {
      return DEFAULT_COORDINATES;
    }

    const villeMap: Record<string, LatLngExpression> = {
      [options[0].value]: [kinshasa[0].latitude, kinshasa[0].longitude],
      [options[1].value]: [matadi[0].latitude, matadi[0].longitude],
      [options[2].value]: [muanda[0].latitude, muanda[0].longitude],
    };

    return villeMap[selectValue] || DEFAULT_COORDINATES;
    
  } catch (error) {
    console.error("Error in makerMove:", error);
    return DEFAULT_COORDINATES;
  }
}





