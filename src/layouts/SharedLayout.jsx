import { useRef } from "react";
import { Outlet } from "react-router";
import Nav from "./Nav";

function SharedLayout() {
  const ref = useRef();

  const obsCallback = function (entries, observer) {
    entries.forEach((entry) => {
      console.log(entry);
    });
  };

  const obsOptions = {
    root: null,
    threshold: 1,
  };

  const observer = new IntersectionObserver(obsCallback, obsOptions);
  observer.observe(ref.current);
  return (
    <>
      <Nav />
      <Outlet context={{ ref }} />
    </>
  );
}

export default SharedLayout;
