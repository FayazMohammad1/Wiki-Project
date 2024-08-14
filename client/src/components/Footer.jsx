import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#17243c] border-y mt-96 xl:mt-1 w-full ">
        <div className="mx-auto my-12 w-full max-w-screen-xl py-6 lg:py-8 ml-4 lg:ml-28 2xl:ml-auto 2xl:mr-auto">
          {/* <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" /> */}
          <div className="md:flex md:justify-between xl:mr-10 md:ml-4">
            {/* Logo */}
            <div className="mb-6 md:mb-0 md:mr-14">
              <Link className="inline-flex items-center gap-2 font-poppins font-semibold text-2xl hover:text-[#3368CC] transition-colors duration-300 mr-8 text-white">
                <i className="ri-code-s-slash-line text-lg "></i>LOGO
              </Link>
              <div className="mt-3 mb-6">
                © 2024_
                <a
                  href="https://fayazmohammad1.github.io/"
                  className="hover:underline"
                >
                  fayazmohammad
                </a>
                .<br />
                All Rights Reserved.
              </div>

              <div className="flex justify-start gap-2 sm:mt-0">
                <Link
                  to="#"
                  className="text-gray-500 hover:text-white hover:-translate-y-[6px] hover:ease-in-out duration-500"
                >
                  <i class="ri-facebook-circle-fill text-2xl"></i>
                </Link>
                <Link
                  to="#"
                  className="text-gray-500 hover:text-white hover:-translate-y-[6px] hover:ease-in-out duration-500"
                >
                  <i class="ri-twitter-fill text-2xl"></i>
                </Link>
                <Link
                  to="#"
                  className="text-gray-500 hover:text-white hover:-translate-y-[6px] hover:ease-in-out duration-500"
                >
                  <i class="ri-dribbble-line text-2xl"></i>
                </Link>
                <Link
                  to="#"
                  className="text-gray-500 hover:text-white hover:-translate-y-[6px] hover:ease-in-out duration-500"
                >
                  <i class="ri-instagram-line text-2xl"></i>
                </Link>
                <Link
                  to="#"
                  className="text-gray-500 hover:text-white hover:-translate-y-[6px] hover:ease-in-out duration-500"
                >
                  <i class="ri-youtube-fill text-2xl"></i>
                </Link>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3">
              {/* Get in Touch */}
              <div className="mr-10">
                <h2 className="mb-3 text-md font-semibold text-white uppercase">
                  Get in Touch
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <p>
                      SRM University, A.P., <br /> Mangalagiri, Andhra Pradesh.
                    </p>
                  </li>
                  <li className="mb-4">
                    <a
                      href="mailto:talkwithfayaz@gmail.com"
                      className="hover:text-[#3368CC] transition-colors duration-300"
                    >
                      talkwithfayaz@gmail.com
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="tel:+91-7286966XXX"
                      className="hover:text-[#3368CC] transition-colors duration-300"
                    >
                      +91-7286966XXX
                    </a>
                  </li>
                </ul>
              </div>
              {/* Learn More */}
              <div className="ml-8">
                <h2 className="mb-3 text-md font-semibold text-white uppercase">
                  Learn More
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className=" mb-4 hover:text-white hover:translate-x-1 hover:ease-in-out duration-500 inline-flex">
                    <Link to="/">About Us</Link>
                  </li>
                  <br />
                  <li className=" mb-4 hover:text-white hover:translate-x-1 hover:ease-in-out duration-500 inline-flex">
                    <Link to="/">Our Story</Link>
                  </li>
                  <br />
                  <li className=" mb-4 hover:text-white hover:translate-x-1 hover:ease-in-out duration-500 inline-flex">
                    <Link to="/">Projects</Link>
                  </li>
                  <br />
                  <li className=" mb-4 hover:text-white hover:translate-x-1 hover:ease-in-out duration-500 inline-flex">
                    <Link to="/">Terms of Use</Link>
                  </li>
                  <br />
                  <li className=" mb-4 hover:text-white hover:translate-x-1 hover:ease-in-out duration-500 inline-flex">
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              {/* Newsletter */}
              <div className="md:mr-10"> 
                <h2 className="mb-3 text-md font-semibold text-white uppercase">
                  Our Newsletter
                </h2>
                <ul className="text-gray-500 font-medium">
                  <p>
                    Subscribe to our newsletter to get our news & deals
                    delivered to you.
                  </p>
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="mt-3 mb-2 p-3 md:w-36 xl:w-48 font-normal rounded text-white bg-[#1D2E4D] opacity-80"
                  />
                  <button className="pl-5 pr-5 p-3 font-normal bg-white text-[#1D2E4D] rounded hover:bg-[#3368CC] hover:text-white transition-colors duration-300">
                    Join
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
