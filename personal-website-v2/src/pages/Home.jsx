import { Link } from "react-router-dom";
import LogoLHS from "/images/lhs_logo_tilted.png";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {/* First column */}
        <div className="w-1/2 p-4 flex flex-col justify-center items-center">
          {/* Content for the first column */}
          <h1 className="text-6xl text-[#ffc102] font-bold text-center">
            Hi, I'm Luke
            <br />
          </h1>
          <h1 className="text-5xl mb-6 text-white font-bold text-center">
            Software Engineering & Chemistry Student at the University of Sydney
          </h1>
          <h2 className="text-xl mb-6 text-[#ffc102] italic">
            Web Dev | Machine Learning | Computational Chemistry
          </h2>

          <div className="flex text-[#7f7f7f] mb-6">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="flex h-[14px] sm:h-[18px] md:h-[22px] lg:h-[26px] xl:h-[30px] mx-auto mr-3"
            />
            <h3 className="text-xl font-bold italic">
              lhen4176@uni.sydney.edu.au
            </h3>
          </div>

          <Link
            to="/web-dev"
            className="bg-transparent text-[#ffc102] border border-[#ffc102] hover:bg-[#ffc102] hover:text-black hover:border-transparent px-4 py-2 rounded text-xl"
          >
            <div className="flex">
              Portfolio
              <FontAwesomeIcon
                icon={faArrowRight}
                className="flex h-[14px] sm:h-[18px] md:h-[22px] lg:h-[26px] xl:h-[30px] mx-auto ml-3"
              />
            </div>
          </Link>
        </div>

        {/* Second column */}
        <div className="w-1/2 p-4 flex flex-col justify-center items-center">
          {/* Content for the second column */}
          <img src={LogoLHS} alt="lhs" className="w-[100%] max-w-lg" />
        </div>
      </div>
    </>
  );
}

export default Home;
