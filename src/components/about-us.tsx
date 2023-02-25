import { Link } from "react-router-dom";

export function AboutUs() {
  return (
    <section className="flex flex-col bg-teal-100 px-4 py-16 md:flex-row md:px-24">
      <img
        className="object-cover sm:w-full"
        src="https://ik.imagekit.io/travelscopee/about-us-img.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676904256683"
        alt="About Us"
      />
      <div className="mt-10 flex-col md:mt-0 md:pl-8">
        <p className="max-w-lg text-2xl font-semibold text-green-800 sm:text-3xl md:max-w-2xl md:text-4xl">About Us</p>
        <p className="max-w-lg text-2xl font-semibold capitalize text-cyan-500 sm:text-3xl md:max-w-2xl md:text-4xl">
          Most popular travel list
        </p>
        <p className="mt-6 text-base text-green-800 sm:text-lg md:text-xl">
          We are a travel platform that aims to provide the best tourist spots
          for travelers in Indonesia. We provide a list of the best prices for
          travel so that you can adjust to the budget you have..
        </p>
        <p className="mt-6 mb-6 text-base text-green-800 sm:text-lg md:text-xl">
          We are committed to providing a high quality service and an
          unforgettable experience for each of our customers.
        </p>
        <Link
          to={"/about-us"}
          className="rounded-lg bg-cyan-500 p-2.5 text-base font-thin text-white hover:bg-cyan-700"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
