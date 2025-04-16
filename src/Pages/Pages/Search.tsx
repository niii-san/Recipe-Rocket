import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Meal } from "../../Types";
import Block from "../../Components/Block";
import { Triangle } from "react-loader-spinner";

function Search() {
  const { item } = useParams();
  const [search, setSearch] = useState<Meal[] | null>(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
      .then((res) => res.json())
      .then((data) => {
        setSearch(data.meals);
      });
  }, [item]);
  return (
    <>
      <div className="container">
        <div className="text-2xl mt-4">Showing Results for: {item}</div>
        <div
          id="items"
          className="flex items-center flex-col gap-y-6 mt-6 tablet:flex-row tablet:flex-wrap tablet:justify-center tablet:gap-x-8"
        >
          {search ? (
            search.map((data) => (
              <Block key={data.idMeal} meal={data} next={false} />
            ))
          ) : (
            <div className="text-2xl mt-28  tablet:text-3xl flex items-center flex-col">
              <div>
                No Results Found for{" "}
                <span className="text-Second font-bold italic">{item}</span>
              </div>
              <Triangle
                visible={true}
                height="120"
                width="120"
                color="#1A5D1A"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Search;
