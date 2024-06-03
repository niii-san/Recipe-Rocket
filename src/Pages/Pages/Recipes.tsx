import { useEffect, useState } from "react";
import type { Area } from "../../Types";
import AreaCard from "../../Components/AreaCard";
import Skeleton from "../../Components/Skeleton";

function Recipes() {
  const [areas, SetAreas] = useState<Area[] | []>([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => res.json())
      .then((data) => {
        SetAreas(data.meals);
      });
  }, []);

  return (
    <>
      <div id="title" className="text-4xl mt-6 text-center">
        Areas
      </div>
      <div className="flex flex-col gap-y-6 items-center py-5 tablet:flex-row tablet:flex-wrap tablet:gap-x-6 tablet:justify-center">
        {areas.length > 0
          ? areas.map((data) => <AreaCard key={data.strArea} area={data} />)
          : [...Array(29)].map((_, i) => (
              <Skeleton key={i} className="w-[300px] h-10 rounded-xl" />
            ))}
      </div>
    </>
  );
}

export default Recipes;
