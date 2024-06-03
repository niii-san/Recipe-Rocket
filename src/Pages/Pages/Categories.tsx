import { useEffect, useState } from "react";
import CateCard from "../../Components/CateCard";
import type { CategoryCard } from "../../Types";
import Skeleton from "../../Components/Skeleton";

function Categories() {
  const [categories, setCategories] = useState<CategoryCard[] | []>([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories);
      });
  }, []);

  return (
    <>
      <div className="container text-4xl  text-center mt-5 "> Categories </div>
      <div className=" container w-full  flex flex-wrap mt-5  gap-3 justify-center pc:gap-">
        {categories.length > 0
          ? categories.map((item) => (
              <CateCard key={item.idCategory} category={item} />
            ))
          : [...Array(14)].map((_, i) => (
              <Skeleton
                key={i}
                className="h-[180px] w-[150px] tablet:w-[500px]"
              />
            ))}
      </div>
    </>
  );
}

export default Categories;
