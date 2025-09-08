function FeaturesImg({ image }) {
  return (
    <img
      className="brightness-0 opacity-50 featured-img laptop:h-[30px] smallLT:h-[25px] tablet:h-[20px] max-tablet:h-[15px] "
      src={image}
    />
  );
}

export default FeaturesImg;
