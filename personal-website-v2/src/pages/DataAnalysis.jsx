import CustomButton from "../components/CustomButton";

function DataAnalysis() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2 p-4 flex flex-col justify-center items-center max-w-xl">
        <h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
           text-[#ffc102] font-bold text-center
           mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6"
        >
          Data Analysis
          <br />
        </h1>
        <h1
          className="text-xs lg:text-base xl:text-xl
           text-[#d3d3d3] font-bold text-center
          mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6"
        >
          I have experience in data analysis and interpretation using the
          popular python libraries of Pandas and Matplotlib. For example, I used
          these libraries to analyse COVID-19 causes in DATA1002 and atmospheric
          chemistry reactions in CHEM3123 where I received a High Distinction in
          both. <br /> A preview of a graph from my most recent data
          investigation into the COVID-19 mortality rate is on the right, with
          the full investigation and source code linked below.
        </h1>

        <div className=" text-[#ffc102] mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">
          <h3 className="text-xs lg:text-base xl:text-xl font-bold italic text-center">
            Subject: DATA1002 (Data and Computation)
          </h3>
          <h3 className="text-xs lg:text-base xl:text-xl font-bold italic text-center">
            Overall Subject Mark: HD (93/100)
          </h3>
        </div>
        <div className=" text-[#ffc102] mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">
          <h3 className="text-xs lg:text-base xl:text-xl font-bold italic text-center">
            Subject: CHEM3123 (Computational Chemistry)
          </h3>
          <h3 className="text-xs lg:text-base xl:text-xl font-bold italic text-center">
            Overall Subject Mark: HD (92/100)
          </h3>
        </div>
      </div>

      <div className="w-1/2 p-4 flex flex-col justify-center items-center max-w-xl">
        <div className="max-w-xl flex-col">
          <div className="flex mb-6 mx-auto justify-center items-center">
            <img src="/images/data_analysis_demo.png" width="100%" />
          </div>
        </div>
        <CustomButton
          target="_blank"
          link="https://github.com/LukeHenningSmith/COVID-Data-Investigation/blob/main/COVID-Investigation.ipynb"
        />
      </div>
    </div>
  );
}

export default DataAnalysis;
