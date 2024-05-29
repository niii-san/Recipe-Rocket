import { Typewriter } from "react-simple-typewriter";
import Block from "../../Components/Block";
import { useEffect, useState } from "react";
import type { Meal } from "../../Types";

function Home() {
  const [randomMeal, setRandomMeal] = useState<Meal | null>(null);
  console.log(randomMeal);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => {
        setRandomMeal(data.meals[0]);
      });
  }, []);

  return (
    <div className="h-[1200px] w-full bg-bodyBg">
      <div id="confused" className="flex flex-col items-center">
        <div
          id="text"
          className="w-full text-3xl text-black px-4 font-thin italic"
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
    </div>
  );
}

export default Home;
