export function ContactUsRoute() {
  return (
    <div id="explore-section" className="space-y-20">
      <header className="contact-us-cover py-20 px-5">
        <div className="mx-auto max-w-5xl items-center">
          <div className="max-w-md space-y-5">
            <h1 className="space-y-2 text-4xl font-bold leading-relaxed">
              Partner with Southeast Asia’s Leading Travel Platform
            </h1>
            <p className="space-y2 text-xl">
              With more than 50 million monthly active users in Asia-Pacific and
              beyond, Traveloka is here to support the growth of your business.
            </p>
            <p className="space-y2 text-xl">
              Choose the partnership that best suit your needs from the various
              options below.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-teal-100 py-10">
        <div className="mx-auto flex max-w-5xl items-start justify-between">
          <aside className="max-w-lg space-y-2">
            <h2 className="leading relaxed max-w-sm text-2xl font-bold">
              Customer Service
            </h2>
            <p className="max-w-sm">
              Jl. BSD Grand Boulevard Jl. BSD Green Office Park No.Kel, Sampora,
              Kec. Cisauk, Kabupaten Tangerang, Banten
            </p>
            <p className="max-w-sm font-bold">+62-812-3456-7890</p>
            <p className="max-w-sm font-bold">travelscope21@gmail.com</p>
          </aside>
          <aside className="mx-w-lg space-y-2">
            <p className="text-2xl font-bold leading-relaxed">
              Office Location
            </p>
            <img
              className="rounded"
              src="/office-location.png"
              alt="office location"
            />
          </aside>
        </div>
      </section>
    </div>
  );
}
