import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { apiGetDestinationById } from "../../api/destinations";
import { formatToRupiah } from "../../libs/format-currency";
import { MapEmbed } from "../../components/map-embed";
import StarRatings from "react-star-ratings";

export async function loader({ params }: LoaderFunctionArgs) {
  const destination = await apiGetDestinationById(String(params.destinationId));
  return { destination };
}

export function DestinationIdRoute() {
  const { destination } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  if (!destination) {
    return <p>Destination not found</p>;
  }

  return (
    <div className="flex flex-col md:flex-row items-start justify-between">
      <div className="p-5">
        <img
          src={destination.image}
          alt={"img-" + destination.name}
          className="rounded object-cover h-52 w-full"
        />
        <h1 className="text-green-800 mt-5 font-semibold text-xl tracking-wide">
          {destination.name}
        </h1>
        <h2 className="text-green-600 mb-3 font-semibold text-medium tracking-wide">
          {destination.city}{" "}
          <span className="text-green-500">{destination.location}</span>
        </h2>
        <div className="prose whitespace-pre-wrap text-sm text-green-800 tracking-wider text-justify">
          {destination.description}
        </div>
        <div className="mt-4">
          <StarRatings
            rating={destination.rating}
            starRatedColor="yellow"
            starDimension="20px"
            starSpacing="5px"
            numberOfStars={5}
            name="rating"
          />
        </div>
        <div className="flex justify-between">
          <p className="text-slate-800 font-semibold text-lg tracking-wide mt-4">
            {formatToRupiah(destination.price)}
          </p>
          <form>
            <button className="bg-cyan-500 py-2.5 px-5 text-white rounded-lg hover:bg-cyan-700 mt-2">
              Favorite
            </button>
          </form>
        </div>
      </div>

      <MapEmbed destination={destination} />
    </div>
  );
}
