import { Link } from "react-router-dom";
import { ResourceDestination } from "../api/destinations";
import { formatToRupiah } from "../libs/format-currency";
import StarRatings from "react-star-ratings";

function Card({ destination }: { destination: ResourceDestination }) {
  return (
    <div className="flex flex-col rounded bg-white p-2 shadow-xl hover:shadow-2xl">
      <img
        src={destination.image}
        alt={"img-" + destination.name}
        className="h-40 w-full rounded object-cover"
      />
      <div className="mb-4">
        <h1 className="mt-5 text-lg font-semibold  text-green-800">
          {destination.name}
        </h1>
        <p className="mt-5 h-36 overflow-auto text-sm  text-green-800">
          {destination.shortDescription}
        </p>
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
        <p className="mt-4 text-lg font-semibold  text-slate-800">
          {formatToRupiah(destination.price)}
        </p>
      </div>
      <div className="flex-end flex justify-between">
        <Link
          to={`/destinations/${destination.id}`}
          className="rounded-lg bg-cyan-500 p-2.5 text-white hover:bg-cyan-700"
        >
          Detail
        </Link>

        <form method="post" action={`/destinations/${destination.id}`}>
          <button
            type="submit"
            className="rounded-lg bg-white p-2.5 text-red-500 hover:border-white hover:bg-red-500 hover:text-white"
          >
            ♡
          </button>
        </form>
      </div>
    </div>
  );
}

export default Card;
