import { useEffect, useState } from "react";
import CateCard from "../../Components/CateCard";
import type { CategoryCard } from "../../Types";

function Categories() {
  const [categories, setCategories] = useState<CategoryCard[] | []>([]);
  console.log(categories);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories);
      });
  }, []);

  return (
    <>
    <div className="text-4xl  text-center mt-5"> Categories </div>
      <div className="w-full  flex flex-wrap mt-5  gap-3 justify-center">
        
        {categories.map((item) => (
          <CateCard key={item.idCategory} category={item} />
        ))}
      </div>
    </>
  );
}

export default Categories;
