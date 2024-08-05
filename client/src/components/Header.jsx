import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import "./styles.css"; // Assuming you have the styles.css file in the same directory

const Header = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <header className="shadow-md sticky z-50 top-0">
      <nav>
        <div className="border-gray-400 w-full h-[68px] flex flex-wrap justify-between items-center font-poppins">
          {/* LOGO */}
          <Link className="inline-flex items-center gap-2 font-poppins font-semibold text-lg hover:text-[#3368CC] p-[1.5rem] text-[#1D2E4D] mr-auto">
            <i className="ri-code-s-slash-line text-lg"></i>LOGO
          </Link>

          <div className="flex flex-wrap justify-between items-center gap-6">
            <i className="ri-search-line font-semibold text-xl"></i>

            <div className="flex">
              <img
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/man-vector-design-template-1ba90da9b45ecf00ceb3b8ae442ad32c_screen.jpg?ts=1601484738"
                alt="profile"
                className="h-10 w-10 rounded-3xl mr-3"
              />
            </div>
          </div>

          {/* MORE & CLOSE */}
          <div
            className="relative w-[32px] h-[32px] text-[1.25rem] mr-2 p-[1.5rem] text-[#1D2E4D] text-xl cursor-pointer"
            onClick={() => setToggleDrawer((prev) => !prev)}
          >
            <i
              className={`ri-menu-line absolute grid place-items-center inset-0 duration-[0.5s] transition-transform font-semibold ${
                toggleDrawer ? "opacity-0 transform rotate-90" : "opacity-100"
              }`}
            ></i>
            <i
              className={`ri-close-line absolute grid place-items-center inset-0 duration-[0.5s] transition-transform font-semibold text-2xl ${
                toggleDrawer ? "opacity-100 transform rotate-90" : "opacity-0"
              }`}
            ></i>
          </div>

          {/* MENU */}
          <div
            className={`nav__menu absolute left-0 w-full h-[calc(100vh-3.5rem)] overflow-auto py-[1.5rem] transition-[top,opacity] duration-[0.4s,0.3s] text-gray-400 -mt-5 ${
              toggleDrawer ? "top-[4.5rem] duration-1000 opacity-100" : "top-[-100vh] opacity-0 duration-1000"
            }`}
          >
            <ul className="list-none bg-[#FCFDFF]">
              <li className="p-[1.25rem] px-[1.5rem] flex justify-between items-center transition-colors duration-300 font-poppins hover:bg-[#F0F5FC] text-[#1D2E4D] font-semibold cursor-pointer">
                <NavLink to="/" className="">
                  Home
                </NavLink>
              </li>

              <li className="p-[1.25rem] px-[1.5rem] flex justify-between items-center transition-colors duration-300 font-poppins hover:bg-[#F0F5FC] text-[#1D2E4D] font-semibold cursor-pointer">
                <NavLink to="/recent" className="">
                  Recent
                </NavLink>
                <i className="ri-arrow-down-s-line"></i>

                <div className="dropdown__container">
                  <div className="dropdown__content">

                    <div className="dropdown__group">
                      <div className="dropdown__icon">
                      <i class="ri-flashlight-line"></i>
                      </div>

                      <span className="dropdown__title">Most viewed pages</span>

                      <ul className="dropdown__list">

                        <li>
                          <a href="#" className="dropdown__link">Page1 - Introduction</a>
                        </li>
                        
                        <li>
                          <a href="#" className="dropdown__link">Page2 - Beginner</a>
                        </li>

                        <li>
                          <a href="#" className="dropdown__link">Page3 - Advanced</a>
                        </li>

                        <li>
                          <a href="#" className="dropdown__link">Page4 - Pro</a>
                        </li>

                      </ul>
                    </div>

                    <div className="dropdown__group">
                      <div className="dropdown__icon">
                      <i class="ri-heart-3-line"></i>
                      </div>

                      <span className="dropdown__title">Popular pages</span>

                      <ul className="dropdown__list">

                        <li>
                          <a href="#" className="dropdown__link">lorem ipsum</a>
                        </li>
                        
                        <li>
                          <a href="#" className="dropdown__link">lorem ipsum</a>
                        </li>

                        <li>
                          <a href="#" className="dropdown__link">lorem ipsum</a>
                        </li>

                      </ul>
                    </div>

                    <div className="dropdown__group">
                      <div className="dropdown__icon">
                      <i class="ri-bookmark-3-line"></i>
                      </div>

                      <span className="dropdown__title">Careers</span>

                      <ul className="dropdown__list">

                        <li>
                          <a href="#" className="dropdown__link">Web Development</a>
                        </li>
                        
                        <li>
                          <a href="#" className="dropdown__link">App Development</a>
                        </li>

                        <li>
                          <a href="#" className="dropdown__link">UI/UX Design</a>
                        </li>

                        <li>
                          <a href="#" className="dropdown__link">Information Security</a>
                        </li>

                      </ul>
                    </div>

                    <div className="dropdown__group">
                      <div className="dropdown__icon">
                      <i class="ri-file-paper-2-line"></i>
                      </div>

                      <span className="dropdown__title">Certifications</span>

                      <ul className="dropdown__list">

                        <li>
                          <a href="#" className="dropdown__link">Google certificates</a>
                        </li>
                        
                        <li>
                          <a href="#" className="dropdown__link">Microsoft certificates</a>
                        </li>

                      </ul>
                    </div>

                  </div>
                </div>

              </li>

              <li className="p-[1.25rem] px-[1.5rem] flex justify-between items-center transition-colors duration-300 font-poppins hover:bg-[#F0F5FC] text-[#1D2E4D] font-semibold cursor-pointer">
                <NavLink to="/spaces" className="">
                  Spaces
                </NavLink>
                <i className="ri-arrow-down-s-line"></i>

                <div className="dropdown__container">
                  <div className="dropdown__content">
                    <div className="dropdown__group">
                      <div className="dropdown__icon">

                      </div>

                      <span className="dropdown__title"></span>

                      <ul className="dropdown__list">

                        <li>
                          <a href="#" className="dropdown__link"></a>
                        </li>
                        
                        <li>
                          <a href="#" className="dropdown__link"></a>
                        </li>

                        <li>
                          <a href="#" className="dropdown__link"></a>
                        </li>

                        <li>
                          <a href="#" className="dropdown__link"></a>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>

              </li>

              <li className="p-[1.25rem] px-[1.5rem] flex justify-between items-center transition-colors duration-300 font-poppins hover:bg-[#F0F5FC] text-[#1D2E4D] font-semibold cursor-pointer">
                <NavLink to="/about" className="">
                  About
                </NavLink>
                <i className="ri-arrow-down-s-line"></i>

                <div className="dropdown__container">
                  <div className="dropdown__content">
                    <div className="dropdown__group">
                      <div className="dropdown__icon">

                      </div>

                      <span className="dropdown__title"></span>

                      <ul className="dropdown__list">

                        <li>
                          <a href="#" className="dropdown__link"></a>
                        </li>
                        
                        <li>
                          <a href="#" className="dropdown__link"></a>
                        </li>

                        <li>
                          <a href="#" className="dropdown__link"></a>
                        </li>

                        <li>
                          <a href="#" className="dropdown__link"></a>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>

              </li>

              <li className="p-[1.25rem] px-[1.5rem] flex justify-between items-center transition-colors duration-300 font-poppins hover:bg-[#F0F5FC] text-[#1D2E4D] font-semibold md:hidden lg:hidden cursor-pointer">
                <NavLink to="/create" className="">
                  Create
                </NavLink>
                <i className="ri-add-line"></i>
              </li>

              <button className="bg-[#1D2E4D] text-[#FCFDFF] px-[1.5rem] hidden md:flex justify-between items-center transition-colors duration-300 font-poppins text-center h-12 rounded-lg">
                <div>
                  <FontAwesomeIcon icon={faPlus} size="s" />
                  <span className="ml-[6px]">Create</span>
                </div>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;


