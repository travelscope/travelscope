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
    <div className="ml-10 mr-10">
      <header className="mb-5 pt-5 ">
        <h1 className="text-xl font-semibold text-green-800">Search results</h1>
      </header>

      {destinations.map((destination) => {
        return (
          <div className="border p-3" key={destination.id}>
            {" "}
            <img
              src={destination.image}
              alt={"img-" + destination.name}
              className="h-24 w-24 rounded object-cover"
            />
            <h1 className="mt-2 text-base font-medium text-green-800">
              {destination.name}
            </h1>
            <p className="mt-2 overflow-auto text-sm  text-green-800">
              {destination.shortDescription}
            </p>
          </div>
        );
      })}
    </div>
  );
}
