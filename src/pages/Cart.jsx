import React from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { cartIsEmpty, priceSum } from "../redux/cartSlice";
import { useSelector } from "react-redux";
import { increaseAmount, decreaseAmount } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

function Cart() {
  const emptyCart = useSelector((state) => cartIsEmpty(state));
  const sumPrice = useSelector((state) => priceSum(state));
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  return (
    <div className="w-4/5  !mx-auto  !mt-28 !mb-5   ">
      {/* {emptyCart && (
        <div className="flex flex-col !mx-auto gap-10">
          <h1>Your cart is empty...</h1>
          <Link to="/products">
            <Button variation="primary">Keep shopping</Button>
          </Link>
        </div>
      )} */}
      <div>
        <div className="w-full grid grid-cols-4 place-items-center">
          <span className="text-lg font-medium">Item</span>
          <span className="text-lg font-medium">Price</span>
          <span className="text-lg font-medium">Quantity</span>
          <span className="text-lg font-medium">Subtotal</span>
        </div>
      </div>
      <hr className="border-t border-neutral-300" />
      {cart.map((item, index) => (
        <div
          key={index}
          className="!py-6 grid grid-cols-4 place-items-center relative"
        >
          <div className="justify-self-start flex gap-3 items-center">
            <img
              src={item.image}
              className="w-24 h-18 rounded-sm object-cover"
            />
            <div className="flex flex-col">
              <p className="capitalize font-medium">{item.name}</p>
              <div className="flex justify-start items-center gap-2">
                Color:
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: `${item.color}`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <p className="font-medium text-brand-darker">$ {item.unitPrice}</p>

          <div className="w-[fit-content] grid grid-cols-3 place-items-center">
            <Button
              variation="amount-btn"
              handleClick={() =>
                dispatch(decreaseAmount({ id: item.id, color: item.color }))
              }
            >
              -
            </Button>
            <span> {item.quantity} </span>
            <Button
              variation="amount-btn"
              handleClick={() =>
                dispatch(increaseAmount({ id: item.id, color: item.color }))
              }
            >
              +
            </Button>
          </div>

          <p className="font-medium text-brand-darker">$ {item.totalPrice}</p>
          <button className="h-7 w-7 bg-red-500 text-white flex items-center justify-center rounded absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 ">
            <i class="bxr  bxs-trash"></i>
          </button>
        </div>
      ))}
      <hr className="border-t border-neutral-300" />
      <div className="flex justify-between items-center !my-3">
        <Button variation="primary">Keep shopping</Button>
        <Button variation="clear">Clear the cart</Button>
      </div>

      <p className="text-24 font-bold"> TOTAL: {sumPrice}</p>
    </div>
  );
}

export default Cart;
