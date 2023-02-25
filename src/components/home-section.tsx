export function HomeSection() {
  return (
    <section className="bg-[url('https://ik.imagekit.io/travelscopee/home-page-background.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676903839857')] bg-cover py-44 px-5 text-center">
      <div className="flex flex-col items-center">
        <p className="max-w-lg text-xl font-semibold text-green-800 sm:text-2xl md:text-3xl">
          <span>Let's go find your favorite tourist spot with </span>
          <strong className="font-bold text-cyan-500 ">TravelScope</strong>
        </p>
        <p className="mt-5 text-base text-green-800 sm:text-lg md:text-xl">
          We are here to make your nice travel journey
        </p>
        <form method="get" action="/search" className="mt-8 flex" id="search">
          <input
            name="q"
            type="search"
            placeholder="Find your spot"
            className="w-60 rounded-l-lg bg-slate-100 py-3 pl-2 text-xs focus:outline-none"
          />{" "}
          <button
            type="submit"
            className="rounded-r-lg bg-cyan-500  py-2 px-4 text-sm font-thin text-white  hover:bg-cyan-700"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
