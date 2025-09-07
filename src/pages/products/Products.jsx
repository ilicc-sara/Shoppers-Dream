import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import { categories, brands, colors, sortValues } from "./components/helpers";
import Product from "./components/Product";

const URL = "https://www.course-api.com";

function Products() {
  const [products, setProducts] = useState(null);
  const [activeProducts, setActiveProducts] = useState(null);
  // input values
  const [searchValue, setSearchValue] = useState("");
  const [priceRangeValue, setPriceRangeValule] = useState("3999");
  const [sortValue, setSortValue] = useState("price-lowest");

  const [filters, setFilters] = useState({
    activeCategory: null,
    activeColor: null,
    brandOptionValue: null,
    freeShipppingValue: false,
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${URL}/react-store-products`);
        const posts = await response.json();
        setProducts(posts);
        setActiveProducts(posts);
      } catch (error) {
        console.error("Could not fetch products");
      }
    };

    fetchPost();
  }, []);

  const filteredProducts = useMemo(() => {
    return activeProducts
      ?.filter(
        (product) =>
          product.name.toLowerCase().includes(searchValue.toLowerCase()) &&
          +product.price / 100 <= Number(priceRangeValue)
      )
      .sort((a, b) => {
        if (sortValue === "a-b") return a.name.localeCompare(b.name);
        if (sortValue === "b-a") return b.name.localeCompare(a.name);
        if (sortValue === "price-highest") return b.price - a.price;
        if (sortValue === "price-lowest") return a.price - b.price;
      });
  }, [activeProducts, searchValue, priceRangeValue, sortValue]);

  function handleChangeFIlter({
    category = filters.activeCategory,
    color = filters.activeColor,
    brand = filters.brandOptionValue,
    shipping = filters.freeShipppingValue,
  }) {
    setFilters((prev) => {
      return {
        ...prev,
        activeCategory: category,
        activeColor: color,
        brandOptionValue: brand,
        freeShipppingValue: shipping,
      };
    });

    const result = products.filter((product) => {
      const matchesCategory = category
        ? product.category === category
        : product;
      const matchesColor = color ? product.colors.includes(color) : product;
      const matchesBrand = brand ? product.company === brand : product;
      const matchesShipping = shipping ? product.shipping === true : product;

      return matchesCategory && matchesColor && matchesBrand && matchesShipping;
    });

    setActiveProducts(result);
  }

  function clearFilters() {
    setSearchValue("");
    setPriceRangeValule("3999");
    setSortValue("price-lowest");
    setFilters({
      activeCategory: null,
      activeColor: null,
      brandOptionValue: null,
      freeShipppingValue: false,
    });
  }

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
            value={filters.brandOptionValue}
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
                  onClick={() =>
                    handleChangeFIlter({ color: color.colorValue })
                  }
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
                <Product
                  key={index}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                />
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products;
