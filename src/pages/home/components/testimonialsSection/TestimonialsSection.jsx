import { useState } from "react";
import Button from "@/UI/Button";
import { testimonials } from "../helpers";
import { motion } from "framer-motion";

function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function changeCurrentSlideRight() {
    setCurrentSlide((prev) => {
      if (prev !== testimonials.length - 1) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  }

  function changeCurrentSlideLeft() {
    setCurrentSlide((prev) => {
      if (prev !== 0) {
        return prev - 1;
      } else {
        return testimonials.length - 1;
      }
    });
  }
  return (
    <section className="border-b-[2px] border-b-[#d5d5d5] !py-[140px]">
      <div className="!mx-auto desktop:w-6xl  laptop:w-5xl  smallLT:w-4xl  tablet:w-3xl mobile:w-2xl smallmobile:w-[90%]">
        <p className="text-left uppercase text-[14px] text-brand-pink font-medium">
          Testimonials
        </p>
        <h1 className="font-medium text-left text-[#444] laptop:!text-[37px] smallLT:!text-[32px] tablet:!text-[28px] max-tablet:!text-[26px]">
          Discover the stories of our delighted customers - thousands and
          counting!
        </h1>

        <div className="flex desktop:w-3xl laptop:w-3xl smallLT:w-2xl tablet:w-2xl mobile:w-xl smallmobile:w-[100%] !mx-auto items-center relative h-[500px] !my-[40px] overflow-x-hidden">
          <Button
            variation="arrow-left"
            handleClick={() => changeCurrentSlideLeft()}
          >
            <i class="bxr  bx-arrow-left-stroke"></i>
          </Button>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="absolute top-10 !py-[10px] !px-[80px] flex flex-col tablet:gap-5 max-tablet:gap-4 transition-transform duration-1000"
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
              }}
            >
              <p className=" text-left tablet:text-[27px] max-tablet:text-[23px] leading-[28px] font-semibold">
                {testimonial.header}
              </p>
              {currentSlide === index ? (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5 }}
                  onAnimationComplete={() => {
                    changeCurrentSlideRight();
                  }}
                  className={`bg-brand-pink h-[5px]`}
                ></motion.div>
              ) : (
                <div
                  className={`bg-brand-pink h-[5px]`}
                  style={{ width: 0 }}
                ></div>
              )}

              <p className="text-left tablet:text-[15px] tablet:leading-[28px]  max-tablet:text-[12px] max-tablet:leading-[24px]">
                {testimonial.text}
              </p>

              <div className="flex flex-col items-start !my-[20]">
                <img
                  className="w-[50px] h-[50px] rounded-[222px] object-cover"
                  src={`${testimonial.image}`}
                />
                <p className="text-[14px] font-medium">{testimonial.name}</p>
                <p className="text-[12px]">{testimonial.location}</p>
              </div>
            </div>
          ))}
          <Button
            variation="arrow-right"
            handleClick={() => changeCurrentSlideRight()}
          >
            <i class="bxr  bx-arrow-right-stroke"></i>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
