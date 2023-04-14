import React from "react";
import GoogleMapReact from 'google-map-react';
import html2canvas from "html2canvas";
import { useState } from "react";
import SceneWithSpinningBoxes from "./Cuboid";
import './MapComponent.css'

const SearchBar = ({ onSearch }) => {
  const [address, setAddress] = useState("");

  const handleInputChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSearch = () => {
    onSearch(address);
  };

  return (
    <div className="search-block">
      <input placeholder="Where to?"  className="search-bar" type="text" value={address} onChange={handleInputChange} />
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
};


function MapComponent() {



  const handleSearch = (address) => {
    // Use a geocoding API to convert the address to coordinates
    // and set the position state
    // Here is an example using the Google Maps Geocoding API:
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        setPosition({
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        });
      } else {
        console.error(`Geocode was not successful for the following reason: ${status}`);
      }
    });
  };

  const apiKey = 'AIzaSyALBkRPKCPCe2LcghVM4pCBkSdVLfyFFRo';
  const [position, setPosition] = useState({ lat: 37.7749, lng: -122.4194 });
  const [dataUrl, setDataUrl] = useState("https://garden.spoonflower.com/c/12307083/p/f/m/YOMUsozN5ljCavv-GHLcu0JFp439AvptoAm10sBhhRIrm7-KkoBd/Solid%20Pink%20Fresh%20Blush%20EFDACE%20Plain%20Fabric%20Solid%20Coordinate.jpg");


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

    <div className="main-container" >
        <SearchBar onSearch={handleSearch} />
      <div id="map" className="left-panel">

        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}

          defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
          defaultZoom={12}
          center={position}
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


