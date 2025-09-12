function CartHeader() {
  return (
    <div>
      <div className="w-full grid grid-cols-4 place-items-center">
        <span className="text-lg max-mobile:text-base font-medium">Item</span>
        <span className="text-lg max-mobile:text-base font-medium">Price</span>
        <span className="text-lg max-mobile:text-base font-medium">
          Quantity
        </span>
        <span className="text-lg max-mobile:text-base font-medium">
          Subtotal
        </span>
      </div>
    </div>
  );
}

export default CartHeader;
