import React from "react";

function ExampleProducts({ image }) {
  return (
    <div className="flex flex-col gap-[1rem] ">
      <img className="h-[25rem]" src={image} />
      <div className="flex justify-between">
        <span className="text-[#444] font-semibold text-[1.6rem]">
          Suede Armchair
        </span>
        <span className="text-[#d946ef] text-[1.6rem] font-semibold">
          $159.99
        </span>
      </div>
    </div>
  );
}

export default ExampleProducts;
