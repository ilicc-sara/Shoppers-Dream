import React from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { cartIsEmpty } from "../redux/cartSlice";
import { useSelector } from "react-redux";

function Cart() {
  const emptyCart = useSelector((state) => cartIsEmpty(state));
  return (
    <div className="w-4/5  !mx-auto  !mt-28 !mb-5  ">
      {emptyCart && (
        <div className="flex flex-col !mx-auto gap-10">
          <h1>Your cart is empty...</h1>
          <Link to="/products">
            <Button variation="primary">Keep shopping</Button>
          </Link>
        </div>
      )}
      <div></div>
    </div>
  );
}

export default Cart;
