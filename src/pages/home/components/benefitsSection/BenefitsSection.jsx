import { useState } from "react";
import { benefits } from "../helpers";
import Benefits from "./components/Benefits";
import Button from "@/UI/Button";

function BenefitsSection() {
  const [benefit, setBenefit] = useState(benefits[0]);
  return (
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
  );
}

export default BenefitsSection;
