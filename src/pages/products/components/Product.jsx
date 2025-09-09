import React from "react";

function Product(props) {
  const { image, name, price } = props;
  return (
    <li className="furniture-item">
      <img
        src={image}
        alt="Furniture-Picture"
        className="desktop:h-48 desktop:w-87 laptop:h-45 laptop:w-82 smallLT:h-42 smallLT:w-80 tablet:h-45 tablet:w-82  max-tablet:h-42 max-tablet:w-82 rounded-lg object-cover"
        style={{ display: "block" }}
      />
      <div className="!mt-3 flex items-center justify-between">
        <h3 className="capitalize ">{name}</h3>
        <h3 className="text-brand-darker font-medium">$ {+price / 100}</h3>
      </div>
    </li>
  );
}

export default Product;
