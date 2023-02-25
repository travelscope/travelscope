import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <section className="top-0 left-0 right-0 h-16 bg-white shadow-md z-50 fixed">
      <nav className="flex px-10 justify-center sm:justify-between content-center items-center">
        <Link to={"/"}>
          <img
            src="https://ik.imagekit.io/travelscopee/header-logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676904256956"
            alt="Header Logo"
          />
        </Link>
        <ul className="hidden  sm:flex gap-16">
          <li className="font-bold text-base text-green-800 hover:text-cyan-500 ">
            <Link to={"/"}>HOME</Link>
          </li>
          <li className="font-bold text-base text-green-800 hover:text-cyan-500 ">
            <Link to={"/about-us"}>ABOUT US</Link>
          </li>
          <li className="font-bold text-base text-green-800 hover:text-cyan-500 ">
            <Link to={"/explore"}>EXPLORE</Link>
          </li>
          <li className="font-bold text-base text-green-800 hover:text-cyan-500 ">
            <Link to={"/contact-us"}>CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
