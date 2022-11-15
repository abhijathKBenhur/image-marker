import logo from "./logo.svg";
import car from "../src/car.jpeg";
import ImageMarker, { Marker, MarkerComponentProps } from "react-image-marker";
import Dialog from 'react-bootstrap-dialog'


import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [markers, setMarkers] = useState([]);
  const [image, setImage] = useState(null);
  const dialoagRef = useRef()
  const CustomMarker = (props) => {
    return (
      <>
        <p
          className="custom-marker"
          style={{ color: "#CB052C" }}
        >
          {props.label}
        </p>
      </>
    );
  };

  const addMarkerPoint = (marker) =>{
    setMarkers([...markers,marker])
  }

  const hidePrompt = () =>{
    dialoagRef.current.hide()
  }
  const addMarker = (marker) => {
    dialoagRef.current.show({
      title: "Label",
      prompt: {
        initialValue: 'me@example.com', 
        placeholder: 'your email',
        required:true
      },
      actions: [
        Dialog.Action('Cancel', () => hidePrompt()),
        Dialog.Action('Add', (a,b) => {

          addMarkerPoint({
            ...marker,
            label:a.promptInput.state.value
        })
        })
      ]
    })

  };

  return (
    <div className="App">
      <header className="App-header">
        <Dialog ref={dialoagRef}></Dialog>
        <ImageMarker
          src={car}
          markers={markers}
          onAddMarker={(marker) => addMarker(marker)}
          markerComponent={CustomMarker}
        />
      </header>
    </div>
  );
}

export default App;
