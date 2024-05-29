import { NavLink } from "react-router-dom";

interface NavItem {
  id: number;
  element: string;
  path: string;
}

function NavBar() {
  const navItems: NavItem[] = [
    { id: 1, element: "Home", path: "/" },
    {
      id: 2,
      element: "Categories",
      path: "/categories",
    },
    {
      id: 3,
      element: "Recipes",
      path: "/recipes",
    },
    {
      id: 4,
      element: "About",
      path: "/about",
    },
  ];

  return (
    <div className=" container  w-full  flex justify-center  ">
      <ul className="py-3 text-sm flex justify-center w-full gap-2 bg-Second rounded-xl tablet:w-auto tablet:px-8 tablet:text-base tablet:gap-6">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer h-full flex items-center text-Text "
          >
            <NavLink
              to={`${item.path}`}
              className={({ isActive }) =>
                isActive
                  ? " px-3 py-1.5 bg-bodyBg rounded-xl transition duration-300 ease-in-out transform scale-110 tablet:px-6 tablet:py-2 hover:text-Second "
                  : " px-3 py-1.5 bg-Third text-black rounded-xl transition duration-300 ease-in-out transform scale-95 tablet:px-6 tablet:py-2 hover:scale-75 hover:bg-bodyBg  "
              }
            >
              {item.element}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
