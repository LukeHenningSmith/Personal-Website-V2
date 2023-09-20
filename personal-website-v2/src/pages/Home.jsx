import { Link } from "react-router-dom";
import LogoLHS from "/images/lhs_logo_tilted.png";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from "../components/CustomButton";

function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {/* First column */}
        <div className="w-1/2 p-4 flex flex-col justify-center items-center max-w-xl">
          {/* Content for the first column */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
           text-[#ffc102] font-bold text-center"
          >
            Hi, I'm Luke
            <br />
          </h1>
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
           text-white font-bold text-center
          mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6"
          >
            Software Engineering & Chemistry Student at the University of Sydney
          </h1>
          <h2
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
                  text-[#ffc102] italic text-center
                  mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6"
          >
            Web Dev | Machine Learning | Computational Chemistry
          </h2>

          <div className="flex text-[#7f7f7f] mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="flex h-[14px] sm:h-[18px] md:h-[22px] lg:h-[26px] xl:h-[30px] mx-auto mr-3"
            />
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold italic">
              lhen4176@uni.sydney.edu.au
            </h3>
          </div>
          <CustomButton target="" link="/web-dev" />
        </div>

        {/* Second column */}
        <div className="w-1/2 p-4 flex flex-col justify-center items-center max-w-xl">
          <div className="max-w-xl">
            <img src={LogoLHS} alt="lhs" className="w-[90%] max-w-xl mx-auto" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
