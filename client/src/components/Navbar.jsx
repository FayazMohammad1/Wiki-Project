import React, { useState, useEffect } from "react";
import "../assets/css/styles.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { UserAuth } from "../contexts/AuthContextFirebase";
import { auth } from "../firebase";
// import  { Redirect } from 'react-router-dom'
 

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showSearch, setShowSearch] = useState(false); // State to manage search bar visibility
  const [showProfileMenu, setShowProfileMenu] = useState(false); // State to manage profile menu visibility
  const { userData, logout } = useAuth();
  const { userData1, logOut } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    if(auth){
      logOut(auth);
    }
    console.log("in normal");
    
    await logout();
  }

  // const handleGoogleSignOut = () => {

  //   return logOut(auth);

  // };


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1118) {
        setShowMenu(false);
        setActiveDropdown(null);
        setDropdownOpen(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = (index) => {
    if (dropdownOpen === index) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(index);
    }
  };

  const handleMouseEnter = (index) => {
    if (dropdownOpen === null) {
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    if (dropdownOpen === null) {
      setActiveDropdown(null);
    }
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch); // Toggle search bar visibility
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu); // Toggle profile menu visibility
  };

  return (
    <header className="header">
      <nav className="nav container h-[68px] flex justify-around items-center">
        <Link to='/home' className="inline-flex items-center font-poppins gap-2 font-semibold text-2xl hover:text-[#3368CC] mr-8 text-[#1D2E4D]">
          <i className="ri-code-s-slash-line text-lg"></i>LOGO
        </Link>

        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li>
              <NavLink
                to="/all-questions"
                className={({ isActive }) => `nav__link ${isActive ? "text-[#3368CC]" : ""}`}
                activeClassName="active-link"
              >
                Questions
              </NavLink>
            </li>

            <li className="dropdown__item">
              <div
                className="nav__link dropdown__button"
                onClick={() => toggleDropdown(1)}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                Discover{" "}
                <i
                  className={`ri-arrow-down-s-line dropdown__arrow ${
                    activeDropdown === 1 || dropdownOpen === 1 ? "rotate" : ""
                  }`}
                ></i>
              </div>

              <div
                className={`dropdown__container ${
                  activeDropdown === 1 || dropdownOpen === 1
                    ? "show-dropdown"
                    : ""
                }`}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
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

            <li className="dropdown__item">
              <div
                className="nav__link dropdown__button"
                onClick={() => toggleDropdown(2)}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                Resources{" "}
                <i
                  className={`ri-arrow-down-s-line dropdown__arrow ${
                    activeDropdown === 2 || dropdownOpen === 2 ? "rotate" : ""
                  }`}
                ></i>
              </div>

              <div
                className={`dropdown__container ${
                  activeDropdown === 2 || dropdownOpen === 2
                    ? "show-dropdown"
                    : ""
                }`}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="dropdown__content">
                  {/* Add your dropdown groups here */}
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

            <li>
              <NavLink
                to="/pricing"
                className="nav__link"
                activeClassName="active-link"
              >
                Pricing
              </NavLink>
            </li>

            <li className="dropdown__item">
              <div
                className="nav__link dropdown__button"
                onClick={() => toggleDropdown(3)}
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
              >
                Company{" "}
                <i
                  className={`ri-arrow-down-s-line dropdown__arrow ${
                    activeDropdown === 3 || dropdownOpen === 3 ? "rotate" : ""
                  }`}
                ></i>
              </div>

              <div
                className={`dropdown__container ${
                  activeDropdown === 3 || dropdownOpen === 3
                    ? "show-dropdown"
                    : ""
                }`}
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="dropdown__content">
                  {/* Add your dropdown groups here */}
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
                </div>
              </div>
            </li>
          </ul>
        </div>

        <Link to='/create-article'>
        <button className="bg-[#1D2E4D] text-[#FCFDFF] px-[1.5rem] hidden md:flex justify-between items-center transition-colors duration-300 font-poppins text-center h-10 rounded-lg hover:bg-[#3368CC]">
          <div>
            <i className="ri-add-line"></i>
            <span className="ml-[6px]">Create</span>
          </div>
        </button>
        </Link>

        <div className="flex items-center gap-6">
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i
              className={`ri-menu-line nav__toggle-menu ${
                showMenu ? "show-icon" : ""
              }`}
            ></i>
            <i
              className={`ri-close-line nav__toggle-close ${
                showMenu ? "" : "show-icon"
              }`}
            ></i>
          </div>

          <div className="hidden md:flex items-center gap-6 ">
            <i
              className="ri-search-line font-semibold text-xl cursor-pointer"
              onClick={toggleSearch}
            ></i>
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/man-vector-design-template-1ba90da9b45ecf00ceb3b8ae442ad32c_screen.jpg?ts=1601484738"
              alt="profile"
              className="h-10 w-10 rounded-3xl cursor-pointer"
              onClick={toggleProfileMenu}
            />
          </div>
        </div>

        {showSearch && (
          <div
            className={`search-bar ${
              showSearch ? "show" : ""
            } absolute top-16 right-10 bg-white p-4 shadow-lg rounded-lg transition duration-1000`}
          >
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 p-2 rounded"
            />
            <button className="ml-2 bg-[#1D2E4D] text-white p-2 rounded hover:bg-[#3368CC]">
              Search
            </button>
          </div>
        )}

        {showProfileMenu && (
          <div className="profile-menu absolute top-16 right-10 bg-white p-4 shadow-lg rounded-lg">
            <ul className="profile-menu__list">
              <li className="profile-menu__item mb-2">
                <a href="#" className="profile-menu__link hover:text-[#3368CC]">
                  {/* Your Profile */}
                  {userData.name}
                  {userData.displayName}
                </a>
              </li>
              <li className="profile-menu__item mb-2">
                <a href="#" className="profile-menu__link hover:text-[#3368CC]">
                  Settings
                </a>
              </li>
              <button onClick={handleLogout}>
              <li className="profile-menu__item mb-2">
                <Link to ='/signin' className="profile-menu__link hover:text-[#3368CC]">Sign Out</Link>
              </li>
              </button>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
