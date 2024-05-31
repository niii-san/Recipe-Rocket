import { useEffect, useState } from "react";
import type { Area } from "../../Types";
import AreaCard from "../../Components/AreaCard";

function Recipes() {
  const [areas, SetAreas] = useState<Area[] | []>([]);
  console.log(areas);

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
      <div className="flex flex-col gap-y-6 items-center py-5">
        {areas.map((data) => (
          <AreaCard key={data.strArea} area={data} />
        ))}
      </div>
    </>
  );
}

export default Recipes;
