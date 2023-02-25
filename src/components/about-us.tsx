import { Link } from "react-router-dom";

export function AboutUs() {
  return (
    <section className="flex flex-col px-4 md:flex-row md:px-24 py-16 bg-teal-100">
      <img
        className="sm:w-full object-cover"
        src="https://ik.imagekit.io/travelscopee/about-us-img.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676904256683"
        alt="About Us"
      />
      <div className="flex flex-col text-center md:text-left md:pl-8 mt-10 md:mt-0">
        <p className="font-semibold text-3xl text-green-800">About Us</p>
        <p className="font-bold text-4xl text-cyan-500 tracking-wider capitalize">
          Most popular travel list
        </p>
        <p className="font-medium text-xl text-green-800 mt-8 tracking-widest">
          We are a travel platform that aims to provide the best tourist spots
          for travelers in Indonesia. We provide a list of the best prices for
          travel so that you can adjust to the budget you have..
        </p>
        <p className="font-medium text-xl text-green-800 mt-8 tracking-widest">
          We are committed to providing a high quality service and an
          unforgettable experience for each of our customers.
        </p>
        <Link
          to={"/about-us"}
          className="bg-cyan-500 p-2.5 font-semibold text-white mt-4 rounded-lg hover:bg-cyan-700"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
