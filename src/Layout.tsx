import { Outlet } from "react-router-dom";
import { Header } from "./Pages";

import React from 'react'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Layout