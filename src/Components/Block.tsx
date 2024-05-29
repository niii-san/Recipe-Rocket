import type { Meal } from "../Types";

function Block({ meal }: { meal: Meal | null }) {
  const tagStyle =
    "border-2 border-bodyBg px-5 py-1 cursor-pointer rounded-lg transition duration-300 ease-in-out transform scale-100  hover:scale-95 hover:border-black hover:border-1 ";

  if (!meal) {
    return (
      <>
        <div className="h-[400px] tablet:w-[590px] bg-gray-400 rounded-xl"></div>
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
              ? meal.strInstructions.slice(0, 300) + ". . . . . ."
              : "Unavailable"}
          </div>
        </div>
        <div
          id="foodName"
          className="w-full mt-3 text-2xl text-bodyBg font-bold pl-1 "
        >
          <span>{meal.strMeal}</span>
        </div>
        <div id="letHimCook" className=" w-full my-4">
          <button className="border-2 border-Third rounded-lg text-bodyBg w-[80%] py-1.5 transition duration-300 ease-in-out transform scale-100  hover:scale-90 hover:bg-bodyBg hover:border-1 hover:text-black ">
            Cook
          </button>
        </div>
      </div>
    </>
  );
}

export default Block;
