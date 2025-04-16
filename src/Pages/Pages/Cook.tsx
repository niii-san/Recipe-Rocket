import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { Meal } from "../../Types";
import Skeleton from "../../Components/Skeleton";

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

  const renderIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = currentMeal?.[`strIngredient${i}` as keyof Meal];
      if (ingredient && ingredient.trim()) {
        ingredients.push(<div key={i}>{ingredient}</div>);
      }
    }
    return ingredients;
  };

  const renderMeasures = () => {
    const measures = [];
    for (let i = 1; i <= 20; i++) {
      const measure = currentMeal?.[`strMeasure${i}` as keyof Meal];
      if (measure && measure.trim()) {
        measures.push(<div key={i}>{measure}</div>);
      }
    }
    return measures;
  };
  return (
    <>
      <div className="flex flex-col items-center pt-5 w-full pb-72  container">
        <div
          id="title-image-tags"
          className="flex flex-col items-center bg-Second text-Text rounded-xl min-w-[280px] "
        >
          <div id="title" className="text-2xl py-2 px-4">
            {currentMeal ? (
              currentMeal?.strMeal
            ) : (
              <Skeleton className="w-28 h-8" />
            )}
          </div>

          {currentMeal ? (
            <div
              id="image"
              className="h-[250px] w-[250px] bg-cover"
              style={{ backgroundImage: `url("${currentMeal?.strMealThumb}")` }}
            ></div>
          ) : (
            <Skeleton className="h-[250px] w-[250px] rounded-none" />
          )}

          <div id="tags" className="flex py-4 gap-x-4">
            <div id="tag" className={tagStyle}>
              {currentMeal ? currentMeal.strCategory : "XXXXX"}
            </div>
            <div id="tag" className={tagStyle}>
              {currentMeal ? currentMeal.strArea : "XXXXX"}
            </div>
          </div>
        </div>

        <div
          id="ingredients-measures"
          className="bg-Second flex w-[96%] text-Text mt-8 rounded-xl tablet:max-w-[800px]"
        >
          <div id="ingredients" className=" w-[50%] p-3">
            <h1 className="text-2xl border-b border-Third mb-3">Ingredients</h1>
            <div>
              {currentMeal
                ? renderIngredients()
                : [...Array(10)].map((_, i) => <div key={i}>xxxx</div>)}
            </div>
          </div>
          <div id="measures" className=" w-[50%] border-l border-Third p-3">
            <h1 className="text-2xl border-b border-Third mb-3">Measures</h1>
            <div>
              {currentMeal
                ? renderMeasures()
                : [...Array(10)].map((_, i) => <div key={i}>xxxx</div>)}
            </div>
          </div>
        </div>
        <div
          id="instructions"
          className="w-[90%] mt-5 flex flex-col items-center"
        >
          <div id="title" className="text-2xl tablet:text-4xl">
            Instructions
          </div>
          <div
            id="instructionData"
            className="bg-Second text-Text text-sm border border-Third p-4 rounded-xl max-h-[400px] overflow-y-scroll scrollbar-minimal tablet:text-base tablet:max-w-[800px] "
          >
            {currentMeal
              ? currentMeal.strInstructions
              : "xxxxxx xxxxx xxxxxxxxxxxxxx xxxxxxxxx xxxxxxxxx xxx xxxxxxxxxxx xxx xxxxxxxxx xxxxxxx xxxxxxx xxxxx xxxxxx xxx  xxxxx xxxx  xxxxx xxxx xxxx xxx xxxxxxxxxxxxxxx xxxxxx xxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxx xxxxx xxxx xxxxxx xxxxx xxxxxxxxxxxxxx xxxxxxxxx xxxxxxxxx xxx xxxxxxxxxxx xxx xxxxxxxxx xxxxxxx xxxxxxx xxxxx xxxxxx xxx  xxxxx xxxx  xxxxx xxxx xxxx xxx xxxxxxxxxxxxxxx xxxxxx xxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxx xxxxx xxxx xxxx xxx"}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cook;
