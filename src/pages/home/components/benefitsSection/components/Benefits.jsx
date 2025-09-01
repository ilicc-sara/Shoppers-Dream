function Benefits(props) {
  const { icon, benefit, text } = props;
  return (
    <div className="flex max-w-[800px] !mx-auto justify-center gap-[20px]">
      <div className="bg-[#f5d0fe] w-[50px] h-[50px] rounded-[222px] flex justify-center items-center">
        <i class={`bxr ${icon} text-[#d946ef] text-[24px]`}></i>
      </div>
      <div className="w-[580px] flex flex-col gap-[15px] !mt-[10px]">
        <p className="text-left font-bold text-[20px]">{benefit}</p>
        <p className="text-left text-[15px] leading-[28px]">{text}</p>
      </div>
    </div>
  );
}

export default Benefits;
