import React from "react";
import GoogleMapReact from 'google-map-react';
import html2canvas from "html2canvas";
import { useState } from "react";
import SceneWithSpinningBoxes from "./Cuboid";


function MapComponent() {

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

    html2canvas(document.body, {
      letterRendering: 1, allowTaint: true,
    }).then(canvas => {
      document.body.appendChild(canvas)
      setDataUrl(canvas.toDataURL());
      setCounter(counter + 1);
      console.log("this is the canvas", canvas.toDataURL());
      console.log("this is the counter", counter);
      document.body.appendChild(canvas)

    })

  }
  return (
    <div style={{
      height: '100vh', width: '100%', display: "flex", flexDirection: "column"
    }}>

      {/* // Important! Always set the container height explicitly */}
      <div style={{ height: '95vh', width: '100%', display: "flex" }} >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          className = "map"
          attribute="allowTaint"
          type="boolean"
          default="false"

        />

        <SceneWithSpinningBoxes dataUrl={dataUrl} />
      </div>
      {/* height: 120px */}
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




/*

    console.log("inside the handlescreenshot, outside the html2canvas")
    html2canvas(document.body, {
      letterRendering: 1, allowTaint: true,
    }).then(canvas => {
      setDataUrl(canvas.toDataURL());
      setCounter(counter + 1);
      console.log("inside the on-rendered")
      console.log("this is the canvas", canvas.toDataURL());
      document.body.appendChild(canvas)

    });
    
*/