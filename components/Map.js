import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { getCenter } from "geolib";

const MapBox = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults.map((elm) => ({
    longitude: elm.long,
    latitude: elm.lat,
  }));
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <Map
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onMove={(evt) => setViewport(evt.viewState)}
    >
      {searchResults.map((elm) => (
        <div key={elm.long}>
          <Marker
            longitude={elm.long}
            latitude={elm.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(elm)}
              className="text-2xl cursor-pointer animate-bounce"
              aria-label="push-pin"
              role="img"
            >
              📌
            </p>
          </Marker>
          {/* {selectedLocation && selectedLocation.long == elm.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={elm.lat}
              longitude={elm.long}
            >
              {elm.title}
            </Popup>
          ) : (
            false
          )} */}
        </div>
      ))}
    </Map>
  );
};

export default MapBox;
