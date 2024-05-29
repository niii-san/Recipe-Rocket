import { Typewriter } from "react-simple-typewriter";
import Block from "../../Components/Block";
import { useEffect, useState } from "react";
import type { Meal, MealCard } from "../../Types";
import FoodCard from "../../Components/FoodCard";

function Home() {
  const [randomMeal, setRandomMeal] = useState<Meal | null>(null);

  const [indianMeals, setIndianMeals] = useState<MealCard[] | []>([]);
  console.log(indianMeals);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => {
        setRandomMeal(data.meals[0]);
      });
  }, []);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
      .then((res) => res.json())
      .then((data) => {
        setIndianMeals(data.meals);
      });
  }, []);

  return (
    <div className="min-h-[800px] w-full bg-bodyBg">
      <div id="confused" className="flex flex-col items-center ">
        <div
          id="text"
          className="h-[80px]  w-full text-3xl text-black px-4 font-thin italic mt-10 max-w-[550px] "
        >
          Confused?{" "}
          <Typewriter
            words={["Hungry?", "What to Eat?", "Here's a random food for you."]}
            cursor={true}
            typeSpeed={60}
          />
        </div>
        <div>
          <Block meal={randomMeal} />
        </div>
      </div>
      <div id="someMeals" className="mt-8">
        <div id="title" className="text-3xl border-b border-Second">
          Some Indian meals
        </div>
        <div id="meals" className="flex flex-col items-center gap-y-5 py-5">
          {indianMeals.map((meal) => (
            <FoodCard meal={meal} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
