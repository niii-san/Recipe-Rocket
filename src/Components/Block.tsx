import type { Meal } from "../Types";

function Block({ meal }: { meal: Meal | null }) {
  const tagStyle =
    "border-2 border-bodyBg px-5 py-1 cursor-pointer rounded-lg transition duration-300 ease-in-out transform scale-100  hover:scale-90 hover:border-black hover:border-1";

  if (!meal) {
    return (
      <>
        <div className="h-[350px] w-[300px] bg-gray-400"></div>
      </>
    );
  }
  return (
    <>
      <div className="h-[400px] w-[300px] flex flex-col items-start rounded bg-Second pl-4">
        <div
          id="poster"
          className="w-[80%] h-[57%] bg-cover mt-2 rounded-md"
          style={{ backgroundImage: `url(${meal?.strMealThumb})` }}
        ></div>
        <div
          id="tags"
          className="mt-3 text-white flex flex-wrap justify-start gap-x-4 gap-y-2 "
        >
          <div id="tag" className={tagStyle}>
            {meal?.strCategory}
          </div>
          <div id="tag" className={tagStyle}>
            {meal?.strArea}
          </div>
        </div>
        <div
          id="foodName"
          className="w-full mt-3 text-2xl text-bodyBg font-bold pl-1 "
        >
          <span>{meal.strMeal}</span>
        </div>
        <div id="letHimCook" className=" w-full mt-4">
          <button className="border-2 border-Third rounded-lg text-Text w-[80%] py-1.5 transition duration-300 ease-in-out transform scale-100  hover:scale-90 hover:bg-black hover:border-1 hover:text-bodyBg">
            Cook
          </button>
        </div>
      </div>
    </>
  );
}

export default Block;
