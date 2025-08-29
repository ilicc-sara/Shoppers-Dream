import React from "react";
import ExampleProducts from "./components/ExampleProducts";
import Button from "../../../../UI/Button";
import { exampleProductsImg } from "../helpers";

function ProductsSection() {
  return (
    <section className="border-b-[2px] border-b-[#d5d5d5] !py-[14rem]">
      <div className="max-w-[120rem] !mx-auto">
        <p className="text-left uppercase text-[1.4rem] text-[#d946ef] font-medium ">
          Featured products
        </p>
        <h1 className="text-[3.7rem] font-medium text-left text-[#444]">
          The art of modern living unlocked.
        </h1>

        <div className="flex justify-between !pt-[7rem] !pb-[4rem]">
          {exampleProductsImg.map((img, index) => (
            <ExampleProducts key={index} image={img} />
          ))}
        </div>
        <Button variation="primary">All Products</Button>
      </div>
    </section>
  );
}

export default ProductsSection;
