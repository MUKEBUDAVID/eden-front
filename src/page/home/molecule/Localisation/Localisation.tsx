import { LatLngExpression } from "leaflet";
import Select from "../../../../components/atom/select/Select";
import { useEffect, useState, useCallback, useMemo } from "react"; // Ajout de useMemo
import MapAdress from "../../atom/MapAdress/MapAdress";
import Mansory from "../../atom/Mansory/Mansory";
import { cityMove } from "../../../../util/travel";
import localisation from "./Localisation.module.scss";

function Localisation() {
  const [selectedCity, setSelectedCity] = useState<string>("kinshasa");
  const [position, setPosition] = useState<LatLngExpression>([-4.4419311, 15.2662931]);

  // ✅ Stabilise cityOptions avec useMemo
  const cityOptions = useMemo(() => [
    { value: "kinshasa", label: "kinshasa" },
    { value: "Matadi", label: "Matadi" },
    { value: "Muanda", label: "Muanda" },
  ], []); // Aucune dépendance = constante


  // ✅ useCallback avec cityOptions stable
  const fetchCityPosition = useCallback(async (city: string) => {
    try {
      const newPosition = await cityMove(city, cityOptions);
      if (newPosition) setPosition(newPosition);
    } catch (err) {
      console.error("Failed to fetch city position:", err);
      setPosition([-4.4419311, 15.2662931]); // Fallback
    }
  }, [cityOptions]); // cityOptions est maintenant stable


  
  useEffect(() => {
    fetchCityPosition(selectedCity);
  }, [selectedCity, fetchCityPosition]);

  return (
    <section className={localisation.localisation}>
      <h2>Explore Nos Differents Points De Vente</h2>
      <MapAdress position={position} />

      <div className={localisation.imgLocal}>
        <Select
          options={cityOptions}
          defaultValue={cityOptions[0].value}

  onChange={(selectedOption) => {
            if (selectedOption) setSelectedCity(selectedOption);
          }}
        
        />
        <Mansory selectedCity={selectedCity} position={position} setPosition={setPosition} />
      </div>
    </section>
  );
}

export default Localisation;


