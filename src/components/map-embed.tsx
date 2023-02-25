import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";

import { ResourceDestination } from "../api/destinations";

const MAPBOX_API_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_API_ACCESS_TOKEN;

export function MapEmbed({
  destination,
}: {
  destination: ResourceDestination;
}) {
  const [popup, setPopup] = useState(false);
  return (
    <Map
      mapboxAccessToken={MAPBOX_API_ACCESS_TOKEN}
      initialViewState={{
        longitude: destination.longitude,
        latitude: destination.latitude,
        zoom: 13,
      }}
      style={{ width: 700, height: 850 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker
        longitude={destination.longitude}
        latitude={destination.latitude}
        anchor="bottom"
        onClick={(e) => {
          e.originalEvent.stopPropagation();
          setPopup(true);
        }}
      >
        <img
          src={destination.image}
          alt={"marker" + destination.name}
          className="w-12 h-12 object-cover rounded-full hover:cursor-pointer"
        />
      </Marker>
      {popup && (
        <Popup
          anchor="bottom"
          onClose={() => setPopup(false)}
          longitude={destination.longitude}
          latitude={destination.latitude}
          closeButton={true}
        >
          <div>
            <h1>{destination.name}</h1>
            <p>
              {destination.city}, {destination.location}
            </p>
            <div className="h-1 rounded w-full bg-slate-900"></div>
            <p>{destination.shortDescription}</p>
          </div>
        </Popup>
      )}
    </Map>
  );
}
