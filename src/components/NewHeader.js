import React, { useState, useEffect } from "react";
// import components
import Nav from "../components/Nav";
import Socials from "../components/Socials";
// import logo
import cherrychooklogo from "../assets/img/header/cherrychooklogo.png";
import cherrychooklogowhite from "../assets/img/header/cherrychooklogowhite.png";
import cherrylogosmall from "../assets/img/header/cherrylogosmall.png";
// import motion
import { motion } from "framer-motion";
// import variants
import { staggerContainer, fadeIn } from "../variants";
import { NavLink } from "react-router-dom";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
// header variants
const headerVariants = {
  hidden: {
    padding: "84px 0 84px 0",
    background: "none",
  },
  show: {
    padding: "14px 0 14px 0",
    background: "rgba(0,0,0,0.92)",
    transition: {
      type: "spring",
    },
  },
};

export const navVariants = {
  hidden: {
    clipPath: "circle(5.8% at 50% 0)",
    opacity: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    clipPath: "circle(130% at 50% 0)",
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

const NewHeader = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  // nav state
  const [nav, setNav] = useState(false);
  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  //new nav
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="sticky  top-0 z-50  bg-red-700 h-20 ">
        <div className="max-w-7xl mx-auto ">
          <div className="flex mx-auto justify-between align-middle w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16">
              {/* logo */}

              <motion.div
                variants={fadeIn("down", "tween", 1.2, 1.4)}
                className="order-1 lg:order-none lg:ml-[11rem]"
              >
                <NavLink to="/">
                  {/* if header is active make logo 90 x 90 px else 107 x 107px */}
                  <img
                    className={`${
                      isActive ? "w-[80px] h-[80px]" : "w-[90px] h-[90px]"
                    }`}
                    src={cherrychooklogowhite}
                    alt=""
                  />
                </NavLink>
              </motion.div>
              {/* primary */}

              <div className="hidden lg:flex gap-10 ">
                <NavLink
                  className={(navlInk) =>
                    navlInk.isActive
                      ? "text-xl text-dark capitalize font-primary italic hover:text-dark transition-all duration-300"
                      : "text-xl  text-white capitalize font-primary  hover:text-dark transition-all duration-300"
                  }
                  to="/"
                >
                  home
                </NavLink>
                <button className="text-xl text-white rounded capitalize font-primary italic hover:text-dark transition-all duration-300">
                  Order Online
                </button>
                <NavLink
                  className={(navlInk) =>
                    navlInk.isActive
                      ? "text-xl  text-dark capitalize font-primary italic hover:text-dark transition-all duration-300"
                      : "text-xl  text-white capitalize font-primary  hover:text-dark transition-all duration-300"
                  }
                  to="/contact"
                >
                  contact us
                </NavLink>

                <span class="group relative inline-block">
                  <button class="inline-flex items-center rounded  font-semibold  text-white">
                    Manu
                  </button>
                  <ul class="absolute hidden p-1 w-52 bg-red-700 group-hover:block scale-100 transition duration-300 z-50  shadow-xl shadow-gray-500">
                    <li>
                      <NavLink
                        className={(navlInk) =>
                          navlInk.isActive
                            ? "text-xl text-dark capitalize font-primary hover:text-white transition-all duration-300"
                            : "text-xl capitalize font-primary text-white hover:text-dark transition-all duration-300"
                        }
                        to="/menu"
                      >
                        store menu
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={(navlInk) =>
                          navlInk.isActive
                            ? "text-xl text-dark capitalize font-primary hover:text-white transition-all duration-300"
                            : "text-xl capitalize font-primary text-white  hover:text-dark transition-all duration-300"
                        }
                        to="/catering-menu"
                      >
                        catering menu
                      </NavLink>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <NavLink
                className={(navlInk) =>
                  navlInk.isActive
                    ? "text-xl text-red-700 capitalize font-primary italic hover:text-dark transition-all duration-300"
                    : "text-xl  text-black capitalize font-primary  hover:text-dark transition-all duration-300"
                }
                to="/"
              >
                home
              </NavLink>

              <NavLink
                className={(navlInk) =>
                  navlInk.isActive
                    ? "text-xl text-red-700 capitalize font-primary italic hover:text-dark transition-all duration-300"
                    : "text-xl  text-black capitalize font-primary  hover:text-dark transition-all duration-300"
                }
                to="/contact"
              >
                contact us
              </NavLink>

              <NavLink
                className={(navlInk) =>
                  navlInk.isActive
                    ? "text-xl text-red-700 capitalize font-primary hover:text-dark transition-all duration-300"
                    : "text-xl capitalize font-primary  hover:text-dark transition-all duration-300"
                }
                to="/menu"
              >
                menu
              </NavLink>
              {/* <li class="border-b-2 border-white hover:bg-red-400 hover:text-white">
                <a href="#" class="block pl-11">
                  Services <i class="fa-solid fa-chevron-down fa-2xs pt-4"></i>
                </a>

                <ul class="bg-white text-gray-800 w-full">
                  <li class="text-sm leading-8 font-normal hover:bg-slate-200">
                    <a class="block pl-16" href="#">
                      Webdesign
                    </a>
                  </li>
                  <li class="text-sm leading-8 font-normal hover:bg-slate-200">
                    <a class="block pl-16" href="#">
                      Digital marketing
                    </a>
                  </li>
                  <li class="text-sm leading-8 font-normal hover:bg-slate-200">
                    <a class="block pl-16" href="#">
                      SEO
                    </a>
                  </li>
                  <li class="text-sm leading-8 font-normal hover:bg-slate-200">
                    <a class="block pl-16" href="#">
                      Ad campaigns
                    </a>
                  </li>
                  <li class="text-sm leading-8 font-normal hover:bg-slate-200">
                    <a class="block pl-16" href="#">
                      UX Design
                    </a>
                  </li>
                </ul>
              </li> */}

              <NavLink
                className={(navlInk) =>
                  navlInk.isActive
                    ? "text-xl text-red-700 capitalize font-primary hover:text-dark transition-all duration-300"
                    : "text-xl capitalize font-primary  hover:text-dark transition-all duration-300"
                }
                to="/catering-menu"
              >
                catering menu
              </NavLink>
              <a
                className="text-xl text-black rounded capitalize font-primary italic hover:text-dark transition-all duration-300"
                href="/#"
              >
                Order Online
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NewHeader;
