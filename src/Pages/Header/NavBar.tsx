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

  const defaultStyling: string =
    "w-full h-full bg-green-200 flex items-center justify-center";

  return (
    <header className="bg-slate-500 h-20 w-full">
      <ul className="w-full flex gap-10">
        {navItems.map((item) => (
          <li key={item.id} className="cursor-pointer h-20 w-20 bg-red-200">
            <NavLink
              to={`${item.path}`}
              className={({ isActive }) =>
                isActive ? `${defaultStyling} bg-red-300` : `${defaultStyling}`
              }
            >
              {item.element}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default NavBar;
