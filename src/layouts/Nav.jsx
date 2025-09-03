import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const sectionIsInView = useSelector((state) => state.view.isInView);
  return (
    <nav
      className={`w-full !py-5  ${
        !sectionIsInView
          ? "fixed top-0 left-0 w-full z-50 bg-white shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.1)] sticky-nav"
          : ""
      } `}
    >
      <div className="flex justify-between !mx-auto w-7xl">
        <div className="text-2xl font-medium flex items-center justify-center gap-[15px]">
          <ion-icon name="bag-outline" class="w-[24px] h-[24px]"></ion-icon>
          <span>X Shopper's Dream</span>
        </div>
        <div className="flex align-center justify-center gap-[15px]">
          <NavLink to="/" className="text-[16px] ">
            Home
          </NavLink>
          <NavLink to="/products" className="text-[16px] ">
            Products
          </NavLink>
        </div>
        <Link to="/cart">
          <div className="relative text-[20px] flex justify-center items-start gap-[5px]">
            <span className="text-[18px]">Cart</span>
            <ion-icon
              name="bag-outline"
              className="w-[24px] h-[24px]"
            ></ion-icon>
            <div className="text-[14px] padding-[2px] bg-brand-pink !text-white w-[20px] h-[20px] flex justify-center items-center rounded-[222px] absolute -top-[px] -right-[8px]">
              <span>0</span>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
