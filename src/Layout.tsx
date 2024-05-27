import { Outlet } from "react-router-dom";
import { NavBody, SearchBar } from "./Pages";


function Layout() {
  return (
    <>
      <NavBody />
      <SearchBar />

      <Outlet />
    </>
  );
}

export default Layout;
