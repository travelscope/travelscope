import { Link } from "react-router-dom";

export function ContactUsSection() {
  return (
    <section className="flex flex-wrap py-10 px-40 justify-between bg-teal-100">
      <div>
        <img src="/footer-logo.png" alt="Footer Logo" />
        <p className="text-base text-green-800">
          Send your email to us for more information.
        </p>
        <form className="flex mt-2" id="send">
          <input
            type="text"
            placeholder="Type your email"
            className="pl-2.5 py-5 pr-24 bg-slate-100 rounded-l-lg focus:outline-none"
          />{" "}
          <button className="py-2 px-7  bg-cyan-500 rounded-r-lg font-semibold text-white text-base  hover:bg-cyan-700">
            Send
          </button>
        </form>
      </div>
      <div>
        <p className="font-semibold text-green-800 text-xl">Quick Links</p>
        <ul className="mt-4">
          <li className="text-base text-green-800">
            <Link to={"/"}>HOME</Link>
          </li>
          <li className="text-base text-green-800">
            <Link to={"/explore-section"}>EXPLORE</Link>
          </li>
          <li className="text-base text-green-800">
            <Link to={"/about-us"}>ABOUT US</Link>
          </li>
          <li className="text-base text-green-800">
            <Link to={"/contact-us-section"}>CONTACT US</Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="font-semibold text-green-800 text-xl">Contact Us</p>
        <ul className="mt-4">
          <li className="text-base text-green-800">
            Jl.anin aja dulu no. 666 , Devil City.
          </li>
          <li className="text-base text-green-800">0812-6666-6666 </li>
          <li className="text-base text-green-800">ucupsiucok28@gmail.com </li>
        </ul>
      </div>
    </section>
  );
}
export function CopyRight() {
  return <p>Copyright 2023 TravelScope. All right reserved</p>;
}
