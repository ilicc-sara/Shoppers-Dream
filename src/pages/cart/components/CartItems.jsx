import {
  increaseAmount,
  decreaseAmount,
  deleteCartItem,
} from "../../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "../../../UI/Button";

function CartItems() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return cart.map((item, index) => (
    <div
      key={index}
      className="!py-6 grid grid-cols-4 place-items-center relative"
    >
      <div className="justify-self-start flex max-tablet:flex-col tablet:gap-3 max-tablet:gap-1 tablet:items-center max-tablet:items-start">
        <img src={item.image} className="w-24 h-18 rounded-sm object-cover" />
        <div className="flex flex-col">
          <p className="capitalize font-medium text-left max-mobile:text-xs">
            {item.name}
          </p>
          <div className="flex justify-start items-center gap-2 max-mobile:text-xs">
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

      <p className="font-medium text-brand-darker max-mobile:text-xs">
        $ {item.unitPrice}
      </p>

      <div className="w-[fit-content] grid grid-cols-3 place-items-center">
        <Button
          variation="amount-btn"
          handleClick={() =>
            dispatch(decreaseAmount({ id: item.id, color: item.color }))
          }
        >
          -
        </Button>
        <span className="max-mobile:text-xs"> {item.quantity} </span>
        <Button
          variation="amount-btn"
          handleClick={() =>
            dispatch(increaseAmount({ id: item.id, color: item.color }))
          }
        >
          +
        </Button>
      </div>

      <p className="font-medium text-brand-darker max-mobile:text-xs">
        $ {item.totalPrice}
      </p>
      <button
        onClick={() =>
          dispatch(deleteCartItem({ id: item.id, color: item.color }))
        }
        className="mobile:h-7 mobile:w-7 max-mobile:w-6 max-mobile:h-6 bg-red-500 text-white flex items-center justify-center rounded absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 "
      >
        <i class="bxr  bxs-trash"></i>
      </button>
    </div>
  ));
}

export default CartItems;
