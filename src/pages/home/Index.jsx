import { useState, useEffect, useRef } from "react";
import ExampleProducts from "./components/productsSection/components/ExampleProducts";
import FeaturesImg from "./components/homeSection/components/FeaturesImg";
import Button from "../../UI/Button";
import CoreValues from "./components/CoreValues";
import Benefits from "./components/Benefits";
import HomeSection from "./components/homeSection/HomeSection";
import ProductsSection from "./components/productsSection/ProductsSection";

import {
  featuresImg,
  exampleProductsImg,
  pillars,
  benefits,
  testimonials,
} from "./components/helpers";
import Reveal from "./components/Reveal";

function Index() {
  const [time, setTime] = useState(5);
  const [benefit, setBenefit] = useState(benefits[0]);
  const [width, setWidth] = useState(0);

  const benefitsRef = useRef();

  const scrollToBenefits = () => {
    benefitsRef.current.scrollIntoView({
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

  return (
    <>
      <HomeSection />

      <Reveal>
        <ProductsSection />
      </Reveal>

      <Reveal>
        <section
          ref={benefitsRef}
          className="border-b-[2px] border-b-[#d5d5d5] !py-[14rem]"
        >
          <div className="max-w-[120rem] !mx-auto">
            <p className="text-left uppercase text-[1.4rem] text-[#d946ef] font-medium">
              Creeds we live by
            </p>
            <h1 className="text-[3.7rem] font-medium text-left text-[#444]">
              Elevate your home with our attitude of excellence and timeless
              style.
            </h1>

            <div className="flex justify-between !mt-[6rem] !mb-[3rem]">
              {pillars.map((pillar, index) => (
                <CoreValues
                  key={index}
                  icon={pillar.iconName}
                  value={pillar.coreValue}
                  text={pillar.description}
                />
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-b-[2px] border-b-[#d5d5d5] !py-[14rem]">
          <div className="max-w-[90rem] !mx-auto">
            <p className="text-left uppercase text-[1.4rem] text-[#d946ef] font-medium">
              Operations
            </p>
            <h1 className="text-[3.7rem] font-medium text-left text-[#444]">
              Where simplicity meets efficiency to bring your home to life.
            </h1>

            <div className="!mx-auto w-[95%] flex justify-between items-center !my-[5rem]">
              {benefits.map((offer, index) => (
                <Button
                  key={index}
                  variation={`${
                    benefit.button === offer.button ? "primary" : "secundary"
                  }`}
                  handleClick={() => setBenefit(benefits[offer.id])}
                >
                  {offer.button}
                </Button>
              ))}
            </div>

            <Benefits
              icon={benefit.offerIcon}
              benefit={benefit.offer}
              text={benefit.offerText}
            />
          </div>
        </section>
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

            <div className="flex max-w-[70rem] !mx-auto items-center">
              <Button variation="arrow" handleClick={() => {}}>
                <i class="bxr  bx-arrow-left-stroke"></i>
              </Button>
              <div className="flex flex-col items-start max-w-[58rem] !mx-auto gap-[1.5rem] !my-[6rem]">
                <p className=" text-left text-[2.8rem] leading-[1.9rem] font-semibold">
                  {testimonials[0].header}
                </p>
                <div
                  style={{ width: `${width}%` }}
                  className={`bg-[#d946ef]  h-[0.5rem]`}
                ></div>

                <p className="text-left text-[1.5rem] leading-[2.8rem]">
                  {testimonials[0].text}
                </p>

                <div className="flex flex-col items-start !my-[2rem]">
                  <img
                    className="w-[5rem] h-[5rem] rounded-[222px] object-cover"
                    src={`${testimonials[0].image}`}
                  />
                  <p className="text-[1.4rem] font-medium">
                    {testimonials[0].name}
                  </p>
                  <p className="text-[1.2rem]">{testimonials[0].location}</p>
                </div>
              </div>
              <Button variation="arrow" handleClick={() => {}}>
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
