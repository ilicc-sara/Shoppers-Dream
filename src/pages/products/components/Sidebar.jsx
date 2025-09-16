import { categories, brands, colors } from "./helpers";
import Button from "../../../UI/Button";

function Sidebar(props) {
  const { filters, handleChangeFIlter, clearFilters, data, products } = props;
  return (
    <div className="flex flex-col gap-5 max-mobile:w-[70%] max-mobile:!mx-auto">
      <input
        type="search"
        placeholder="Search"
        className="bg-none border-[1px] border-brand-darker !pl-[10px]"
        value={filters.search}
        onChange={(e) =>
          handleChangeFIlter({ key: "search", value: e.target.value })
        }
      />
      <div className="flex flex-col items-start">
        <p className="text-base font-medium">Category</p>
        {/* prettier-ignore */}
        <p className={`text-base capitalize cursor-pointer ${filters.activeCategory === null ? "active" : ""}`} onClick={() => handleChangeFIlter({key: "activeCategory", value: null, })}> all </p>

        {data.postCategories.map((category, index) => (
          <p
            key={index}
            className={`text-base capitalize cursor-pointer ${
              filters.activeCategory === category ? "active" : ""
            }`}
            onClick={() =>
              handleChangeFIlter({
                key: "activeCategory",
                value: category,
              })
            }
          >
            {category}
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
              handleChangeFIlter({ key: "brandOptionValue", value: null });
            } else {
              handleChangeFIlter({
                key: "brandOptionValue",
                value: e.target.value,
              });
            }
          }}
        >
          <option className="capitalize" value="all">
            all
          </option>
          {data.postBrands.map((brand, index) => (
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
            onClick={() =>
              handleChangeFIlter({ key: "activeColor", value: null })
            }
          >
            all
          </div>
          {data.postColors.map((color, index) => {
            const isActive = filters.activeColor == color;
            return (
              <div
                key={index}
                className="w-3 h-3 rounded-full cursor-pointer"
                style={{
                  backgroundColor: color,
                  opacity: `${isActive ? 1 : 0.4}`,
                  scale: `${isActive ? 1.5 : 1}`,
                }}
                onClick={() =>
                  handleChangeFIlter({
                    key: "activeColor",
                    value: color,
                  })
                }
              ></div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-start">
        <p className="text-base font-medium">Price</p>
        <p className="text-base font-medium text-brand-darker">
          ${filters.priceRange}
        </p>
        <input
          type="range"
          value={filters.priceRange}
          min="0"
          max="3999"
          onChange={(e) =>
            handleChangeFIlter({ key: "priceRange", value: e.target.value })
          }
          className="w-[100%] cursor-pointer"
        />
      </div>

      <div className="flex gap-[10px]">
        <p className="text-base font-medium">Free Shipping</p>
        <input
          type="checkbox"
          checked={filters.freeShipppingValue}
          onChange={(e) =>
            handleChangeFIlter({
              key: "freeShipppingValue",
              value: e.target.checked,
            })
          }
        />
      </div>

      <Button variation="clear" handleClick={() => clearFilters()}>
        Clear Filters
      </Button>
    </div>
  );
}

export default Sidebar;
