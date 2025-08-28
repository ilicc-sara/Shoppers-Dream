import React from "react";

function Benefits(props) {
  const { icon, benefit, text } = props;
  return (
    <div className="flex max-w-[80rem] !mx-auto justify-center gap-[2rem]">
      <div className="bg-[#f5d0fe] w-[50px] h-[50px] rounded-[222px] flex justify-center items-center">
        <i class={`bxr ${icon} text-[#d946ef] text-[24px]`}></i>
      </div>
      <div className="w-[58rem] flex flex-col gap-[1.5rem] !mt-[1rem]">
        <p className="text-left font-bold text-[2rem]">{benefit}</p>
        <p className="text-left text-[1.5rem] leading-[2.8rem]">{text}</p>
      </div>
    </div>
  );
}

export default Benefits;
