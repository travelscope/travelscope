export function HomeSection() {
  return (
    <section className="bg-[url('https://ik.imagekit.io/travelscopee/home-page-background.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676903839857')] bg-cover py-44 px-5 text-center">
      <div className="flex flex-col items-center">
        <p className="font-semibold text-xl text-green-800 sm:text-2xl md:text-3xl">
          Let`s go find your favorite tourist spot with
          <strong className="text-cyan-500 font-bold "> TravelScope</strong>
        </p>
        <p className="text-base text-green-800 mt-5 md:text-xl sm:text-lg">
          We are here to make your nice travel journey
        </p>
        <form method="get" action="/search" className="flex mt-8" id="search">
          <input
            name="q"
            type="search"
            placeholder="Find your spot"
            className="pl-2 py-3 text-xs w-60 bg-slate-100 rounded-l-lg focus:outline-none"
          />{" "}
          <button
            type="submit"
            className="py-2 px-4  bg-cyan-500 rounded-r-lg font-thin text-white text-sm  hover:bg-cyan-700"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
