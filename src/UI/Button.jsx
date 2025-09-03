import React from "react";

function Button(props) {
  const { variation, children, handleClick } = props;
  let baseClassName = "!px-6 h-12 text-base rounded-md font-semibold border-0";
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

  if (variation === "arrow-left") {
    baseClassName = arrBaseClassName;
    modifierClassName = "left-[5px]";
  }

  if (variation === "arrow-right") {
    baseClassName = arrBaseClassName;
    modifierClassName = "right-[5px]";
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
