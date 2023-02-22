import { Navbar } from "./components/navbar";
import { HomeSection } from "./components/home-section";
import { AboutUs } from "./components/about-us";
import { ExploreSection } from "./components/explore-section";
import { TryApi } from "./components/try-api";

export function App() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <TryApi />
      <AboutUs />
      <ExploreSection />
    </div>
  );
}
