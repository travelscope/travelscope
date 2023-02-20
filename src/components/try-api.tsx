import { useEffect, useState } from "react";
import { apiGetDestinations, ResourceDestinations } from "../api/destinations";

export function TryApi() {
  const [destinations, setDestinations] = useState<ResourceDestinations>();
  useEffect(() => {
    apiGetDestinations().then((data: ResourceDestinations) => {
      setDestinations(data);
    });
  });
  return (
    <div>
      <h1>Try API</h1>
      {/* <pre>{JSON.stringify(destinations)}</pre> */}

      <ul>
        {destinations?.map((destination) => {
          return <li key={destination.id}>{destination.name}</li>;
        })}
      </ul>
    </div>
  );
}
