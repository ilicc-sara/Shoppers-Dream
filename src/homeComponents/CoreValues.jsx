import React from "react";

function CoreValues(props) {
  const { icon, value, text } = props;
  return (
    <div className=" w-[30rem] flex flex-col justify-start items-start gap-[1rem]">
      <div className="bg-[#f5d0fe] w-[50px] h-[50px] rounded-[222px] flex justify-center items-center">
        <ion-icon name={icon} className="text-[#d946ef] text-[24px]"></ion-icon>
      </div>

      <p className="text-left font-bold text-[2rem]">{value}</p>
      <p className="text-left text-[1.5rem] leading-[2.8rem]">{text}</p>
    </div>
  );
}

export default CoreValues;
