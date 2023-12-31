import CustomButton from "../components/CustomButton";
import { useState, useEffect } from "react";

function MachineLearning() {
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
          <div className="w-screen p-4 flex flex-col justify-center items-center max-w-6xl m-10">
            <h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
           text-[#ffc102] font-bold text-center
           mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6"
            >
              Machine Learning
              <br />
            </h1>
            <h1
              className="text-xs lg:text-base xl:text-xl
           text-[#d3d3d3] font-bold text-center
          mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6"
            >
              I have recently begun exploring Machine Learning (ML) through a ML
              specialist unit called COMP3308. Through the unit I have
              experience using and comparing many ML models such as Multilayer
              Neural Networks using backpropagation, Convolutional Neural
              Networks, Support Vector Machines, Bayesian Networks, Clustering
              and ensembles of classifiers.
            </h1>

            <h1
              className="text-xs lg:text-base xl:text-xl
           text-[#d3d3d3] font-bold text-center
          mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6"
            >
              I have also begun manually implementing popular ML algorithms to
              learn more about them. For example, below is the source code for
              my implementation of the K-Nearest Neighbours and Naive Bayes
              algorithms that can be used to classify new examples in a binary
              class problem.
            </h1>

            <div className=" text-[#ffc102] mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">
              <h3 className="text-xs lg:text-base xl:text-xl font-bold italic text-center">
                Subject: COMP3308 (Introduction to Artificial Intelligence)
              </h3>
              <h3 className="text-xs lg:text-base xl:text-xl font-bold italic text-center">
                Overall Subject Mark: HD (95/100)
              </h3>
            </div>

            <CustomButton
              target="_blank"
              link="https://github.com/LukeHenningSmith/ML_Models"
              name="Source Code"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MachineLearning;
