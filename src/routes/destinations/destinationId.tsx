import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { apiGetDestinationById } from "../../api/destinations";
import { MapEmbed } from "../../components/map-embed";

export async function loader({ params }: LoaderFunctionArgs) {
  const destination = await apiGetDestinationById(String(params.destinationId));
  return { destination };
}

const formatToRupiah = (num: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(num);
};

export function DestinationIdRoute() {
  const { destination } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  if (!destination) {
    return <p>Destination not found</p>;
  }

  return (
    <div className="flex justify-evenly mt-16">
      <div className="p-5">
        <img
          src={destination.image}
          alt={"img-" + destination.name}
          className="rounded object-cover h-1/4 w-full"
        />
        <h4 className="font-semibold text-green-800 text-xl mb-2 mt-2">
          {destination.name}
        </h4>
        <div className="prose whitespace-pre-wrap text-sm text-green-800">
          {destination.description}
        </div>
        <p className="text-m font-medium mt-4">
          {formatToRupiah(destination.price)}
        </p>
        <form>
          <button className="bg-cyan-500 py-2.5 px-5 text-white rounded-lg hover:bg-cyan-700 mt-2">
            Add
          </button>
        </form>
      </div>

      <MapEmbed destination={destination} />
    </div>
  );
}
