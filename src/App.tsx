import { Navbar } from "./components/navbar";
import { HomeSection } from "./components/home-section";
import { AboutUs } from "./components/about-us";
import ExploreSection from "./components/explore-section";

export function App() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <AboutUs />
      <ExploreSection />
    </div>
  );
}
