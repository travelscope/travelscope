export function HomeSection() {
  return (
    <section className="bg-[url('src/images/home-page-background.png')] bg-cover">
      <div className="flex flex-col items-center justify-center">
        <p className="font-semibold text-4xl text-green-800 mt-40">
          Let`s go find your favorite tourist spot with
          <strong className="text-cyan-500 font-bold "> TravelScope</strong>
        </p>
        <p className="text-xl text-green-800 mt-5">
          We are here to make your nice travel journey
        </p>
        <div className="flex mt-8 mb-64">
          <input
            type="search"
            placeholder="Find your spot"
            className="pl-2.5 py-5 pr-80 bg-slate-100 rounded-l-lg focus:outline-none"
          />{" "}
          <button className="py-2 px-7  bg-cyan-500 rounded-r-lg font-semibold text-white text-base  ">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
