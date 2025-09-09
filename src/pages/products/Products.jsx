import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { sortValues } from "./components/helpers";
import Product from "./components/Product";
import Sidebar from "./components/Sidebar";
import { ToastContainer, toast } from "react-toastify";

const URL = "https://www.course-api.com";

function Products() {
  const [showMobileFIlters, setShowMobileFIlters] = useState(false);

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
        toast.error("Ups, something went wrong...");
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
    handleChangeFIlter({
      category: null,
      color: null,
      brand: null,
      shipping: false,
    });
  }

  return (
    <div className="!mt-28 flex gap-8 !mx-auto desktop:w-7xl laptop:w-6xl smallLT:w-5xl tablet:w-4xl mobile:w-3xl smallmobile:w-[90%] ">
      <ToastContainer position="top-center" />
      <div className="max-mobile:hidden">
        <Sidebar
          filters={filters}
          searchValue={searchValue}
          priceRangeValue={priceRangeValue}
          setPriceRangeValule={setPriceRangeValule}
          handleChangeFIlter={handleChangeFIlter}
          setSearchValue={setSearchValue}
          clearFilters={clearFilters}
        />
      </div>

      <div>
        <div className="flex justify-between items-center gap-5 !mb-4">
          <div
            className="mobile:hidden"
            onClick={() => setShowMobileFIlters(true)}
          >
            <i class="bxr  bx-clipboard-detail  text-brand-darker text-4xl"></i>
          </div>
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
          <ul className="list-none grid smallLT:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-2 smallmobile:grid-cols-2 gap-y-8 gap-x-5">
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

      <div
        className={`fixed top-0 left-0 right-0 bg-white z-50 w-full h-screen !p-[100px] transition-all duration-500 ease-in ${
          !showMobileFIlters
            ? "-translate-x-full  opacity-0 pointer-events-none invisible"
            : "opacity-100 pointer-events-auto visible translate-x-0"
        }`}
      >
        <ion-icon
          name="close"
          className="w-[36px] h-[36px] absolute top-[30px] right-[30px]"
          onClick={() => setShowMobileFIlters(false)}
        ></ion-icon>
        <Sidebar
          filters={filters}
          searchValue={searchValue}
          priceRangeValue={priceRangeValue}
          setPriceRangeValule={setPriceRangeValule}
          handleChangeFIlter={handleChangeFIlter}
          setSearchValue={setSearchValue}
          clearFilters={clearFilters}
        />
      </div>
    </div>
  );
}

export default Products;
