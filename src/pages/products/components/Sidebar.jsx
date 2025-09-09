import React from "react";
import { categories, brands, colors } from "./helpers";
import Button from "../../../UI/Button";

function Sidebar(props) {
  const {
    searchValue,
    setSearchValue,
    filters,
    handleChangeFIlter,
    priceRangeValue,
    setPriceRangeValule,
    clearFilters,
  } = props;
  return (
    <div className="flex flex-col gap-5 max-mobile:hidden">
      <input
        type="search"
        placeholder="Search"
        className="bg-none border-[1px] border-brand-darker !pl-[10px]"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="flex flex-col items-start">
        <p className="text-base font-medium">Category</p>
        {categories.map((category, index) => (
          <p
            key={index}
            className={`text-base capitalize cursor-pointer ${
              filters.activeCategory === category.value ? "active" : ""
            }`}
            onClick={() => handleChangeFIlter({ category: category.value })}
          >
            {category.categoryName}
          </p>
        ))}
      </div>

      <div className="flex flex-col items-start">
        <p className="text-base font-medium">Company</p>
        <select
          type="text"
          className="bg-none border-[1px] border-brand-darker !pl-[10px] capitalize"
          value={filters.brandOptionValue ? filters.brandOptionValue : "all"}
          onChange={(e) => {
            if (e.target.value === "all") {
              handleChangeFIlter({ brand: null });
            } else {
              handleChangeFIlter({ brand: e.target.value });
            }
          }}
        >
          {brands.map((brand, index) => (
            <option className="capitalize" key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col items-start">
        <p className="text-base font-medium">Color</p>
        <div className="flex items-center justify-between gap-3">
          <div
            className={`${
              !filters.activeColor ? "active" : ""
            } capitalize cursor-pointer`}
            onClick={() => handleChangeFIlter({ color: null })}
          >
            all
          </div>
          {colors.map((color, index) => {
            const isActive = filters.activeColor == color.colorValue;
            return (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer`}
                style={{
                  backgroundColor: color.colorValue,
                  opacity: `${isActive ? 1 : 0.4}`,
                  scale: `${isActive ? 1.5 : 1}`,
                }}
                onClick={() => handleChangeFIlter({ color: color.colorValue })}
              ></div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-start">
        <p className="text-base font-medium">Price</p>
        <p className="text-base font-medium text-brand-darker">
          ${priceRangeValue}
        </p>
        <input
          type="range"
          value={priceRangeValue}
          min="0"
          max="3999"
          onChange={(e) => setPriceRangeValule(e.target.value)}
          className="w-[100%] cursor-pointer"
        />
      </div>

      <div className="flex gap-[10px]">
        <p className="text-base font-medium">Free Shipping</p>
        <input
          type="checkbox"
          checked={filters.freeShipppingValue}
          onChange={(e) => handleChangeFIlter({ shipping: e.target.checked })}
        />
      </div>

      <Button variation="clear" handleClick={() => clearFilters()}>
        Clear Filters
      </Button>
    </div>
  );
}

export default Sidebar;
