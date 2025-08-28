import { useState, useEffect, useRef } from "react";
import "./App.css";
import ExampleProducts from "./homeComponents/ExampleProducts";
import FeaturesImg from "./homeComponents/FeaturesImg";
import Button from "./Button";
import CoreValues from "./homeComponents/CoreValues";
import Benefits from "./homeComponents/Benefits";
import {
  featuresImg,
  exampleProductsImg,
  pillars,
  benefits,
} from "./homeComponents/helpers";

const testimonials = [
  {
    header: "These pieces transformed my home!",
    text: "The level of hospitality and professionalism shown by the company made my shopping experience a breeze. The modern designs and top-quality materials of these products exceeded my expectations, and I couldn't be happier with my purchase!",
    name: "Anastasiya Petrova",
    location: "Kyiv, Ukraine",
    image: "./testimonialsPeople/human1.webp",
  },
  {
    header: "My space now finally feels complete.",
    text: "The beautiful furniture pieces I purchased fit perfectly in my home and bring me so much joy every day. The quality and modern design exceeded my expectations, and the entire experience with your company was seamless.",
    name: "Sophie Martin",
    location: "Paris, France",
    image: "./testimonialsPeople/human2.jpg",
  },
  {
    header: "You guys brought vision back to my life.",
    text: "I cannot speak highly enough of the quality of the products I received from this company. The attention to detail and craftsmanship is unparalleled. I am so grateful to have found such a reliable and professional source for my furniture needs.",
    name: "Tyron Mayers",
    location: "San Francisco, USA",
    image: "./testimonialsPeople/human3.jpg",
  },
  {
    header: "Can't believe I have been missing on this!",
    text: "The furniture I found on this e-commerce store was exactly what I was looking for. The pieces have truly transformed my home and brought my vision to life, adding a touch of sophistication and elegance to every corner.",
    name: "Vinney Malesh",
    location: "Los Angeles, USA",
    image: "./testimonialsPeople/human4.jpg",
  },
];

function App() {
  const [time, setTime] = useState("5");

  const [benefit, setBenefit] = useState(benefits[0]);

  const [width, setWidth] = useState(0);

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

  console.log(time);

  return (
    <>
      <nav className="!mx-auto !my-[2rem] flex justify-between max-w-[120rem]">
        <div className="text-[2.2rem] font-medium flex items-center justify-center gap-[15px]">
          <ion-icon name="bag-outline" class="w-[24px] h-[24px]"></ion-icon>
          <span>X Shopper's Dream</span>
        </div>

        <div className="flex align-center justify-center gap-[15px]">
          <a href="#" className="text-[1.6rem] underline decoration-[#d946ef]">
            Home
          </a>
          <a href="#" className="text-[1.6rem] ">
            Products
          </a>
        </div>

        <div className="relative text-[2rem] flex justify-center items-start gap-[5px]">
          <span className="text-[1.8rem]">Cart</span>
          <ion-icon name="bag-outline" className="w-[24px] h-[24px]"></ion-icon>
          <div className="text-[14px] padding-[2px] bg-[#d946ef] text-white w-[2rem] h-[2rem] flex justify-center items-center rounded-[222px] absolute -top-[px] -right-[8px]">
            0
          </div>
        </div>
      </nav>

      <section className="grid grid-cols-2 justify-center place-items-center !mx-auto my-12 max-w-[1200px]">
        <div className="flex flex-col gap-[2rem] justify-start">
          <h1 className="text-[4.8rem] leading-[6.7rem] font-bold text-[#404040] text-left">
            Furniture design to <br></br> make you feel at home
          </h1>
          <p className="text-[2.4rem] tracking-[0.5px] font-medium text-left">
            Create your perfect space with our designs.
          </p>
          <div className="flex gap-[15px]">
            <Button variation="primary">Explore products</Button>
            <Button variation="secundary">Learn more &darr;</Button>
          </div>
        </div>
        <div className="heading-section-img">
          <img className="heading-img" src="./heroImg.png" />
        </div>
      </section>

      <footer className=" border-b-[2px] border-b-[#d5d5d5]">
        <div className="!py-[12rem] !mx-auto flex flex-col gap-[30px] max-w-[120rem]">
          <p className="text-[1.4rem] text-gray-500 uppercase font-semibold">
            As featured in
          </p>
          <div className=" flex justify-between ">
            {featuresImg.map((img, index) => (
              <FeaturesImg key={index} image={img} />
            ))}
          </div>
        </div>
      </footer>

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

      <section className="border-b-[2px] border-b-[#d5d5d5] !py-[14rem]">
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
            <button className="arrow-btn">
              <i class="bxr  bx-arrow-left-stroke"></i>
            </button>
            <div className="flex flex-col items-start max-w-[58rem] !mx-auto gap-[1.5rem] !my-[6rem]">
              <p className=" text-left text-[2.8rem] leading-[1.9rem] font-semibold">
                {testimonials[0].header}
              </p>
              <div className={`bg-[#d946ef] w-[${width}%] h-[0.5rem]`}></div>

              <p className="text-left text-[1.5rem] leading-[2.8rem]">
                {testimonials[0].text}
              </p>
              <img
                className="w-[5rem] h-[5rem] rounded-[222px] object-cover"
                src={`${testimonials[0].image}`}
              />
              <p>{testimonials[0].name}</p>
              <p>{testimonials[0].location}</p>
            </div>

            <button className="arrow-btn">
              <i class="bxr  bx-arrow-right-stroke"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
