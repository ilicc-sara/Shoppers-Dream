import ExampleProducts from "./components/ExampleProducts";
import Button from "@/UI/Button";
import { exampleProductsImg } from "../helpers";
import { Link } from "react-router-dom";

function ProductsSection() {
  return (
    <section className="border-b-[2px] border-b-[#d5d5d5] !py-[140px]">
      <div className="!mx-auto desktop:w-6xl  laptop:w-5xl  smallLT:w-4xl  tablet:w-3xl mobile:w-2xl smallmobile:w-[90%]">
        <p className="text-left uppercase text-brand-pink font-medium text-[14px] ">
          Featured products
        </p>
        <h1 className="font-medium text-left text-[#444]  laptop:!text-[37px] smallLT:!text-[32px] tablet:!text-[28px] max-tablet:!text-[26px]">
          The art of modern living unlocked.
        </h1>

        <div className="flex justify-between !pt-[70px] !pb-[40px] max-mobile:flex-col max-mobile:w-[70%] max-mobile:!mx-auto max-mobile:gap-6">
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
