import { ResourceDestination } from "../api/destinations";

const formatToRupiah = (num: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(num);
};

function Card(props: { destination: ResourceDestination }) {
  return (
    <div className="bg-white shadow-xl hover:shadow-2xl rounded p-2 flex flex-col">
      <img
        src={props.destination.image}
        alt={"img-" + props.destination.name}
        className="rounded object-cover h-40 w-full"
      />
      <div className="mb-4">
        <h1 className="text-green-800 mt-5 font-medium text-lg">
          {props.destination.name}
        </h1>
        <p className="text-green-800 mt-5 h-36 overflow-auto">
          {props.destination.shortDescription}
        </p>
        <p className="text-slate-800 font-medium mt-4">
          {formatToRupiah(props.destination.price)}
        </p>
      </div>
      <div className="flex justify-between flex-end">
        <button className="bg-cyan-500 p-2.5 text-white rounded-lg hover:bg-cyan-700">
          Add
        </button>
        <button className="bg-white border border-cyan-500 p-2.5 text-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-white hover:border-white">
          Detail
        </button>
      </div>
    </div>
  );
}

export default Card;
