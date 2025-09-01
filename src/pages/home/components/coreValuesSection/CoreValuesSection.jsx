import CoreValues from "./components/CoreValues";
import { pillars } from "../helpers";

function CoreValuesSection({ coreValuesRef }) {
  return (
    <section
      ref={coreValuesRef}
      className="border-b-[2px] border-b-[#d5d5d5] !py-[140px]"
    >
      <div className="max-w-[1200px] !mx-auto">
        <p className="text-left uppercase text-[14px] text-[#d946ef] font-medium">
          Creeds we live by
        </p>
        <h1 className="text-[37px] font-medium text-left text-[#444]">
          Elevate your home with our attitude of excellence and timeless style.
        </h1>

        <div className="flex justify-between !mt-[60px] !mb-[30px]">
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
