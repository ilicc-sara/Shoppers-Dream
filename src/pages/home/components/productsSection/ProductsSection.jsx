import ExampleProducts from "./components/ExampleProducts";
import Button from "@/UI/Button";
import { exampleProductsImg } from "../helpers";
import { Link } from "react-router-dom";

function ProductsSection() {
  return (
    <section className="border-b-[2px] border-b-[#d5d5d5] !py-[140px]">
      <div className="max-w-6xl !mx-auto">
        <p className="text-left uppercase text-[14px] text-brand-pink font-medium ">
          Featured products
        </p>
        <h1 className="text-[37px] font-medium text-left text-[#444]">
          The art of modern living unlocked.
        </h1>

        <div className="flex justify-between !pt-[70px] !pb-[40px]">
          {exampleProductsImg.map((img, index) => (
            <ExampleProducts key={index} image={img} />
          ))}
        </div>
        <Link to="/products">
          <Button variation="primary">All Products</Button>
        </Link>
      </div>
    </section>
  );
}

export default ProductsSection;
