export function AboutUs() {
  return (
    <section className="flex px-40 py-16 bg-teal-50">
      <img
        src="https://ik.imagekit.io/travelscopee/about-us-img.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676904256683"
        alt="About Us"
      />
      <div className="flex-col justify-start pl-2">
        <p className="font-semibold text-3xl text-green-800">About Us</p>
        <p className="font-bold text-4xl text-cyan-500">
          Most popular travel list in catamyst batch 2
        </p>
        <p className="font-medium text-xl text-green-800 mt-8 ">
          We are a travel platform that aims to provide the best tourist spots
          for travelers in Indonesia. We provide a list of the best prices for
          travel so that you can adjust to the budget you have..
        </p>
        <p className="font-medium text-xl text-green-800 mt-8 ">
          We are committed to providing a high quality service and an
          unforgettable experience for each of our customers.
        </p>
        <button className="bg-cyan-500 p-2.5 text-white mt-4 rounded-lg hover:bg-cyan-700">
          Read More
        </button>
      </div>
    </section>
  );
}
