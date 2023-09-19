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

function SideBar() {
  return (
    <>
      <div
        className="absolute h-screen shadow-xl bg-[#181818]
      w-[8rem] lg:w-[10rem] xl:w-[12rem]"
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
              activeClassName="active"
              className={(navData) =>
                navData.isActive ? "text-[#ffc102]" : "text-[#7f7f7f]"
              }
            >
              <FontAwesomeIcon
                icon={faHome}
                className="flex h-[16px] sm:h-[20px] md:h-[24px] lg:h-[28px] xl:h-[32px]
                mb-5 xl:mb-7
                 hover:text-[#ffc102] focus:text-[#ffc102] mx-auto"
              />
            </NavLink>

            <NavLink
              to="/web-dev"
              end
              activeClassName="active"
              className={(navData) =>
                navData.isActive ? "text-[#ffc102]" : "text-[#7f7f7f]"
              }
            >
              <FontAwesomeIcon
                icon={faWindowMaximize}
                className="flex h-[16px] sm:h-[20px] md:h-[24px] lg:h-[28px] xl:h-[32px]
                mb-5 xl:mb-7
                 hover:text-[#ffc102] focus:text-[#ffc102] mx-auto"
              />
            </NavLink>

            <NavLink
              to="/java-dev"
              end
              activeClassName="active"
              className={(navData) =>
                navData.isActive ? "text-[#ffc102]" : "text-[#7f7f7f]"
              }
            >
              <FontAwesomeIcon
                icon={faCloud}
                className="flex h-[16px] sm:h-[20px] md:h-[24px] lg:h-[28px] xl:h-[32px]
                mb-5 xl:mb-7 
                 hover:text-[#ffc102] focus:text-[#ffc102] mx-auto"
              />
            </NavLink>

            <NavLink
              to="/machine-learning"
              end
              activeClassName="active"
              className={(navData) =>
                navData.isActive ? "text-[#ffc102]" : "text-[#7f7f7f]"
              }
            >
              <FontAwesomeIcon
                icon={faBrain}
                className="flex h-[16px] sm:h-[20px] md:h-[24px] lg:h-[28px] xl:h-[32px]
                mb-5 xl:mb-7 
                  hover:text-[#ffc102] focus:text-[#ffc102] mx-auto"
              />
            </NavLink>

            <NavLink
              to="/data-analysis"
              end
              activeClassName="active"
              className={(navData) =>
                navData.isActive ? "text-[#ffc102]" : "text-[#7f7f7f]"
              }
            >
              <FontAwesomeIcon
                icon={faDatabase}
                className="flex h-[16px] sm:h-[20px] md:h-[24px] lg:h-[28px] xl:h-[32px]
                mb-5 xl:mb-7 
                hover:text-[#ffc102] focus:text-[#ffc102] mx-auto"
              />
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
                  className="flex h-[16px] sm:h-[20px] md:h-[24px] lg:h-[28px] xl:h-[32px]
                mb-5 xl:mb-7 
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
                  className="flex h-[16px] sm:h-[20px] md:h-[24px] lg:h-[28px] xl:h-[32px]
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
