import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Meal } from "../../Types";
import Block from "../../Components/Block";

function Search() {
  const { item } = useParams();
  const [search, setSearch] = useState<Meal[] | null>(null);
  console.log(search);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
      .then((res) => res.json())
      .then((data) => {
        setSearch(data.meals);
      });
  }, [item]);
  return (
    <>
      <div>
        <div className="text-2xl mt-4">Showing Results for: {item}</div>
        <div id="items" className="flex items-center flex-col gap-y-5 mt-6">
          {search?.map((data) => (
            <Block key={data.idMeal} meal={data} next={false} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;
