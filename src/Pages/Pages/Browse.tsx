import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { MealCard } from "../../Types";
import FoodCard from "../../Components/FoodCard";
import Skeleton from "../../Components/Skeleton";

function Browse() {
  const { cat } = useParams();
  const [browsedData, setBrowsedData] = useState<MealCard[] | []>([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
      .then((res) => res.json())
      .then((data) => {
        setBrowsedData(data.meals);
      });
  }, []);

  return (
    <div className="container">
      <div className="mt-6 mb-5 text-2xl">Showing results for: {cat} </div>
      <div className="flex  flex-col gap-y-5 items-center tablet:flex-row tablet:flex-wrap tablet:justify-center tablet:gap-x-8 ">
        {browsedData.length > 0
          ? browsedData.map((item) => (
              <FoodCard key={item.idMeal} meal={item} />
            ))
          : [...Array(10)].map((_, i) => (
              <Skeleton
                key={i}
                className="w-[90%] max-w-[500px] h-32 rounded-xl"
              />
            ))}
      </div>
    </div>
  );
}

export default Browse;
