import { useLoaderData } from "react-router-dom";
import { apiGetDestinations } from "../api/destinations";
import { AboutUs } from "../components/about-us";
import { ExploreSection } from "../components/explore-section";
import { HomeSection } from "../components/home-section";

export async function loader() {
  const destinations = await apiGetDestinations();
  return { destinations };
}

export function HomeRoute() {
  const { destinations } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;

  return (
    <>
      <HomeSection />
      <AboutUs />
      <ExploreSection destinations={destinations} />
    </>
  );
}
