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
        <h1 className="mt-5 text-xl font-semibold tracking-wide text-green-800">
          {destination.name}
        </h1>
        <h2 className="text-medium mb-3 font-semibold tracking-wide text-green-600">
          {destination.city}{" "}
          <span className="text-green-500">{destination.location}</span>
        </h2>
        <div className="prose whitespace-pre-wrap text-justify text-sm tracking-wider text-green-800">
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
          <p className="mt-4 text-lg font-semibold tracking-wide text-slate-800">
            {formatToRupiah(destination.price)}
          </p>
          <form>
            <button className="mt-2 rounded-lg bg-cyan-500 py-2.5 px-5 text-white hover:bg-cyan-700">
              Favorite
            </button>
          </form>
        </div>
      </div>

      <MapEmbed destination={destination} />
    </div>
  );
}
