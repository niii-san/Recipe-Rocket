import { useNavigate } from "react-router-dom";

interface NavItem {
  id: number;
  element: string;
  path: string;
}

function Header() {
  const navigate = useNavigate();

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
    <header className="bg-slate-500 h-20 w-full">
      <ul className="w-full flex gap-10">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer"
            onClick={() => navigate(`${item.path}`)}
          >
            {item.element}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
