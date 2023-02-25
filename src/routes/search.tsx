import { useLoaderData } from "react-router-dom";
import { apiSearchDestinations } from "../api/destinations";
import Card from "../components/card";

export async function loader({ request }: any) {
  const url = new URL(request.url);
  const q = String(url.searchParams.get("q"));

  const destinations = await apiSearchDestinations(q);
  return { destinations, q };
}

export function SearchRoute() {
  const { destinations, q } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;

  return (
    <div className="ml-10 mr-10">
      <header className="mb-5 pt-5 ">
        <h1 className="text-xl font-semibold text-green-800">
          Search results for "{q}"
        </h1>
      </header>

      <div className="mb-8 grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:grid-cols-4 md:px-0">
        {destinations.map((destination, index) => {
          return <Card key={index} destination={destination} />;
        })}
      </div>
    </div>
  );
}
