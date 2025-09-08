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
        className="grid tablet:grid-cols-2 max-tablet:grid-rows-2 justify-center place-items-center 
      !mx-auto !my-[30px] desktop:w-6xl  laptop:w-5xl  smallLT:w-4xl  tablet:w-3xl "
      >
        <div className="flex flex-col gap-[20px] tablet:justify-start max-tablet:justify-center">
          <h1 className="font-bold text-[#404040] tablet:text-left max-tablet:text-center  desktop:!text-[48px] desktop:!leading-[67px] laptop:!text-[40px]  laptop:!leading-[57px] smallLT:!text-[34px] tablet:!text-[28px] tablet:!leading-[48px] max-mobile:!text-[34px] ">
            Furniture design to <br></br> make you feel at home
          </h1>
          <p className=" tracking-[0.5px] font-medium tablet:text-left max-tablet:text-center desktop:!text-[24px]  laptop:!text-[20px] ">
            Create your perfect space with our designs.
          </p>
          <div className="flex gap-[15px] w-[100%] tablet:justify-start max-tablet:justify-center">
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
        <div className="flex tablet:justify-end max-tablet:justify-center items-center w-[100%]">
          <img
            className="w-[490px] h-[570px] max-smallLT:w-[400px] max-smallLT:h-[465px]"
            src="./heroImg.png"
          />
        </div>
      </section>

      <footer className=" ">
        <div className="!py-[120px] !mx-auto flex flex-col gap-[30px] desktop:w-6xl  laptop:w-5xl  smallLT:w-4xl  tablet:w-3xl mobile:w-2xl smallmobile:w-[90%]">
          <p className="tablet:text-[14px] max-tablet:text-[12px] text-gray-500 uppercase font-semibold">
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
