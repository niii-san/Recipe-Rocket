import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { MealCard } from "../../Types";
import FoodCard from "../../Components/FoodCard";

function Areas() {
  const { area } = useParams();
  const [data, setData] = useState<MealCard[] | []>();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.meals);
      });
  }, []);
  return (
    <div>
      <div className="container text-2xl mt-6 mb-4 text-center ">
        {area} Meals
      </div>
      <div className="container flex flex-col items-center gap-6 tablet:flex-row tablet:flex-wrap  tablet:justify-center">
        {data?.map((item) => (
          <FoodCard key={item.idMeal} meal={item} />
        ))}
      </div>
    </div>
  );
}

export default Areas;
