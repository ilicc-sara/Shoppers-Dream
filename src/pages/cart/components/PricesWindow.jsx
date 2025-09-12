import React from "react";
import { useSelector } from "react-redux";
import { priceSum } from "../../../redux/cartSlice";

function PricesWindow() {
  const cart = useSelector((state) => state.cart);
  const sumPrice = useSelector((state) => priceSum(state));
  const shippingFee = cart.some((item) => !item.shipping) ? 7.25 : 0.0;
  return (
    <div className=" flex flex-col gap-3 w-100 !ml-auto text-left !p-8 !my-8 shadow-[0_0_7px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between items-center ">
        <span className="text-lg font-semibold"> Subtotal: </span>{" "}
        <span className="text-lg font-semibold">$ {sumPrice}</span>
      </div>
      <div className="flex justify-between items-center ">
        <span className="text-base">Shipping fee:</span>{" "}
        <span className="text-base">$ {shippingFee.toFixed(2)}</span>
      </div>
      <hr className="border-t border-neutral-300" />
      <div className="flex justify-between items-center ">
        <span className="text-xl font-bold">Total:</span>
        <span className="text-xl font-bold">
          $ {(Number(sumPrice) + Number(shippingFee)).toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default PricesWindow;
