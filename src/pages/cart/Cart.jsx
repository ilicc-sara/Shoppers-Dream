import Button from "../../UI/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { clearCart, cartIsEmpty } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import PricesWindow from "./components/PricesWindow";
import CartItems from "./components/CartItems";
import CartHeader from "./components/CartHeader";
import DisplayEmptyCart from "./components/DisplayEmptyCart";

function Cart() {
  const emptyCart = useSelector((state) => cartIsEmpty(state));
  const dispatch = useDispatch();

  return (
    <div className="w-4/5  !mx-auto  !mt-28 !mb-5   ">
      {emptyCart && <DisplayEmptyCart />}
      {!emptyCart && (
        <>
          <CartHeader />
          <hr className="border-t border-neutral-300" />
          <CartItems />
          <hr className="border-t border-neutral-300" />
          <div className="flex justify-between items-center !my-3">
            <Link to="/products">
              <Button variation="primary">Keep shopping</Button>
            </Link>
            <Button variation="clear" handleClick={() => dispatch(clearCart())}>
              Clear the cart
            </Button>
          </div>

          <PricesWindow />
        </>
      )}
    </div>
  );
}

export default Cart;
