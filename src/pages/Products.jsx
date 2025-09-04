import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

function Products() {
  const [products, setProducts] = useState(null);
  const [activeProducts, setActiveProducts] = useState(null);
  // filters
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeColor, setActiveColor] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [brandOptionValue, setBrandOptionValue] = useState("all");
  const [priceRangeValue, setPriceRangeValule] = useState("3999");
  const [freeShipppingValue, setFreeShippingValue] = useState(false);
  const [sortValue, setSortValue] = useState();

  const filteredProducts = useMemo(() => {
    return activeProducts?.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [activeProducts, searchValue]);

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

  function filterActiveCategoryProducts(category) {
    if (category === "all") {
      setActiveProducts(products);
      setActiveCategory("all");
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      setActiveProducts(filteredProducts);
      setActiveCategory(category);
    }
  }

  const categories = [
    "all",
    "office",
    "living room",
    "kitchen",
    "bedroom",
    "dining",
    "kids",
  ];

  const colors = [
    { colorName: "red", colorValue: "#ff0000" },
    { colorName: "green", colorValue: "#00ff00" },
    { colorName: "blue", colorValue: "#0000ff" },
    { colorName: "gray", colorValue: "#000" },
    { colorName: "yellow", colorValue: "#ffb900" },
  ];

  return (
    <div className="!mt-[100px] flex gap-8 w-7xl !mx-auto">
      <div className="flex flex-col gap-5">
        <input
          type="text"
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
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => filterActiveCategoryProducts(category)}
            >
              {category}
            </p>
          ))}
        </div>

        <div className="flex flex-col items-start">
          <p className="text-base font-medium">Company</p>
          <select
            type="text"
            className="bg-none border-[1px] border-brand-darker !pl-[10px]"
            value={brandOptionValue}
            onChange={(e) => setBrandOptionValue(e.target.value)}
          >
            <option value="all">All</option>
            <option value="marcos">Marcos</option>
            <option value="liddy">Liddy</option>
            <option value="ikea">Ikea</option>
            <option value="caressa">Caressa</option>
          </select>
        </div>

        <div className="flex flex-col items-start">
          <p className="text-base font-medium">Color</p>
          <div className="flex items-center justify-between gap-3">
            <div
              className={`${
                activeColor === "all" ? "active" : ""
              } capitalize cursor-pointer`}
              onClick={(e) => setActiveColor(e.target.textContent)}
            >
              all
            </div>
            {colors.map((color, index) => {
              const isActive = activeColor.colorName === color.colorName;
              return (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer`}
                  style={{
                    backgroundColor: color.colorValue,
                    opacity: `${isActive ? 1 : 0.5}`,
                    scale: `${isActive ? 1.25 : 1}`,
                  }}
                  onClick={() => setActiveColor(color)}
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
          >
            <option>Price (Lowest)</option>
            <option>Price (Highest)</option>
            <option>Name (A-Z)</option>
            <option>Name (Z-)</option>
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
                    className="h-48 w-87 rounded-lg"
                    style={{ display: "block" }}
                  />
                  <div className="!mt-3 flex items-center justify-between">
                    <h3 className="capitalize">{product.name}</h3>
                    <h3 className="text-brand-pink font-medium">
                      ${+product.price / 100} $
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
