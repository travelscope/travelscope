import { ResourceDestinations } from "../api/destinations";
import Card from "./card";

export function ExploreItems(props: { destinations: ResourceDestinations }) {
  return (
    <div id="explore-section" className="container mx-auto max-w-5xl ">
      <p className="font-semibold text-center text-3xl text-green-800 my-8">
        Explore your spot
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 px-2 md:px-0">
        {props.destinations.map((destination, index) => {
          return <Card key={index} destination={destination} />;
        })}
      </div>
    </div>
  );
}
