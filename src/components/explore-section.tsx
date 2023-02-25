import { Link } from "react-router-dom";
import { ResourceDestinations } from "../api/destinations";
import Card from "./card";

export function ExploreSection(props: { destinations: ResourceDestinations }) {
  return (
    <div id="explore-section" className="container max-w-5xl sm:mx-auto">
      <p className="my-8 text-center text-3xl font-semibold text-green-800 md:text-left">
        Explore your spot
      </p>
      <div className="mb-8 grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:grid-cols-4 md:px-0">
        {props.destinations.map((destination, index) => {
          if (index < 4) return <Card key={index} destination={destination} />;
        })}
      </div>
      <div className="mb-8 flex justify-center">
        <Link to={"/explore"}>
          <button className="mt-4 rounded-lg bg-cyan-500 p-2.5 font-semibold text-white hover:bg-cyan-700">
            Explore More Places
          </button>
        </Link>
      </div>
    </div>
  );
}
