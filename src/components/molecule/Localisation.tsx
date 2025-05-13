
import { LatLngExpression } from "leaflet";
import Select from "react-select";
import { useEffect, useState } from "react";
import MapAdress from "../atom/MapAdress";
import Mansory from "../atom/Mansory";
import { cityMove} from "../../util/travel"


function Localisation() {

  const [selectedCity,setSelectedCity]=useState<string>("kinshasa");
  const [position,setPosition]=useState<LatLngExpression>([-4.4419311,15.2662931]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  


  const cityOptions = [
  { value: "kinshasa", label: "kinshasa" },
  { value: "Matadi", label: "Matadi" },
  { value: "Muanda", label: "Muanda" }
]
  const fetchCityPosition = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const newPosition = await cityMove(selectedCity, cityOptions);

        setPosition(newPosition as [number, number]);

        
} catch (err) {
        setError('Failed to load city position');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    console.log(loading,error);
    
fetchCityPosition();
    
  }, [selectedCity]);


  

  return (

    <section className="localisation" >
   <h2>Explore Nos Differents Points De Vente</h2>
      
    <MapAdress position={position} className="map"/>
    

      

    <div className="imgLocal">
      
      <Select className="select" options={cityOptions} defaultValue={cityOptions[0]} onChange={(getValue)=>{ setSelectedCity(getValue?.value as string)
      }} />

     <Mansory className="mansory1" selectedCity={selectedCity} position={position} setPosition={setPosition}/> 

     
     
     

    </div>


      

   

  
    </section>
  )
}

export default Localisation