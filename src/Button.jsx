import React from "react";

function Button(props) {
  const { variation, children } = props;
  let baseClassName = "btn";
  // "!py-[2.5rem] height-[5rem] text-[1.6rem] rounded-[5px] font-bold";
  let modifierClassName;

  if (variation === "primary") {
    // modifierClassName = "bc-[#d946ef] text-[#fff]";
    modifierClassName = "explore-btn";
  }

  if (variation === "secundary") {
    // modifierClassName = "bc-[#fff]";
    modifierClassName = "more-btn";
  }

  return (
    <button className={`${baseClassName} ${modifierClassName}`}>
      {children}
    </button>
  );
}

export default Button;
