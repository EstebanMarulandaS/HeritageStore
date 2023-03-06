import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner';

import "./storesStyle.css";

export const Stores = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAc9RLte0AWbbl4jnqzkIgjNnov5p23TQ8",
  });

  if (!isLoaded)
    return (
      <div>
        <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
      </div>
    );

  return(
    <div>
        <Map/>
    </div>
  )
}

function Map(){
    
    return(
        <div>
            <div className="h1"><h1>Visit our nearest stores!</h1></div>
            <div>
            <GoogleMap zoom={5} center={{lat:4.570868 , lng:-74.297333}} mapContainerClassName="map-container">
                <Marker position={{lat:4.570868, lng:-74.297333}}/>
            </GoogleMap>
            </div>
        </div>
    )
}
