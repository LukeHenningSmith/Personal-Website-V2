import { Link } from "react-router-dom";
import LogoLHS from "/images/lhs_logo_tilted.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";

function JavaDev() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-1/2 p-4 flex flex-col justify-center items-center max-w-xl">
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
           text-[#ffc102] font-bold text-center
           mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6"
          >
            Java App Development
            <br />
          </h1>
          <h1
            className="text-xs lg:text-base xl:text-xl
           text-[#d3d3d3] font-bold text-center
          mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6"
          >
            Weather Tracker is a Java application that uses an input
            weatherbit.io API, output Sendgrid email API and JavaFX interface to
            request the weather of places around the world. The weather for
            selected locations is displayed on the interface, and can also be
            sent via email. The application uses a (MVP) architecture, design
            patterns such as Observer, and careful use of the SOLID & GRASP
            principles. Concurrency is used to maintain GUI responsiveness
            during slow API calls, and an extensive test suite of both model and
            GUI testing with mocked external dependencies is used.
          </h1>

          <div className="flex text-[#ffc102] mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">
            <h3 className="text-xs lg:text-base xl:text-xl font-bold italic">
              Subject: SOFT3202 (Software Construction & Design 2) <br />
              Overall Subject Mark: HD (97/100)
            </h3>
          </div>
        </div>

        <div className="w-1/2 p-4 flex flex-col justify-center items-center max-w-xl">
          <div className="max-w-xl flex-col">
            <div className="flex mb-6 mx-auto justify-center items-center">
              <ReactPlayer
                width="100%"
                height="auto"
                url="/videos/weather_tracker_demo.mov"
                controls={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JavaDev;
