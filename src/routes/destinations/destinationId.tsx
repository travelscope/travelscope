import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import Map from "react-map-gl";

import { apiGetDestinationById } from "../../api/destinations";
import { MapEmbed } from "../../components/map-embed";

export async function loader({ params }: LoaderFunctionArgs) {
  const destination = await apiGetDestinationById(String(params.destinationId));
  return { destination };
}

export function DestinationIdRoute() {
  const { destination } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  if (!destination) {
    return <p>Destination not found</p>;
  }

  return (
    <div>
      <div>
        <h4 className="text-xl font-bold">{destination.name}</h4>
        <div className="prose whitespace-pre-wrap">
          {destination.description}
        </div>
      </div>

      <MapEmbed destination={destination} />
    </div>
  );
}
