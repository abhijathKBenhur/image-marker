import logo from "./logo.svg";
import car from "../src/car.jpeg";
import ImageMarker, { Marker, MarkerComponentProps } from "react-image-marker";
import Dialog from 'react-bootstrap-dialog'


import "./App.css";
import { useState } from "react";

function App() {
  const [markers, setMarkers] = useState([]);
  const [image, setImage] = useState(null);
  const CustomMarker = (props) => {
    return (
      <>
        <p
          className="custom-marker"
          style={{ color: "black", backgroundColor: "red" }}
        >
          My custom marker - {props.itemNumber}
        </p>
      </>
    );
  };

  const addMarker = (marker) => {
    
    Dialog.TextPrompt({initialValue: 'me@example.com', placeholder: 'your email'})
    setMarkers([...markers, marker])
  };

  return (
    <div className="App">
      <header className="App-header">
        <ImageMarker
          src={car}
          markers={markers}
          onAddMarker={(marker) => addMarker(marker)}
          // markerComponent={CustomMarker}
        />
      </header>
    </div>
  );
}

export default App;
