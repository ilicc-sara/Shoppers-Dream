import React from "react";

function ProductColors(props) {
  const { product, activeColor, setActiveColor } = props;
  return (
    <div className="flex gap-4 items-center justify-center w-[fit-content]">
      <span className="font-semibold">Colors:</span>
      <div className="flex gap-3">
        {product.colors.map((color, index) => {
          const isActive = activeColor == color;
          return (
            <div
              key={index}
              className="w-3 h-3 rounded-full cursor-pointer"
              style={{
                backgroundColor: color,
                opacity: `${isActive ? 1 : 0.4}`,
                scale: `${isActive ? 1.5 : 1}`,
              }}
              onClick={() => setActiveColor(color)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductColors;
