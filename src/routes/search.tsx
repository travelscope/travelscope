import { useLoaderData } from "react-router-dom";
import { apiSearchDestinations } from "../api/destinations";

export async function loader({ request }: any) {
  const url = new URL(request.url);
  const q = String(url.searchParams.get("q"));

  const destinations = await apiSearchDestinations(q);
  return { destinations };
}

export function SearchRoute() {
  const { destinations } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;

  return (
    <div className="ml-10">
      <header className="mb-10 pt-5">
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
