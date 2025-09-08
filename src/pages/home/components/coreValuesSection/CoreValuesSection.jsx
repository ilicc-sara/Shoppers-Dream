import CoreValues from "./components/CoreValues";
import { pillars } from "../helpers";

function CoreValuesSection({ coreValuesRef }) {
  return (
    <section
      ref={coreValuesRef}
      className="border-b-[2px] border-b-[#d5d5d5] !py-[140px]"
    >
      <div className="!mx-auto desktop:w-6xl  laptop:w-5xl  smallLT:w-4xl  tablet:w-3xl mobile:w-2xl smallmobile:w-[90%]">
        <p className="text-left uppercase text-[14px] text-brand-pink font-medium">
          Creeds we live by
        </p>
        <h1 className="font-medium text-left text-[#444] laptop:!text-[37px] smallLT:!text-[32px] tablet:!text-[28px] max-tablet:!text-[26px]">
          Elevate your home with our attitude of excellence and timeless style.
        </h1>

        <div className="flex justify-between !mt-[60px] !mb-[30px] max-tablet:flex-col max-tablet:gap-6">
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
  );
}

export default CoreValuesSection;
