import type { CategoryCard } from "../Types";

function CateCard({ category }: { category: CategoryCard }) {
  return (
    <div className="bg-Second rounded h-[180px] w-[150px] text-bodyBg">
      <div id="image&title" className="h-[80%]">
        <div
          id="image"
          className="w-full h-[95px]  bg-cover "
          style={{ backgroundImage: `url(${category.strCategoryThumb})` }}
        ></div>
        <div className="flex items-center justify-center text-xl border-t-2 border-Third mt-2 pt-1 ">
          {category.strCategory}
        </div>
      </div>
      <div id="button" className="flex justify-center mt-0.5">
        <button className="w-[90%] border rounded-lg transition duration-300 ease-in-out transform scale-100  hover:scale-90 hover:bg-bodyBg hover:border-1 hover:text-black active:scale-75  active:border-green-400 ">
          Browse
        </button>
      </div>
    </div>
  );
}

export default CateCard;
