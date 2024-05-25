import React, { useState } from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapBox = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });
  return (
    // <ReactMapGL
    //   mapStyle="mapbox://styles/shakil-ahmed/clwljtqxv00mt01qs8gmjagop"
    //   mapboxAccessToken={process.env.mapbox_key}
    //   {...viewport}
    //   onViewportChange={(nextViewport) => setViewport(nextViewport)}
    // ></ReactMapGL>
    <Map
      mapboxAccessToken="<Mapbox access token>"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      //   {...viewport}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
};

export default MapBox;
