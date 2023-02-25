import { Link } from "react-router-dom";

export function AboutUs() {
  return (
    <section className="flex flex-col bg-teal-100 px-4 py-16 md:flex-row md:px-24">
      <img
        className="object-cover sm:w-full"
        src="https://ik.imagekit.io/travelscopee/about-us-img.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676904256683"
        alt="About Us"
      />
      <div className="mt-10 flex flex-col md:mt-0 md:pl-8">
        <p className="text-3xl font-semibold text-green-800">About Us</p>
        <p className="text-4xl font-bold capitalize tracking-wider text-cyan-500">
          Most popular travel list
        </p>
        <p className="mt-8 text-xl font-medium text-green-800 ">
          We are a travel platform that aims to provide the best tourist spots
          for travelers in Indonesia. We provide a list of the best prices for
          travel so that you can adjust to the budget you have..
        </p>
        <p className="mt-8 text-xl font-medium text-green-800 ">
          We are committed to providing a high quality service and an
          unforgettable experience for each of our customers.
        </p>
        <Link
          to={"/about-us"}
          className="mt-4 rounded-lg bg-cyan-500 p-2.5 font-semibold text-white hover:bg-cyan-700"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
