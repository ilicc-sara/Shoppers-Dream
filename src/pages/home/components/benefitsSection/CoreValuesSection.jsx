import CoreValues from "./components/CoreValues";
import { pillars } from "../helpers";

function CoreValuesSection({ coreValuesRef }) {
  return (
    <section
      ref={coreValuesRef}
      className="border-b-[2px] border-b-[#d5d5d5] !py-[14rem]"
    >
      <div className="max-w-[120rem] !mx-auto">
        <p className="text-left uppercase text-[1.4rem] text-[#d946ef] font-medium">
          Creeds we live by
        </p>
        <h1 className="text-[3.7rem] font-medium text-left text-[#444]">
          Elevate your home with our attitude of excellence and timeless style.
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
  );
}

export default CoreValuesSection;
