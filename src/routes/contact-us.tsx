export function ContactUsRoute() {
  return (
    <div id="explore-section" className="space-y-20">
      <header className="contact-us-cover py-20 px-5">
        <div className="mx-auto max-w-5xl items-center space-y-5">
          <h1 className="max-w-sm space-y-2 text-4xl font-bold leading-relaxed">
            Partner with Southeast Asia’s Leading Travel Platform
          </h1>
          <p className="space-y2 max-w-sm text-xl">
            With more than 50 million monthly active users in Asia-Pacific and
            beyond, Traveloka is here to support the growth of your business.
          </p>
          <p className="space-y2 max-w-sm text-xl">
            Choose the partnership that best suit your needs from the various
            options below.
          </p>
        </div>
      </header>

      <section className="mx-auto flex max-w-full items-center justify-between bg-teal-100 py-2.5">
        <div className="max-w-lg space-y-4">
          <h2 className="leading realxed max-w-sm pl-14 font-bold">
            Cuntomer Cervice
          </h2>
          <p className="max-w-sm pl-14">
            Jl. BSD Grand Boulevard Jl. BSD Green Office Park No.Kel, Sampora,
            Kec. Cisauk, Kabupaten Tangerang, Banten
          </p>
          <p className="max-w-sm pl-14">0812-6666-6666</p>
          <p className="max-w-sm pl-14">travelscope21@gmail.com</p>
        </div>
        <div className="pr-14">
          <p className="space-y-4 text-lg font-bold leading-relaxed">
            Office Location
          </p>
          <img src="/office-location.png" alt="office location" />
        </div>
      </section>
    </div>
  );
}
