import React from "react";

function Product(props) {
  const { image, name, price } = props;
  return (
    <li className="furniture-item">
      <img
        src={image}
        alt="Furniture-Picture"
        className="h-48 w-87 rounded-lg object-cover"
        style={{ display: "block" }}
      />
      <div className="!mt-3 flex items-center justify-between">
        <h3 className="capitalize">{name}</h3>
        <h3 className="text-brand-darker font-medium">$ {+price / 100}</h3>
      </div>
    </li>
  );
}

export default Product;
