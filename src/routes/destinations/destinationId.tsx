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
    <div className="flex flex-col items-start justify-between md:flex-row">
      <div className="p-5">
        <img
          src={destination.image}
          alt={"img-" + destination.name}
          className="h-52 w-full rounded object-cover"
        />
        <h1 className="mt-5 text-xl font-semibold  text-green-800">
          {destination.name}
        </h1>
        <h2 className="text-medium mb-3 font-semibold  text-green-600">
          <span>{destination.city}, </span>
          <span className="text-green-500">{destination.location}</span>
        </h2>
        <div className="prose whitespace-pre-wrap text-justify text-sm  text-green-800">
          {destination.description}
        </div>
        <div className="mt-4">
          <StarRatings
            rating={destination.rating}
            starRatedColor="#3B82F6"
            starDimension="20px"
            starSpacing="5px"
            numberOfStars={5}
            name="rating"
          />
        </div>
        <div className="flex justify-between">
          <p className="mt-4 text-lg font-semibold  text-slate-800">
            {formatToRupiah(destination.price)}
          </p>
          <form>
            <button className="rounded-lg bg-white p-2.5 text-red-500 hover:border-white hover:bg-red-500 hover:text-white">
              ♡
            </button>
          </form>
        </div>
      </div>

      <MapEmbed destination={destination} />
    </div>
  );
}
