import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { amountSum } from "../redux/cartSlice";

function Nav() {
  const sectionIsInView = useSelector((state) => state.view.isInView);
  const sumCartAmount = useSelector((state) => amountSum(state));
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const loading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width >= 800) {
      setShowMobileNav(false);
    }
  }, [width]);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  return (
    <>
      {loading && <div className="loader"></div>}
      {!showMobileNav && (
        <nav
          className={`w-full !py-5  ${
            !sectionIsInView
              ? "fixed top-0 left-0 w-full z-50 bg-white shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.1)] sticky-nav opacity-[0.9]"
              : ""
          } `}
        >
          <div className="flex justify-between !mx-auto desktop:w-7xl  laptop:w-6xl smallLT:w-5xl  tablet:w-4xl  mobile:w-[90%]  smallmobile:w-[90%] ">
            <div className="text-2xl font-medium flex items-center justify-center gap-[15px]">
              <ion-icon name="bag-outline" class="w-[24px] h-[24px]"></ion-icon>
              <span>X Shopper's Dream</span>
            </div>
            <div className="flex align-center justify-center gap-[15px] max-mobile:hidden">
              <NavLink to="/" className="text-[16px] ">
                Home
              </NavLink>
              <NavLink to="/products" className="text-[16px] ">
                Products
              </NavLink>
            </div>
            <Link to="/cart">
              <div className="relative text-[20px] flex justify-center items-start gap-[5px] max-mobile:hidden">
                <span className="text-[18px]">Cart</span>
                <ion-icon
                  name="bag-outline"
                  className="w-[24px] h-[24px]"
                ></ion-icon>
                <div className="text-[14px] padding-[2px] bg-brand-pink !text-white w-[20px] h-[20px] flex justify-center items-center rounded-[222px] absolute -top-[1px] -right-[8px]">
                  {sumCartAmount}
                </div>
              </div>
            </Link>
            <div className="flex items-center !px-2 mobile:hidden">
              <ion-icon
                name="menu-outline"
                className="w-[24px] h-[24px]"
                onClick={() => setShowMobileNav(true)}
              ></ion-icon>
            </div>
          </div>
        </nav>
      )}

      <nav
        className={`fixed top-0 left-0 right-0 bg-white z-50 w-full h-screen flex flex-col gap-15 !p-[100px] transition-all duration-500 ease-in   ${
          !showMobileNav
            ? "translate-x-full  opacity-0 pointer-events-none invisible"
            : "opacity-100 pointer-events-auto visible translate-x-0"
        }`}
      >
        <ion-icon
          name="close"
          className="w-[36px] h-[36px] absolute top-[30px] right-[30px]"
          onClick={() => setShowMobileNav(false)}
        ></ion-icon>
        <NavLink to="/" className="text-4xl">
          Home
        </NavLink>
        <NavLink to="/products" className="text-4xl">
          Products
        </NavLink>

        <Link to="/cart">
          <div className="relative flex justify-center items-start gap-[5px] w-[fit-content] !mx-auto">
            <span className="text-4xl">Cart</span>
            <ion-icon
              name="bag-outline"
              className="w-[36px] h-[36px]"
            ></ion-icon>
            <div className="text-[24px] padding-[2px] bg-brand-pink !text-white w-[30px] h-[30px] flex justify-center items-center rounded-[222px] absolute -top-[3px] -right-[11px]">
              {sumCartAmount}
            </div>
          </div>
        </Link>
      </nav>
    </>
  );
}

export default Nav;
