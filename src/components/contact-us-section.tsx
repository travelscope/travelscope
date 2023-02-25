import { Link } from "react-router-dom";

export function ContactUsSection() {
  return (
    <section className="flex flex-col py-10 px-4 md:flex-row md:justify-between md:px-40">
      <div className="mb-8 w-full md:mb-0 md:w-1/2">
        <img src="/footer-logo.png" alt="Footer Logo" className="mb-4" />
        <p className="text-green-800">
          Copyright &copy; 2023{" "}
          <span className="font-semibold">TravelScope</span>. All rights
          reserved.
        </p>
      </div>
      <div className="mb-8 w-full md:mb-0 md:w-1/4">
        <p className="text-xl font-semibold text-green-800">Sitemap</p>
        <ul className="mt-4">
          <li className="text-base text-green-800">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-base text-green-800">
            <Link to={"/explore"}>Explore</Link>
          </li>
          <li className="text-base text-green-800">
            <Link to={"/about-us"}>About Us</Link>
          </li>
          <li className="text-base text-green-800">
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="mb-8 w-full md:mb-0 md:w-1/4">
        <p className="text-xl font-semibold text-green-800">Contact Us</p>
        <ul className="mt-4 space-y-2">
          <li className="text-green-800">
            Jl. BSD Grand Boulevard Jl. BSD Green Office Park No.Kel, Sampora,
            Kec. Cisauk, Kabupaten Tangerang, Banten
          </li>
          <li className="font-semibold text-green-800">+62-812-3456-7890</li>
          <li className="font-semibold text-green-800">
            travelscope21@gmail.com{" "}
          </li>
        </ul>
      </div>
    </section>
  );
}
export function CopyRight() {
  return <p>Copyright 2023 TravelScope. All right reserved</p>;
}
