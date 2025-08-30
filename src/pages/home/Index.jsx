import { useState, useEffect, useRef } from "react";
import Button from "@/UI/Button";
import HomeSection from "./components/homeSection/HomeSection";
import ProductsSection from "./components/productsSection/ProductsSection";
import CoreValuesSection from "./components/coreValuesSection/CoreValuesSection";
import BenefitsSection from "./components/benefitsSection/BenefitsSection";
import { testimonials } from "./components/helpers";
import Reveal from "./components/Reveal";

function Index() {
  const [time, setTime] = useState(5);
  const [width, setWidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const coreValuesRef = useRef();

  const scrollToCoreValues = () => {
    coreValuesRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  // requestAnimationFrame
  useEffect(() => {
    let time = 5;
    const tick = function () {
      time--;
      let timeString = String(time);
      setTime(timeString);
      setWidth((5 - time) * 20);

      if (time === 0) {
        clearInterval(timer);
      }
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

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
    <>
      <HomeSection scrollToCoreValues={scrollToCoreValues} />

      <Reveal>
        <ProductsSection />
      </Reveal>

      <Reveal>
        <CoreValuesSection coreValuesRef={coreValuesRef} />
      </Reveal>

      <Reveal>
        <BenefitsSection />
      </Reveal>

      <Reveal>
        <section className="border-b-[2px] border-b-[#d5d5d5] !py-[14rem]">
          <div className="max-w-[90rem] !mx-auto">
            <p className="text-left uppercase text-[1.4rem] text-[#d946ef] font-medium">
              Testimonials
            </p>
            <h1 className="text-[3.7rem] font-medium text-left text-[#444]">
              Discover the stories of our delighted customers - thousands and
              counting!
            </h1>

            <div className="flex w-[75rem] !mx-auto items-center relative h-[40rem] !my-[4rem] overflow-x-hidden">
              <Button
                variation="arrow-left"
                handleClick={() => changeCurrentSlideLeft()}
              >
                <i class="bxr  bx-arrow-left-stroke"></i>
              </Button>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="absolute top-10 !py-[1rem] !px-[8rem] flex flex-col gap-[2rem] ransition-transform duration-1000"
                  style={{
                    transform: `translateX(${(index - currentSlide) * 100}%)`,
                  }}
                >
                  <p className=" text-left text-[2.7rem] leading-[1.9rem] font-semibold">
                    {testimonial.header}
                  </p>
                  <div
                    style={{ width: `${width}%` }}
                    className={`bg-[#d946ef]  h-[0.5rem]`}
                  ></div>

                  <p className="text-left text-[1.5rem] leading-[2.8rem]">
                    {testimonial.text}
                  </p>

                  <div className="flex flex-col items-start !my-[2rem]">
                    <img
                      className="w-[5rem] h-[5rem] rounded-[222px] object-cover"
                      src={`${testimonial.image}`}
                    />
                    <p className="text-[1.4rem] font-medium">
                      {testimonial.name}
                    </p>
                    <p className="text-[1.2rem]">{testimonial.location}</p>
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
      </Reveal>
    </>
  );
}

export default Index;
