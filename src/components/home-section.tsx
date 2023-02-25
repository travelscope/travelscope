export function HomeSection() {
  return (
    <section className="bg-[url('https://ik.imagekit.io/travelscopee/home-page-background.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676903839857')] bg-cover mt-16">
      <div className="flex flex-col items-center justify-center">
        <p className="font-semibold text-4xl text-green-800 mt-40">
          Let`s go find your favorite tourist spot with
          <strong className="text-cyan-500 font-bold "> TravelScope</strong>
        </p>
        <p className="text-xl text-green-800 mt-5">
          We are here to make your nice travel journey
        </p>
        <form
          method="get"
          action="/search"
          className="flex mt-8 mb-64"
          id="search"
        >
          <input
            name="q"
            type="search"
            placeholder="Find your spot"
            className="pl-2.5 py-5 bg-slate-100 rounded-l-lg focus:outline-none"
          />{" "}
          <button
            type="submit"
            className="py-2 px-7  bg-cyan-500 rounded-r-lg font-semibold text-white text-base  hover:bg-cyan-700"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
