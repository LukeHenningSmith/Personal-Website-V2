import ReactPlayer from "react-player";
import { useState, useEffect } from "react";

function WebDev() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after a short delay to trigger the fade-in effect
    const delay = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Adjust the delay as needed

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <div
        className={`transition duration-700 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex justify-center items-center h-screen">
          {/* First column */}
          <div className="w-1/2 p-4 flex flex-col justify-center items-center max-w-xl">
            {/* Content for the first column */}
            <h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
           text-[#ffc102] font-bold
           mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6"
            >
              Web Dev Experience
              <br />
            </h1>
            <h1
              className="text-xs lg:text-base xl:text-xl
           text-[#d3d3d3] font-bold text-center
          mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6"
            >
              Farmware is a Django / React web application I built with my
              university team over the course of a month. Its purpose is to help
              farmers manage their inventory, staff and sales using an
              intuitive, functional and reliable web interface. The application
              supports user accounts & login, data storage and reactive web
              pages using the REST API architecture style. The project also
              included deployment to an AWS server for university marking. I was
              involved in all aspects of the project including backend Django
              data models, frontend React development and the secure build and
              deployment to AWS.
            </h1>

            <div className=" text-[#ffc102] mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">
              <h3 className="text-xs lg:text-base xl:text-xl font-bold italic text-center">
                Subject: ELEC3609 (Internet Software Platforms)
              </h3>
              <h3 className="text-xs lg:text-base xl:text-xl font-bold italic text-center">
                Overall Subject Mark: HD (85/100)
              </h3>
            </div>
          </div>

          {/* Second column */}
          <div className="w-1/2 p-4 flex flex-col justify-center items-center max-w-xl">
            <div className="max-w-xl flex-col">
              <div className="flex mb-6 mx-auto justify-center items-center">
                <ReactPlayer
                  width="90%"
                  height="auto"
                  url="/videos/farmware_demo_1.mov"
                  controls={true}
                  playing={true}
                />
              </div>
              <div className="flex mx-auto justify-center items-center">
                <ReactPlayer
                  width="90%"
                  height="auto"
                  url="/videos/farmware_demo_2.mov"
                  controls={true}
                  playing={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebDev;
