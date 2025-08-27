import { useState } from "react";
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
} from "./homeComponents/helpers";

const benefits = [
  {
    offer: "Get your home furnishings in a flash with rapid delivery.",
    offerText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, perspiciatis blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia.",
    offerIcon: "bx-bolt",
    id: 0,
  },
  {
    offer: "Always here to help: stellar support around the clock.",
    offerText:
      "Dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, plorem blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia minus sint, plorem ex harum.",
    offerIcon: "bx-handshake",
    id: 1,
  },
  {
    offer: "Stay ahead of the trends with our latest discoveries.",
    offerText:
      "Ipsum dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, pLorem blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia temporibus.",
    offerIcon: "bx-check",
    id: 2,
  },
  {
    offer: "No stress or worries for your home goods.",
    offerText:
      "Explicabo ipsum Error sit ametperspiciati consectetur voluptatibus elit. Error accusamus arc explicabo explictecto minus sint, se blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit sit amet architecto.",
    offerIcon: "bx-dollar-circle",
    id: 3,
  },
];

function App() {
  const [benefit, setBenefit] = useState(benefits[0]);

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
            <i class="bxr  bx-handshake"></i>
            <i class="bxr  bx-check"></i>
            <i class="bxr  bx-dollar-circle"></i>
            <i class="bxr  bx-bolt"></i>
          </h1>

          <div className="!mx-auto w-[95%] flex justify-between items-center !my-[5rem]">
            <Button
              variation="primary"
              handleClick={() => setBenefit(benefits[0])}
            >
              Swift Delivery
            </Button>
            <Button
              variation="secundary"
              handleClick={() => setBenefit(benefits[1])}
            >
              Stellar Support
            </Button>
            <Button
              variation="secundary"
              handleClick={() => setBenefit(benefits[2])}
            >
              Fresh Finds
            </Button>
            <Button
              variation="secundary"
              handleClick={() => setBenefit(benefits[3])}
            >
              Easy Returns
            </Button>
          </div>

          <Benefits
            icon={benefit.offerIcon}
            benefit={benefit.offer}
            text={benefit.offerText}
          />
        </div>
      </section>
    </>
  );
}

export default App;
