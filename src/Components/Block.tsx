import type { Meal } from "../Types";
import { MdNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Skeleton from "./Skeleton";

function Block({
  meal,
  next,
  nextOnClick = () => {},
}: {
  meal: Meal | null;
  next: boolean;
  nextOnClick?: Function;
}) {
  const tagStyle =
    "border-2 border-bodyBg px-5 py-1 cursor-pointer rounded-lg transition duration-300 ease-in-out transform scale-100  hover:scale-95 hover:border-black hover:border-1 ";

  const buttonStyle =
    "border-2 border-Third rounded-lg text-bodyBg  py-1.5 transition duration-300 ease-in-out transform scale-100  hover:scale-90 hover:bg-bodyBg hover:border-1 hover:text-black active:scale-75  active:border-green-400 ";

  const navigate = useNavigate();

  if (!meal) {
    return (
      <>
        <Skeleton className="h-[400px] tablet:w-[590px] rounded-xl" />
      </>
    );
  }
  return (
    <>
      <div className="min-h-[400px] w-[300px] flex flex-col items-start rounded-xl bg-Second pl-4 tablet:w-[590px] tablet:flex-row tablet:flex-wrap">
        <div
          id="poster"
          className="w-[240px] h-[230px] bg-cover mt-2 rounded-md"
          style={{ backgroundImage: `url(${meal?.strMealThumb})` }}
        ></div>
        <div
          id="tags"
          className=" mt-3 text-white flex flex-wrap justify-start gap-x-4 gap-y-2 tablet:mx-auto tablet:gap-y-4 tablet:flex-col tablet:w-[300px]"
        >
          <div id="tag" className={tagStyle}>
            {meal?.strCategory}
          </div>
          <div id="tag" className={tagStyle}>
            {meal?.strArea}
          </div>

          <div className="hidden tablet:inline text-sm">
            {meal?.strInstructions
              ? meal.strInstructions.slice(0, 280) + ". . . . . ."
              : "Unavailable"}
          </div>
        </div>
        <div
          id="foodName"
          className="w-full mt-3 text-2xl text-bodyBg font-bold pl-1 "
        >
          <span>{meal.strMeal}</span>
        </div>
        <div id="letHimCook" className=" w-full my-4 flex gap-x-2">
          <button
            className={`${buttonStyle} w-[80%]`}
            onClick={() => navigate(`/cook/${meal.idMeal}`)}
          >
            Cook
          </button>

          {next ? (
            <button
              className={`${buttonStyle} w-20 flex justify-center`}
              onClick={() => {
                if (next) {
                  nextOnClick((prev: boolean) => !prev);
                } else {
                  console.error("Warning! Set next to true!! ");
                }
              }}
            >
              Next <MdNavigateNext className="w-6 h-6 " />
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Block;
