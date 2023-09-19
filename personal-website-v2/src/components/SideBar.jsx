import LogoLHS from "/images/lhs_logo.png";
import LogoSubtitle from "/images/logo_luke.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBrain,
  faWindowMaximize,
  faCloud,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import { Transition } from "@tailwindui/react";

function SideBar() {
  // Home
  const [hoveredHome, setHoveredHome] = useState(false);
  const handleMouseEnterHome = () => {
    setAllFalse();
    setHoveredHome(true);
  };
  const handleMouseLeaveHome = () => {
    setHoveredHome(false);
  };

  //   Web Dev
  const [hoveredWebDev, setHoveredWebDev] = useState(false);

  const handleMouseEnterWebDev = () => {
    setAllFalse();
    setHoveredWebDev(true);
  };

  const handleMouseLeaveWebDev = () => {
    setHoveredWebDev(false);
  };

  // Java Dev
  const [hoveredJavaDev, setHoveredJavaDev] = useState(false);

  const handleMouseEnterJavaDev = () => {
    setAllFalse();
    setHoveredJavaDev(true);
  };

  const handleMouseLeaveJavaDev = () => {
    setHoveredJavaDev(false);
  };

  // Machine Learning
  const [hoveredMachineLearning, setHoveredMachineLearning] = useState(false);

  const handleMouseEnterMachineLearning = () => {
    setAllFalse();
    setHoveredMachineLearning(true);
  };

  const handleMouseLeaveMachineLearning = () => {
    setHoveredMachineLearning(false);
  };

  // Data Analysis
  const [hoveredDataAnalysis, setHoveredDataAnalysis] = useState(false);

  const handleMouseEnterDataAnalysis = () => {
    setAllFalse();
    setHoveredDataAnalysis(true);
  };

  const handleMouseLeaveDataAnalysis = () => {
    setHoveredDataAnalysis(false);
  };

  const setAllFalse = () => {
    setHoveredHome(false);
    setHoveredWebDev(false);
    setHoveredJavaDev(false);
    setHoveredMachineLearning(false);
    setHoveredDataAnalysis(false);
  };

  return (
    <>
      <div
        className="absolute h-screen shadow-xl bg-[#181818]
      w-[8rem] sm:w-[9rem] md:w-[10rem] lg:w-[11rem] xl:w-[12rem]"
      >
        <div className="h-[15vh] pt-5">
          <Link to="/">
            <img
              src={LogoLHS}
              alt="logo"
              className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] xl:w-[140px] mx-auto"
            />
            <img
              src={LogoSubtitle}
              alt="logo"
              className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] xl:w-[160px] mx-auto pt-2"
            />
          </Link>
        </div>

        <div className="h-[70vh] flex flex-col items-center justify-center">
          <nav>
            <NavLink
              to="/"
              end
              className={(navData) =>
                navData.isActive ? "text-[#ffc102]" : "text-[#7f7f7f]"
              }
              onMouseEnter={handleMouseEnterHome}
              onMouseLeave={handleMouseLeaveHome}
            >
              {hoveredHome ? (
                <div
                  className="flex h-[14px] sm:h-[18px] md:h-[22px] lg:h-[26px] xl:h-[30px]
                mb-5 xl:mb-8
                 text-[#ffc102] mx-auto"
                >
                  <h1 className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    Home
                  </h1>
                </div>
              ) : (
                <FontAwesomeIcon
                  icon={faHome}
                  className="flex h-[14px] sm:h-[18px] md:h-[22px] lg:h-[26px] xl:h-[30px]
                mb-5 xl:mb-8
                 hover:text-[#ffc102] focus:text-[#ffc102] mx-auto"
                />
              )}
            </NavLink>

            <NavLink
              to="/web-dev"
              end
              className={(navData) =>
                navData.isActive ? "text-[#ffc102]" : "text-[#7f7f7f]"
              }
              onMouseEnter={handleMouseEnterWebDev}
              onMouseLeave={handleMouseLeaveWebDev}
            >
              {hoveredWebDev ? (
                <div
                  className="flex h-[14px] sm:h-[18px] md:h-[22px] lg:h-[26px] xl:h-[30px]
                mb-5 xl:mb-8
                 text-[#ffc102] mx-auto"
                >
                  <h1 className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    Web Dev
                  </h1>
                </div>
              ) : (
                <FontAwesomeIcon
                  icon={faWindowMaximize}
                  className="flex h-[14px] sm:h-[18px] md:h-[22px] lg:h-[26px] xl:h-[30px]
                mb-5 xl:mb-8
                 hover:text-[#ffc102] focus:text-[#ffc102] mx-auto"
                />
              )}
            </NavLink>

            <NavLink
              to="/java-dev"
              end
              className={(navData) =>
                navData.isActive ? "text-[#ffc102]" : "text-[#7f7f7f]"
              }
              onMouseEnter={handleMouseEnterJavaDev}
              onMouseLeave={handleMouseLeaveJavaDev}
            >
              {hoveredJavaDev ? (
                <div
                  className="flex h-[14px] sm:h-[18px] md:h-[22px] lg:h-[26px] xl:h-[30px]
                mb-5 xl:mb-8
                 text-[#ffc102] mx-auto"
                >
                  <h1 className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    Java Dev
                  </h1>
                </div>
              ) : (
                <FontAwesomeIcon
                  icon={faCloud}
                  className="flex h-[14px] sm:h-[18px] md:h-[22px] lg:h-[26px] xl:h-[30px]
                mb-5 xl:mb-8 
                 hover:text-[#ffc102] focus:text-[#ffc102] mx-auto"
                />
              )}
            </NavLink>

            <NavLink
              to="/machine-learning"
              end
              className={(navData) =>
                navData.isActive ? "text-[#ffc102]" : "text-[#7f7f7f]"
              }
              onMouseEnter={handleMouseEnterMachineLearning}
              onMouseLeave={handleMouseLeaveMachineLearning}
            >
              {hoveredMachineLearning ? (
                <div
                  className="flex h-[14px] sm:h-[18px] md:h-[22px] lg:h-[26px] xl:h-[30px]
                mb-5 xl:mb-8
                 text-[#ffc102] mx-auto"
                >
                  <h1 className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    Machine Learning
                  </h1>
                </div>
              ) : (
                <FontAwesomeIcon
                  icon={faBrain}
                  className="flex h-[14px] sm:h-[18px] md:h-[22px] lg:h-[26px] xl:h-[30px]
                mb-5 xl:mb-8 
                  hover:text-[#ffc102] focus:text-[#ffc102] mx-auto"
                />
              )}
            </NavLink>

            <NavLink
              to="/data-analysis"
              end
              className={(navData) =>
                navData.isActive ? "text-[#ffc102]" : "text-[#7f7f7f]"
              }
              onMouseEnter={handleMouseEnterDataAnalysis}
              onMouseLeave={handleMouseLeaveDataAnalysis}
            >
              {hoveredDataAnalysis ? (
                <div
                  className="flex h-[14px] sm:h-[18px] md:h-[22px] lg:h-[26px] xl:h-[30px]
                mb-5 xl:mb-8
                 text-[#ffc102] mx-auto"
                >
                  <h1 className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    Data Analysis
                  </h1>
                </div>
              ) : (
                <FontAwesomeIcon
                  icon={faDatabase}
                  className="flex h-[14px] sm:h-[18px] md:h-[22px] lg:h-[26px] xl:h-[30px]
                mb-5 xl:mb-8 
                hover:text-[#ffc102] focus:text-[#ffc102] mx-auto"
                />
              )}
            </NavLink>
          </nav>
        </div>

        <div className="h-[10vh] flex flex-col items-center justify-center">
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/luke-henning-smith-3294aa282/"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="flex h-[14px] sm:h-[18px] md:h-[22px] lg:h-[26px] xl:h-[30px]
                mb-5 xl:mb-5 
                 text-[#7f7f7f] hover:text-[#ffc102] focus:text-[#ffc102] mx-auto"
                />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/LukeHenningSmith"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="flex h-[14px] sm:h-[18px] md:h-[22px] lg:h-[26px] xl:h-[30px]
                 text-[#7f7f7f] hover:text-[#ffc102] focus:text-[#ffc102] mx-auto"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
