import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { act } from "react";

function Products() {
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          "https://www.course-api.com/react-store-products"
        );
        const posts = await response.json();
        setProducts(posts);
        setActiveProducts(posts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, []);
  const [products, setProducts] = useState(null);
  const [activeProducts, setActiveProducts] = useState(null);
  // input values
  const [searchValue, setSearchValue] = useState("");
  const [priceRangeValue, setPriceRangeValule] = useState("3999");
  const [sortValue, setSortValue] = useState("price-lowest");

  // filters
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const [brandOptionValue, setBrandOptionValue] = useState(null);
  const [freeShipppingValue, setFreeShippingValue] = useState(false);

  const filteredProducts = useMemo(() => {
    return activeProducts
      ?.filter(
        (product) =>
          product.name.toLowerCase().includes(searchValue.toLowerCase()) &&
          +product.price / 100 <= Number(priceRangeValue)
      )
      .sort((a, b) => {
        // prettier-ignore
        if (sortValue === "a-b") return a.name.localeCompare(b.name);
        // prettier-ignore
        if (sortValue === "b-a") return b.name.localeCompare(a.name);
        // prettier-ignore
        if (sortValue === "price-highest") return b.price - a.price ;
        //prettier-ignore
        if (sortValue === "price-lowest") return a.price - b.price ;
      });
  }, [activeProducts, searchValue, priceRangeValue, sortValue]);

  useEffect(() => {
    // function filterProducts(category, color) {
    //   if (!category && !color) {
    //     setActiveProducts(products);
    //   } else if (category && !color) {
    //     const filteredProducts = products.filter(
    //       (product) => product.category === category
    //     );
    //     setActiveProducts(filteredProducts);
    //   } else if (!category && color) {
    //     const filteredProducts = products.filter((product) =>
    //       product.colors.includes(color)
    //     );
    //     setActiveProducts(filteredProducts);
    //   } else if (category && color) {
    //     const filteredProducts = products.filter(
    //       (product) =>
    //         product.colors.includes(color) && product.category === category
    //     );
    //     setActiveProducts(filteredProducts);
    //   }
    // }
    // return filterProducts(activeCategory, activeColor);

    function filterProducts(category, color, brand, shipping) {
      const result = products?.filter((product) => {
        const matchesCategory = category
          ? product.category === category
          : product;
        const matchesColor = color ? product.colors.includes(color) : product;
        const matchesBrand = brand ? product.company === brand : product;
        const matchesShipping = shipping ? product.shipping === true : product;

        return (
          matchesCategory && matchesColor && matchesBrand && matchesShipping
        );
      });

      setActiveProducts(result);
    }

    return filterProducts(
      activeCategory,
      activeColor,
      brandOptionValue,
      freeShipppingValue
    );
  }, [activeCategory, activeColor, brandOptionValue, freeShipppingValue]);

  const categories = [
    { categoryName: "all", value: null },
    { categoryName: "office", value: "office" },
    { categoryName: "living room", value: "living room" },
    { categoryName: "kitchen", value: "kitchen" },
    { categoryName: "bedroom", value: "bedroom" },
    { categoryName: "dining", value: "dining" },
    { categoryName: "kids", value: "kids" },
  ];

  const brands = ["all", "marcos", "liddy", "ikea", "caressa"];

  const colors = [
    { colorName: "red", colorValue: "#ff0000" },
    { colorName: "green", colorValue: "#00ff00" },
    { colorName: "blue", colorValue: "#0000ff" },
    { colorName: "gray", colorValue: "#000" },
    { colorName: "yellow", colorValue: "#ffb900" },
  ];

  const sortValues = [
    { name: "Price (Lowest)", value: "price-lowest" },
    { name: "Price (Highest)", value: "price-highest" },
    { name: "Name (A-Z)", value: "a-b" },
    { name: "Name (Z-A)", value: "b-a" },
  ];

  return (
    <div className="!mt-[100px] flex gap-8 w-7xl !mx-auto">
      <div className="flex flex-col gap-5">
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
                activeCategory === category.value ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.value)}
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
            value={brandOptionValue}
            onChange={(e) => {
              if (e.target.value === "all") {
                setBrandOptionValue(null);
              } else {
                setBrandOptionValue(e.target.value);
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
                !activeColor ? "active" : ""
              } capitalize cursor-pointer`}
              onClick={() => setActiveColor(null)}
            >
              all
            </div>
            {colors.map((color, index) => {
              const isActive = activeColor == color.colorValue;
              return (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer`}
                  style={{
                    backgroundColor: color.colorValue,
                    opacity: `${isActive ? 1 : 0.5}`,
                    scale: `${isActive ? 1.25 : 1}`,
                  }}
                  onClick={() => setActiveColor(color.colorValue)}
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
            className="w-[100%]"
          />
        </div>

        <div className="flex gap-[10px]">
          <p className="text-base font-medium">Free Shipping</p>
          <input
            type="checkbox"
            checked={freeShipppingValue}
            onChange={(e) => setFreeShippingValue(e.target.checked)}
          />
        </div>

        <Button variation="clear">Clear Filters</Button>
      </div>

      <div>
        <div className="flex justify-between gap-5 !mb-4">
          <p>{filteredProducts?.length} Products Found</p>
          <hr className="self-center border-t border-brand-darker flex-1 mx-4" />
          <select
            type="text"
            className="bg-none border-[1px] border-brand-darker !pl-[10px]"
            value={sortValue}
            onChange={(e) => setSortValue(e.target.value)}
          >
            {sortValues.map((sortValue, index) => (
              <option key={index} value={sortValue.value}>
                {sortValue.name}
              </option>
            ))}
          </select>
        </div>
        <div className="!mx-auto">
          <ul className="list-none grid grid-cols-3 gap-y-8 gap-x-5">
            {filteredProducts?.map((product, index) => (
              <Link to={`/product/${product.id}`}>
                <li key={index} className="furniture-item">
                  <img
                    src={product.image}
                    alt="Furniture-Picture"
                    className="h-48 w-87 rounded-lg object-cover"
                    style={{ display: "block" }}
                  />
                  <div className="!mt-3 flex items-center justify-between">
                    <h3 className="capitalize">{product.name}</h3>
                    <h3 className="text-brand-darker font-medium">
                      $ {+product.price / 100}
                    </h3>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products;
