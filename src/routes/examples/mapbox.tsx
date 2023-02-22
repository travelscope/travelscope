import Map from "react-map-gl";
import { useLoaderData } from "react-router-dom";

import { apiGetDestinationById } from "../../api/destinations";
import { MapEmbed } from "../../components/map-embed";

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
      <MapEmbed destination={destination} />
    </div>
  );
}
