import { Link } from "react-router-dom";
import Button from "@/UI/Button";
import FeaturesImg from "./components/FeaturesImg";
import { featuresImg } from "../helpers";

function HomeSection({ scrollToCoreValues, homeSectionRef }) {
  return (
    <section
      ref={homeSectionRef}
      className="flex flex-col w-full border-b-[2px] border-b-[#d5d5d5]"
    >
      <section className="grid grid-cols-2 justify-center place-items-center !mx-auto !my-[30px] max-w-6xl">
        <div className="flex flex-col gap-[20px] justify-start">
          <h1 className="text-[48px] leading-[67px] font-bold text-[#404040] text-left">
            Furniture design to <br></br> make you feel at home
          </h1>
          <p className="text-[24px] tracking-[0.5px] font-medium text-left">
            Create your perfect space with our designs.
          </p>
          <div className="flex gap-[15px]">
            <Link to="/products">
              <Button variation="primary">Explore products</Button>
            </Link>
            <Button
              variation="secundary"
              handleClick={() => scrollToCoreValues()}
            >
              Learn more &darr;
            </Button>
          </div>
        </div>
        <div className="flex justify-end items-center w-[100%]">
          <img className="w-[490px] h-[570px]" src="./heroImg.png" />
        </div>
      </section>

      <footer className=" ">
        <div className="!py-[120px] !mx-auto flex flex-col gap-[30px] max-w-6xl">
          <p className="text-[14px] text-gray-500 uppercase font-semibold">
            As featured in
          </p>
          <div className=" flex justify-between ">
            {featuresImg.map((img, index) => (
              <FeaturesImg key={index} image={img} />
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}

export default HomeSection;
