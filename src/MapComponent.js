import React from "react";
import GoogleMapReact from 'google-map-react';
import html2canvas from "html2canvas";
import { useState } from "react";
import SceneWithSpinningBoxes from "./Cuboid";
import './MapComponent.css'

function MapComponent() {

  const apiKey = 'AIzaSyALBkRPKCPCe2LcghVM4pCBkSdVLfyFFRo';

  const [dataUrl, setDataUrl] = useState("https://garden.spoonflower.com/c/12307083/p/f/m/YOMUsozN5ljCavv-GHLcu0JFp439AvptoAm10sBhhRIrm7-KkoBd/Solid%20Pink%20Fresh%20Blush%20EFDACE%20Plain%20Fabric%20Solid%20Coordinate.jpg");

  const defaultProps = {
    center: {
      lat: 10.11835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const handleScreenshot = () => {

    html2canvas(document.getElementById('map'), {
      letterRendering: 1,
      allowTaint: true,
      useCORS: true
    }).then(canvas => {
      setDataUrl(canvas.toDataURL());
    })

  }
  return (

    <div className="main-container">
      <div id="map" className="left-panel" style={{}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          attribute="allowTaint"
          type="boolean"
          default="false"
        />
      </div>

      <div className="right-panel">
        <SceneWithSpinningBoxes dataUrl={dataUrl} />
        <div
          onClick={handleScreenshot}
          className="button"
        >
          Take Screenshot
        </div>

      </div>
    </div>
  );
}

export default MapComponent;