import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <section className="top-0 left-0 right-0 z-50 h-16 bg-white shadow-md">
      <nav className="flex justify-evenly content-center items-center">
        <Link to={"/"}>
          <img
            src="https://ik.imagekit.io/travelscopee/header-logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676904256956"
            alt="Header Logo"
          />
        </Link>
        <ul className="flex gap-20">
          <li className="font-bold text-base text-green-800 hover:text-cyan-500 ">
            <Link to={"/"}>HOME</Link>
          </li>
          <li className="font-bold text-base text-green-800 hover:text-cyan-500 ">
            <Link to={"/about-us"}>ABOUT US</Link>
          </li>
          <li className="font-bold text-base text-green-800 hover:text-cyan-500 ">
            <Link to={"/explore-section"}>EXPLORE</Link>
          </li>
          <li className="font-bold text-base text-green-800 hover:text-cyan-500 ">
            <Link to={"/contact-us"}></Link> CONTACT US
          </li>
        </ul>
        <button className="p-2.5 bg-cyan-500 text-white border rounded-lg hover:bg-cyan-700">
          SIGN UP
        </button>
      </nav>
    </section>
  );
}
