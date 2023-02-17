import { Navbar } from "./components/navbar";
import { HomeSection } from "./components/home-section";
import { AboutUs } from "./components/about-us";

export function App() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <AboutUs />
    </div>
  );
}
