import { useEffect, useState } from "react";
import RequestAPI from "../utils/requestapi";
import Card from "./card";

function ExploreSection() {
  const [destinations, setDestinations] = useState([]);

  useEffect(function () {
    RequestAPI.get("destinations")
      .then((response) => response.data)
      .then((result) => setDestinations(result));
  }, []);

  return (
    <div id="explore-section" className="container mx-auto max-w-5xl ">
      <p className="font-semibold text-3xl text-green-800 my-8">
        Explore your spot
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 px-2 md:px-0">
        {destinations.map((destination, index) => {
          if (index < 4) return <Card key={index} destination={destination} />;
        })}
      </div>
      <div className="flex justify-center mb-8">
        <button className="bg-cyan-500 p-2.5 font-semibold text-white mt-4 rounded-lg hover:bg-cyan-700">
          See More
        </button>
      </div>
    </div>
  );
}

export default ExploreSection;
