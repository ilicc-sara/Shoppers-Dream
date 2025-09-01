import { useState } from "react";
import { benefits } from "../helpers";
import Benefits from "./components/Benefits";
import Button from "@/UI/Button";

function BenefitsSection() {
  const [benefit, setBenefit] = useState(benefits[0]);
  return (
    <section className="border-b-[2px] border-b-[#d5d5d5] !py-[140px]">
      <div className="max-w-[900px] !mx-auto">
        <p className="text-left uppercase text-[14px] text-[#d946ef] font-medium">
          Operations
        </p>
        <h1 className="text-[37px] font-medium text-left text-[#444]">
          Where simplicity meets efficiency to bring your home to life.
        </h1>

        <div className="!mx-auto w-[95%] flex justify-between items-center !my-[50px]">
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
