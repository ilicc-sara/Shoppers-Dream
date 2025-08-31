import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const sectionIsInView = useSelector((state) => state.view.isInView);
  return (
    <nav
      className={`w-full !py-[2rem]  ${
        !sectionIsInView
          ? "fixed top-0 left-0 w-full z-50 bg-white shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.1)] opacity-[0.95]"
          : ""
      } `}
    >
      <div className="max-w-[120rem] flex justify-between !mx-auto ">
        <div className="text-[2.2rem] font-medium flex items-center justify-center gap-[15px]">
          <ion-icon name="bag-outline" class="w-[24px] h-[24px]"></ion-icon>
          <span>X Shopper's Dream</span>
        </div>

        <div className="flex align-center justify-center gap-[15px]">
          <NavLink to="/" className="text-[1.6rem] ">
            Home
          </NavLink>
          <NavLink to="/products" className="text-[1.6rem] ">
            Products
          </NavLink>
        </div>

        <Link to="/cart">
          <div className="relative text-[2rem] flex justify-center items-start gap-[5px]">
            <span className="text-[1.8rem]">Cart</span>
            <ion-icon
              name="bag-outline"
              className="w-[24px] h-[24px]"
            ></ion-icon>
            <div className="text-[14px] padding-[2px] bg-[#d946ef] text-white w-[2rem] h-[2rem] flex justify-center items-center rounded-[222px] absolute -top-[px] -right-[8px]">
              0
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
