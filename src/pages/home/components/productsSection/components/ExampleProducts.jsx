function ExampleProducts({ image, name, price, id }) {
  return (
    <div className="flex flex-col gap-[10px] transition-all duration-700 ease-out hover:-translate-y-3">
      <img
        className="rounded desktop:h-[240px] laptop:h-[220px] smallLT:h-[180px] tablet:h-[160px] mobile:h-[140px]"
        src={image}
      />
      <div className="flex justify-between">
        <span className="text-[#444] font-semibold text-[16px]">{name}</span>
        <span className="text-[#d946ef] text-[16px] font-semibold">
          $ {price}
        </span>
      </div>
    </div>
  );
}

export default ExampleProducts;
