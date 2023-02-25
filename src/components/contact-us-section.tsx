import { Link } from "react-router-dom";

export function ContactUsSection() {
  return (
    <section className="flex flex-col md:flex-row py-10 px-4 md:px-40 md:justify-between">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img src="/footer-logo.png" alt="Footer Logo" className="mb-4" />
        <p className="text-green-800">
          Copyright 2023 <span className="font-semibold">TravelScope</span>. All
          right reserved
        </p>
      </div>
      <div className="w-full md:w-1/4 mb-8 md:mb-0">
        <p className="font-semibold text-green-800 text-xl">Quick Links</p>
        <ul className="mt-4">
          <li className="text-base text-green-800">
            <Link to={"/"}>HOME</Link>
          </li>
          <li className="text-base text-green-800">
            <Link to={"/explore"}>EXPLORE</Link>
          </li>
          <li className="text-base text-green-800">
            <Link to={"/about-us"}>ABOUT US</Link>
          </li>
          <li className="text-base text-green-800">
            <Link to={"/contact-us"}>CONTACT US</Link>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 mb-8 md:mb-0">
        <p className="font-semibold text-green-800 text-xl">Contact Us</p>
        <ul className="mt-4">
          <li className="text-green-800">
            Jl. BSD Grand Boulevard Jl. BSD Green Office Park No.Kel, Sampora,
            Kec. Cisauk, Kabupaten Tangerang, Banten
          </li>
          <li className="font-semibold text-green-800">0812-6666-6666 </li>
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
