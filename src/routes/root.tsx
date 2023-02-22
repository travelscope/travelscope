import { HomeSection } from "../components/home-section";
import { Navbar } from "../components/navbar";
import ExploreSection from "../components/explore-section";
import { AboutUs } from "../components/about-us";
import { ContactUsSection } from "../components/contact-us-section";
import { CopyRight } from "../components/copyright";

export default function RootRoute() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutUs />
      <ExploreSection />
      <ContactUsSection />
      <CopyRight />
    </>
  );
}
