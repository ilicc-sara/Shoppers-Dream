import { useRef, forwardRef } from "react";
import { Outlet } from "react-router";
import Nav from "./Nav";

function SharedLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default SharedLayout;
