import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { Meal } from "../../Types";

function Cook() {
  const tagStyle =
    "border-2 border-bodyBg px-5 py-1 cursor-pointer rounded-lg transition duration-300 ease-in-out transform scale-100  hover:scale-95 hover:border-black hover:border-1 ";

  const { meal } = useParams();

  const [currentMeal, setCurrentMeal] = useState<Meal | null>(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`)
      .then((res) => res.json())
      .then((data) => setCurrentMeal(data.meals[0]));
  }, [meal]);
  return (
    <>
      <div className="flex flex-col items-center pt-5 w-full ">
        <div
          id="title-image-tags"
          className="flex flex-col items-center bg-Second text-Text rounded-xl "
        >
          <div id="title" className="text-2xl py-2">
            {currentMeal?.strMeal}
          </div>
          <div
            id="image"
            className="h-[250px] w-[250px] bg-cover"
            style={{ backgroundImage: `url("${currentMeal?.strMealThumb}")` }}
          ></div>
          <div id="tags" className="flex py-4 gap-x-4">
            <div id="tag" className={tagStyle}>
              {currentMeal?.strCategory}
            </div>
            <div id="tag" className={tagStyle}>
              {currentMeal?.strArea}
            </div>
          </div>
        </div>
        <div id="instructions" className="w-[90%] mt-5">
          <div id="title" className="text-2xl">
            Instructions
          </div>
          <div
            id="instructionData"
            className="bg-Second text-Text text-sm border border-Third p-4 rounded-xl max-h-[400px] overflow-y-scroll"
          >
            {currentMeal?.strInstructions}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cook;
