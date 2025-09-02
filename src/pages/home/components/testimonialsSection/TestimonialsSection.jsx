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
      <div className="max-w-4xl !mx-auto">
        <p className="text-left uppercase text-[14px] text-[#d946ef] font-medium">
          Testimonials
        </p>
        <h1 className="text-[37px] font-medium text-left text-[#444]">
          Discover the stories of our delighted customers - thousands and
          counting!
        </h1>

        <div className="flex w-[750px] !mx-auto items-center relative h-[400px] !my-[40px] overflow-x-hidden">
          <Button
            variation="arrow-left"
            handleClick={() => changeCurrentSlideLeft()}
          >
            <i class="bxr  bx-arrow-left-stroke"></i>
          </Button>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="absolute top-10 !py-[10px] !px-[80px] flex flex-col gap-[20px] ransition-transform duration-1000"
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
              }}
            >
              <p className=" text-left text-[27px] leading-[19px] font-semibold">
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
                  className={`bg-[#d946ef]  h-[5px]`}
                ></motion.div>
              ) : (
                <div
                  className={`bg-[#d946ef]  h-[5px]`}
                  style={{ width: 0 }}
                ></div>
              )}

              <p className="text-left text-[15px] leading-[28px]">
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
