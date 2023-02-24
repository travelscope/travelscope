import { Link } from "react-router-dom";
import { ResourceDestination } from "../api/destinations";

const formatToRupiah = (num: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(num);
};

function Card({ destination }: { destination: ResourceDestination }) {
  return (
    <div className="bg-white shadow-xl hover:shadow-2xl rounded p-2 flex flex-col">
      <img
        src={destination.image}
        alt={"img-" + destination.name}
        className="rounded object-cover h-40 w-full"
      />
      <div className="mb-4">
        <h1 className="text-green-800 mt-5 font-medium text-lg">
          {destination.name}
        </h1>
        <p className="text-green-800 mt-5 h-36 overflow-auto">
          {destination.shortDescription}
        </p>
        <p className="text-slate-800 font-medium mt-4">
          {formatToRupiah(destination.price)}
        </p>
      </div>
      <div className="flex justify-between flex-end">
        <form>
          <button className="bg-cyan-500 p-2.5 text-white rounded-lg hover:bg-cyan-700">
            Favorite
          </button>
        </form>
        <Link
          to={`/destinations/${destination.id}`}
          className="bg-white border border-cyan-500 p-2.5 text-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-white hover:border-white"
        >
          Detail
        </Link>
      </div>
    </div>
  );
}

export default Card;
