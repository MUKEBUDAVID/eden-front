import { MouseEvent, PropsWithChildren, useEffect, useState, useCallback } from "react";
import { LatLngExpression } from "leaflet";
import mansory from "./Mansory.module.scss";

type PropsMansory = PropsWithChildren<{
  selectedCity: string;
  position?: LatLngExpression;
  setPosition: React.Dispatch<React.SetStateAction<LatLngExpression>>;
}>;

interface Ville {
  nom: string;
  latitude: number;
  longitude: number;
  image: string;
}

function Mansory({ selectedCity, setPosition }: PropsMansory) {
  const [oneCity, setOneCity] = useState<Ville[]>([]);

  // ✅ Utilisation de useCallback pour mémoriser la fonction
  const moveCity = useCallback(async () => {
    try {
      const response = await fetch("./data/depotAdress.json");
      if (!response.ok) throw new Error(`Failed to fetch data: ${response.status}`);
      
   const data: Record<string, Ville[]> = await response.json();
      
      
      const cityData = data[selectedCity] || [];
      
      setOneCity(cityData);

      // ✅ Met à jour la position uniquement si cityData n'est pas vide
      if (cityData.length > 0) {
        console.log(cityData);
        
        setPosition([cityData[0].latitude, cityData[0].longitude]);
      }
    } catch (error) {
      console.error("Error fetching city data:", error);
      setOneCity([]); // Réinitialise en cas d'erreur
    }
  }, [selectedCity, setPosition]); // Dépendances explicites

  // ✅ Déclenche moveCity quand selectedCity change
  useEffect(() => {
    moveCity();
  }, [moveCity]);

  // ✅ Gestion du clic optimisée
  const moveInCity = (event: MouseEvent<HTMLImageElement>) => {
    event.preventDefault();
    const depotSelected = event.currentTarget.alt;
    const depot = oneCity.find((d) => d.nom === depotSelected);
    if (depot) setPosition([depot.latitude, depot.longitude]);
  };

  return (
    <div className={mansory.mansory1}>
      {oneCity?.map((depot) => (
        <div key={`${depot.longitude}-${depot.nom}`}>
          <img
            src={depot.image}
            onClick={moveInCity}
            alt={depot.nom}
            role="button"
            aria-label={`Voir ${depot.nom}`}
          />
        </div>
      ))}
    </div>
  );
}

export default Mansory;