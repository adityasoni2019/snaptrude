import React from "react";
import GoogleMapReact from 'google-map-react';
import html2canvas from "html2canvas";
import { useState } from "react";
import { useRef } from "react";
import SceneWithSpinningBoxes from "./Cuboid";

function MapComponent() {

  const componentRef = useRef();
  const [dataUrl, setDataUrl] = useState("https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60");
  const [counter, setCounter] = useState(0);

  const defaultProps = {
    center: {
      lat: 10.11835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const handleScreenshot = () => {
    console.log("this is the map component", document.getElementById('map'));
    html2canvas(document.getElementById('map'), {
      letterRendering: 1, allowTaint: true,
    }).then(canvas => {
      document.body.appendChild(canvas)
      setDataUrl(canvas.toDataURL());
      setCounter(counter + 1);
      document.body.appendChild(canvas)

    })

  }
  return (
    <div style={{width: '100%', display: "flex", flexDirection: "column"}} id="complete">

      {/* // Important! Always set the container height explicitly */}
      <div style={{ height: '95vh', width: '100%', display: "flex" }} >

        <div id="map" style={{ height: '95vh', width: '100%', display: "flex" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            attribute="allowTaint"
            type="boolean"
            default="false"
            ref={componentRef}
          />
        </div>
        <SceneWithSpinningBoxes dataUrl={dataUrl} />

      </div>
      <button
        style={{ height: '50px' }}
        onClick={handleScreenshot}
      >
        Take Screenshot
      </button>

    </div>
  );
}

export default MapComponent;