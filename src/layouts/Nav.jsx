import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const sectionIsInView = useSelector((state) => state.view.isInView);
  return (
    <nav
      className={`w-full !py-[20px]  ${
        !sectionIsInView
          ? "fixed top-0 left-0 w-full z-50 bg-white shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.1)] "
          : ""
      } `}
    >
      <div className="max-w-[1200px] flex justify-between !mx-auto ">
        <div className="text-[22px] font-medium flex items-center justify-center gap-[15px]">
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
            <div className="text-[14px] padding-[2px] bg-[#d946ef] !text-white w-[20px] h-[20px] flex justify-center items-center rounded-[222px] absolute -top-[px] -right-[8px]">
              <span className="!text-white">0</span>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
