import React from "react";
import Opps from "../assets/images/404.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* <Navbar/> */}
      <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-10 text-gray-800">Oops!</h1> 
      <img src={Opps} alt="404" className="w-64 md:w-94 " />
      <div>

        <p className="text-gray-600  mt-2 mb-2">
          We can't seem to find the page you looking for
        </p>
      </div>
      <div>
        <Link to="/">
          <button className="bg-gray-700 text-white px-4 py-2 hover:bg-black rounded-full text-sm font-bold cursor-pointer">
            Go To HomePage
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
