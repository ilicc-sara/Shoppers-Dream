import React from "react";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { clearCart, cartIsEmpty } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import PricesWindow from "./components/PricesWindow";
import CartItems from "./components/CartItems";

function Cart() {
  const emptyCart = useSelector((state) => cartIsEmpty(state));
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="w-4/5  !mx-auto  !mt-28 !mb-5   ">
      {emptyCart && (
        <div className="flex flex-col !mx-auto gap-10">
          <h1>Your cart is empty...</h1>
          <Link to="/products">
            <Button variation="primary">Keep shopping</Button>
          </Link>
        </div>
      )}
      {!emptyCart && (
        <>
          <div>
            <div className="w-full grid grid-cols-4 place-items-center">
              <span className="text-lg max-mobile:text-base font-medium">
                Item
              </span>
              <span className="text-lg max-mobile:text-base font-medium">
                Price
              </span>
              <span className="text-lg max-mobile:text-base font-medium">
                Quantity
              </span>
              <span className="text-lg max-mobile:text-base font-medium">
                Subtotal
              </span>
            </div>
          </div>
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
