import { FaSearch } from "react-icons/fa";

function SearchBar() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <header className=" w-full  ">
      <form action="" onSubmit={handleFormSubmit}>
        <div className=" rounded-lg bg-Second h-9 flex mx-2 my-1">
          <input
            type="text"
            className="w-[80%] h-full outline-none text-center bg-transparent text-Text"
          />
          <button
            type="submit"
            className="border-l border-Third text-white h-full w-[20%]  flex justify-center items-center"
          >
            <FaSearch className="h-5 w-5" />
          </button>
        </div>
      </form>
    </header>
  );
}

export default SearchBar;
