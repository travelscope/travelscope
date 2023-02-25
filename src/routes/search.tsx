import { useLoaderData } from "react-router-dom";
import { apiSearchDestinations } from "../api/destinations";

export async function loader() {
  const destinations = await apiSearchDestinations("java");
  return { destinations };
}

export function SearchRoute() {
  const { destinations } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;

  return (
    <div>
      <header className="mb-10">
        <h1>Search results</h1>
      </header>

      {destinations.map((destination) => {
        return (
          <div key={destination.id}>
            <h1>{destination.name}</h1>
          </div>
        );
      })}
    </div>
  );
}
