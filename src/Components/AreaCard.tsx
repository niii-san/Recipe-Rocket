import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import type { Area } from "../Types";
import { useNavigate } from "react-router-dom";

function AreaCard({ area }: { area: Area }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[300px]  bg-Second text-Text py-2   flex justify-between pl-5 pr-2 rounded-xl cursor-pointer  transition duration-500 ease-in-out transform scale-100  hover:scale-110  " onClick={()=>navigate(`/area/${area.strArea}`)}>
        <div>{area.strArea} </div>
        <div>
          <MdOutlineKeyboardDoubleArrowRight className="w-6 h-6 cursor-pointer  transition duration-300 ease-in-out transform scale-100  hover:scale-125 hover:text-bodyBg" />
        </div>
      </div>
    </>
  );
}

export default AreaCard;
