import Map from "react-map-gl";
import { useLoaderData } from "react-router-dom";

import { apiGetDestinationById } from "../../api/destinations";

const MAPBOX_API_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_API_ACCESS_TOKEN;

export async function loader() {
  const destination = await apiGetDestinationById(
    "c11c7269-1ad0-4df0-ad8f-aabd366d73fc"
  );
  return { destination };
}

export function ExampleMapboxRoute() {
  const { destination } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div className="z-0">
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
    </div>
  );
}
