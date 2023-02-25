import { apiGetDestinations } from "../api/destinations";

export async function loader() {
  const destinations = await apiGetDestinations();
  return { destinations };
}

export function SearchRoute() {
  return (
    <div>
      <h1>Search</h1>
    </div>
  );
}
