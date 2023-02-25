import { Outlet, ScrollRestoration } from "react-router-dom";

import { Navbar } from "../components/navbar";
import { ContactUsSection } from "../components/contact-us-section";

export function RootRoute() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className=" mt-14 flex-[1]">
        <Outlet />
      </main>

      <footer>
        <ContactUsSection />
      </footer>

      <ScrollRestoration />
    </div>
  );
}
