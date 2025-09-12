function ProductImage(props) {
  const { displayImage, product, setDisplayImage } = props;
  return (
    <div className="pictures-cont">
      <img
        src={displayImage}
        alt="Furniture-Picture"
        className="w-full rounded-lg object-cover desktop:h-125 laptop:h-120 smallLT:h-115 tablet:h-105 mobile:h-120 smallmobile:h-105"
      />

      <div className="!mt-5 flex w-full justify-between">
        {product?.images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt="Furniture-Picture"
            className="desktop:w-24 desktop:h-16 laptop:h-15 laptop:w-22 smallLT:h-14 smallLT:w-19 tablet:h-12 tablet:w-17 mobile:w-24 mobile:h-16 smallmobile:h-14  smallmobile:w-18 rounded-sm object-cover"
            onClick={(e) => setDisplayImage(e.target.src)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImage;
