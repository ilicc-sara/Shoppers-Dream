import { base } from "framer-motion/client";
import React from "react";

function Button(props) {
  const { variation, children, handleClick } = props;
  let baseClassName =
    "!px-5 !py-3 tablet:text-base max-tablet:text-sm rounded-md font-semibold border-0";
  let operationsBase =
    "!py-3 tablet:!px-5 mobile:!px-5 smallmobile:!px-2  tablet:text-base mobile:text-sm smallmobile:text-xs rounded-md font-semibold border-0";
  let arrBaseClassName =
    "text-3xl h-[50px] w-[50px] border-none rounded-full bg-[rgba(255,255,255,0.702)] transition-all duration-300 flex justify-center items-center shadow-[0_0_5px_rgba(0,0,0,0.1)] absolute z-10 top-[35%]";

  let modifierClassName;

  if (variation === "primary") {
    modifierClassName =
      "bg-brand-pink text-white transition-all duration-300 hover:bg-brand-darker";
  }

  if (variation === "secundary") {
    modifierClassName =
      "bg-white transition-all duration-300 hover:bg-brand-gray";
  }

  if (variation === "operations-primary") {
    baseClassName = operationsBase;
    modifierClassName =
      "bg-brand-pink text-white transition-all duration-300 hover:bg-brand-darker";
  }

  if (variation === "operations-secundary") {
    baseClassName = operationsBase;
    modifierClassName =
      "bg-white transition-all duration-300 hover:bg-brand-gray";
  }

  if (variation === "arrow-left") {
    baseClassName = arrBaseClassName;
    modifierClassName = "left-[5px]";
  }

  if (variation === "arrow-right") {
    baseClassName = arrBaseClassName;
    modifierClassName = "right-[5px]";
  }

  if (variation === "clear") {
    modifierClassName = "bg-red-500 text-white w-30 h-14";
  }

  return (
    <button
      className={`${baseClassName} ${modifierClassName}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
