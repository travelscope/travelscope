import Map from "react-map-gl";

import { ResourceDestination } from "../api/destinations";

const MAPBOX_API_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_API_ACCESS_TOKEN;

export function MapEmbed({
  destination,
}: {
  destination: ResourceDestination;
}) {
  return (
    <Map
      mapboxAccessToken={MAPBOX_API_ACCESS_TOKEN}
      initialViewState={{
        longitude: destination.longitude,
        latitude: destination.latitude,
        zoom: 13,
      }}
      style={{ width: 500, height: 500 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}
