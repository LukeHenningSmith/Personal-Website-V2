import { Link } from "react-router-dom";
import LogoLHS from "/images/lhs_logo_tilted.png";

function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {/* First column */}
        <div className="w-1/2 p-4 flex flex-col justify-center items-center">
          {/* Content for the first column */}
          <h1>
            Hi, <br />
            I'm Luke Henning-Smith <br />
            Software Engineering & Chemistry Student
          </h1>
          <h2>Web Dev | Machine Learning | Computational Chemistry</h2>
          <h3>lhen4176@uni.sydney.edu.au</h3>
          <Link to="/web-dev" className="flat-button">
            PORTFOLIO
          </Link>
        </div>

        {/* Second column */}
        <div className="w-1/2 p-4 flex flex-col justify-center items-center">
          {/* Content for the second column */}
          <img src={LogoLHS} alt="lhs" width="80%" />
        </div>
      </div>
    </>
  );
}

export default Home;
