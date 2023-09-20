import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// link
// target
function CustomButton(props) {
  return (
    <>
      <Link
        target={props.target}
        to={props.link}
        className="bg-transparent text-[#ffc102] border border-[#ffc102] hover:bg-[#ffc102] 
            hover:text-black hover:border-transparent px-4 py-2 rounded 
            text-xs md:text-sm lg:text-base xl:text-lg
           "
      >
        <div className="flex justify-center items-center">
          {props.name}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="flex h-[10px] sm:h-[14px] md:h-[18px] lg:h-[22px] xl:h-[26px] mx-auto ml-3"
          />
        </div>
      </Link>
    </>
  );
}

export default CustomButton;
