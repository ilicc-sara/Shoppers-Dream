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
      <section
        className="grid tablet:grid-cols-2  justify-center place-items-center 
      !mx-auto !my-[30px] desktop:w-6xl desktop:bg-green-300 laptop:w-5xl laptop:bg-blue-400 smallLT:w-4xl smallLT:bg-red-300 tablet:w-3xl tablet:bg-pink-400"
      >
        <div className="flex flex-col gap-[20px] justify-start ">
          <h1 className="font-bold text-[#404040] text-left  desktop:!text-[48px] desktop:text-red-600 desktop:!leading-[67px] laptop:!text-[40px] laptop:text-blue-500 laptop:!leading-[57px] smallLT:!text-[34px] smallLT:text-yellow-600 tablet:!text-[28px] tablet:!leading-[48px] ">
            Furniture design to <br></br> make you feel at home
          </h1>
          <p className=" tracking-[0.5px] font-medium text-left desktop:!text-[24px] desktop:!text-red-300 laptop:!text-[20px] laptop:text-green-300">
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
          <img
            className="w-[490px] h-[570px] max-smallLT:w-[400px] max-smallLT:h-[465px]"
            src="./heroImg.png"
          />
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
