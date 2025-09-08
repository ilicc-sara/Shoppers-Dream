function ExampleProducts({ image }) {
  return (
    <div className="flex flex-col gap-[10px] ">
      <img
        className="desktop:h-[240px] laptop:h-[220px] smallLT:h-[180px] tablet:h-[160px] mobile:h-[140px]"
        src={image}
      />
      <div className="flex justify-between">
        <span className="text-[#444] font-semibold text-[16px]">
          Suede Armchair
        </span>
        <span className="text-[#d946ef] text-[16px] font-semibold">
          $159.99
        </span>
      </div>
    </div>
  );
}

export default ExampleProducts;
