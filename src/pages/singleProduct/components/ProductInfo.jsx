import React from "react";

function ProductInfo({ product }) {
  return (
    <>
      <p className="single-product-name capitalize text-3xl font-bold">
        {product.name}
      </p>
      <div className="flex gap-2 items-center justify-center w-[fit-content]">
        <span className="text-yellow-600">{product.stars}</span>
        <div>
          <i class="bxr  bxs-star text-yellow-600"></i>
          <i class="bxr  bxs-star text-yellow-600"></i>
          <i class="bxr  bxs-star text-yellow-600"></i>
          <i class="bxr  bxs-star text-yellow-600"></i>
          <i class="bxr  bxs-star text-yellow-600"></i>
        </div>
        <p> ({product.reviews} customers rating) </p>
      </div>
      <p className="font-medium text-brand-darker">$ {product.price / 100}</p>

      <p className="desktop:text-base laptop:text-sm smallLT:text-sm max-smallLT:text-xs max-tablet:text-base ">
        {product.description}
      </p>

      <p>
        <span className="font-semibold">Available: </span> {product.stock}
      </p>

      <p>
        <span className="font-semibold">SKU: </span> {product.id}
      </p>

      <p>
        <span className="font-semibold">Available Brand: </span>
        {product.company}
      </p>
    </>
  );
}

export default ProductInfo;
