function CoreValues(props) {
  const { icon, value, text } = props;
  return (
    <div className=" laptop:w-[300px] smallLT:w-[280px] tablet:w-[240px] flex flex-col justify-start items-start gap-[10px]">
      <div className="bg-[#f5d0fe] w-[50px] h-[50px] rounded-[222px] flex justify-center items-center">
        <ion-icon name={icon} className="text-[#d946ef] text-[24px]"></ion-icon>
      </div>

      <p className="text-left font-bold text-[20px]">{value}</p>
      <p className="text-left text-[15px] leading-[28px]">{text}</p>
    </div>
  );
}

export default CoreValues;
