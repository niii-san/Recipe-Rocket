import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { MealCard } from "../../Types";
import FoodCard from "../../Components/FoodCard";

function Browse() {
  const { cat } = useParams();
  const [browsedData, setBrowsedData] = useState<MealCard[] | []>([]);
  console.log(browsedData);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
      .then((res) => res.json())
      .then((data) => {
        setBrowsedData(data.meals);
      });
  }, []);

  return (
    <div>
      <div className="mt-6 mb-5 text-2xl">Showing results for: {cat} </div>
      <div className="flex  flex-col gap-y-5 items-center tablet:flex-row tablet:flex-wrap tablet:justify-center tablet:gap-x-8 ">
        {browsedData?.map((item) => (
          <FoodCard key={item.idMeal} meal={item} />
        ))}
      </div>
    </div>
  );
}

export default Browse;
