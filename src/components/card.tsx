interface Destination {
  _id: string;
  city: string;
  description: string;
  images: [{ url: string }];
  name: string;
  price: number;
  rating: number;
  shortDescription: string;
}

const rupiah = (num: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(num);
};

const getPrimaryUrlImage = (images: [{ url: string }]): string => {
  let imageUrl = "default.jpg";
  if (images.length > 0) {
    imageUrl = images[0].url;
  }

  return imageUrl;
};

function Card(props: { destination: Destination }) {
  return (
    <div className="bg-white shadow-xl hover:shadow-2xl rounded p-2 flex flex-col">
      <img
        src={getPrimaryUrlImage(props.destination.images)}
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
          {rupiah(props.destination.price)}
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
