import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Product from "./components/Product";
import Sidebar from "./components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import ProductsHeader from "./components/ProductsHeader";

const URL = "https://www.course-api.com";

function Products() {
  const [showMobileFIlters, setShowMobileFIlters] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const [products, setProducts] = useState(null);
  const [activeProducts, setActiveProducts] = useState(null);

  const [sortValue, setSortValue] = useState("price-lowest");

  const [filters, setFilters] = useState({
    search: "",
    priceRange: "3999",
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
    return activeProducts?.sort((a, b) => {
      if (sortValue === "a-b") return a.name.localeCompare(b.name);
      if (sortValue === "b-a") return b.name.localeCompare(a.name);
      if (sortValue === "price-highest") return b.price - a.price;
      if (sortValue === "price-lowest") return a.price - b.price;
    });
  }, [activeProducts, sortValue]);

  function handleChangeFIlter(payload) {
    const { key, value } = payload;

    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  }

  useEffect(() => {
    const {
      search,
      priceRange,
      activeCategory,
      activeColor,
      brandOptionValue,
      freeShipppingValue,
    } = filters;
    if (!products) return;
    let filteredProductsTemp = [...products];
    if (search) {
      filteredProductsTemp = filteredProductsTemp.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (priceRange) {
      filteredProductsTemp = filteredProductsTemp.filter(
        (product) => +product.price / 100 <= Number(priceRange)
      );
    }
    if (activeCategory) {
      filteredProductsTemp = filteredProductsTemp.filter(
        (product) => product.category === activeCategory
      );
    }
    if (activeColor) {
      filteredProductsTemp = filteredProductsTemp.filter((product) =>
        product.colors.includes(activeColor)
      );
    }
    if (brandOptionValue) {
      filteredProductsTemp = filteredProductsTemp.filter(
        (product) => product.company === brandOptionValue
      );
    }
    if (freeShipppingValue) {
      filteredProductsTemp = filteredProductsTemp.filter(
        (product) => product.shipping === true
      );
    }
    setActiveProducts(filteredProductsTemp);
  }, [filters]);

  function clearFilters() {
    setSortValue("price-lowest");
    setFilters({
      search: "",
      priceRange: "3999",
      category: null,
      color: null,
      brand: null,
      shipping: false,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width >= 800) {
      setShowMobileFIlters(false);
    }
  }, [width]);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  return (
    <div className="!mt-28 flex gap-8 !mx-auto desktop:w-7xl laptop:w-6xl smallLT:w-5xl tablet:w-4xl mobile:w-3xl smallmobile:w-[90%] ">
      <ToastContainer position="top-center" />
      <div className="max-mobile:hidden">
        <Sidebar
          filters={filters}
          handleChangeFIlter={handleChangeFIlter}
          clearFilters={clearFilters}
        />
      </div>

      <div>
        <ProductsHeader
          productsFound={filteredProducts?.length}
          sortValue={sortValue}
          setSortValue={setSortValue}
          setShowMobileFIlters={setShowMobileFIlters}
        />
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
        className={`fixed top-0 left-0 right-0 bg-white z-50 w-full h-screen overflow-y-scroll !p-[100px] transition-all duration-500 ease-in ${
          !showMobileFIlters
            ? "-translate-x-full  opacity-0 pointer-events-none invisible"
            : "opacity-100 pointer-events-auto visible translate-x-0"
        }`}
      >
        <ion-icon
          name="close"
          className="w-[36px] h-[36px] absolute cursor-pointer top-[30px] right-[30px]"
          onClick={() => setShowMobileFIlters(false)}
        ></ion-icon>
        <Sidebar
          filters={filters}
          handleChangeFIlter={handleChangeFIlter}
          clearFilters={clearFilters}
        />
      </div>
    </div>
  );
}

export default Products;
