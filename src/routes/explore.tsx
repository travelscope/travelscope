import { useLoaderData } from "react-router-dom";
import { apiGetDestinations } from "../api/destinations";
import { ExploreItems } from "../components/explore-items";

export async function loader() {
  const destinations = await apiGetDestinations();
  return { destinations };
}

export function ExploreRoute() {
  const { destinations } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;

  return (
    <>
      <ExploreItems destinations={destinations} />
    </>
  );
}
