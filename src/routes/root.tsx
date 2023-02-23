import { Navbar } from "../components/navbar";
import { CopyRight } from "../components/copyright";
import { Outlet } from "react-router-dom";
import { ContactUsSection } from "../components/contact-us-section";

export function RootRoute() {
  return (
    <>
      <Navbar />

      <Outlet />

      <ContactUsSection />

      <CopyRight />
    </>
  );
}
