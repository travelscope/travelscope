export function HomeSection() {
  return (
    <section className="home-page-cover bg-cover py-44 px-5 text-center">
      <div className="mx-auto flex max-w-xl flex-col items-center">
        <h1 className="max-w-lg text-2xl font-semibold text-green-800 sm:text-3xl md:max-w-2xl md:text-4xl">
          <span>Let's go find your favorite tourist spot with </span>
          <strong className="font-bold text-cyan-500">TravelScope</strong>
        </h1>

        <h2 className="mt-5 text-base text-green-800 sm:text-lg md:text-xl">
          We are here to make your nice travel journey
        </h2>

        <form
          method="get"
          action="/search"
          className="mt-8 flex w-full"
          id="search"
        >
          <input
            name="q"
            type="search"
            placeholder="Find your spot"
            className="w-full rounded-l-lg bg-slate-100 py-3 pl-2 focus:outline-none"
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
