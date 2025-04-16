import type { MealCard } from "../Types";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function FoodCard({ meal }: { meal: MealCard }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="border-2 border-Second rounded-xl  w-[90%] max-w-[500px] h-32 flex justify-between cursor-pointer"
        onClick={() => navigate(`/cook/${meal.idMeal}`)}
      >
        <div className="h-full flex items-center">
          <div
            id="poster"
            className="h-[95%] min-w-[120px] bg-cover rounded-xl ml-2 "
            style={{ backgroundImage: `url("${meal.strMealThumb}")` }}
          ></div>
          <div id="title" className="pl-2">
            {meal.strMeal}
          </div>
        </div>
        <div className="min-w-[50px] h-full border-l border-Second rounded-r-xl flex items-center justify-center">
          <MdOutlineKeyboardDoubleArrowRight className="w-12 h-12 cursor-pointer  transition duration-300 ease-in-out transform scale-100  hover:scale-125 hover:text-Second" />
        </div>
      </div>
    </>
  );
}

export default FoodCard;
