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
        <p className="font-medium text-xl text-green-800 mt-8">
          Lorem ipsum dolor sit amet consectetur. Sed hac lorem nisl at. Nullam
          sed at odio praesent. Fermentum elementum facilisis ante nam fermentum
          pulvinar. Quis at amet viverra tincidunt id semper viverra quisque
          gravida.
        </p>
        <p className="font-medium text-xl text-green-800 mt-7">
          Lorem ipsum dolor sit amet consectetur. Sed hac lorem nisl at. Nullam
          sed at odio praesent. Fermentum elementum facilisis ante nam fermentum
          pulvinar. Quis at amet viverra tincidunt id semper viverra quisque
          gravida.
        </p>
        <button className="bg-cyan-500 p-2.5 text-white mt-4 rounded-lg hover:bg-cyan-700">
          Read More
        </button>
      </div>
    </section>
  );
}
