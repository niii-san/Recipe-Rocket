import { Outlet } from "react-router-dom";
import { NavBody, SearchBar, Footer } from "./Pages";

function Layout() {
  return (
    <>
      <NavBody />
      <SearchBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
