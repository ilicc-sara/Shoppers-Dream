# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

function filterAvailableColors(color) {
const filteredProducts = products.filter(
(product) => product.category === activeCategory
);
if (activeCategory === "all" && activeColor === "all") {
setActiveProducts(products);
setActiveColor("all");
} else if (activeCategory !== "all" && activeColor === "all") {
setActiveProducts(filteredProducts);
} else if (activeCategory !== "all" && activeColor !== "all") {
if (color === "red") {
const filterRed = filteredProducts.filter((product) =>
product.colors.includes("#ff0000")
);
setActiveProducts(filterRed);
setActiveColor(color);
} else if (color === "blue") {
const filterBlue = filteredProducts.filter((product) =>
product.colors.includes("#0000ff")
);
setActiveProducts(filterBlue);
setActiveColor(color);
} else if (color === "green") {
const filterGreen = filteredProducts.filter((product) =>
product.colors.includes("#00ff00")
);
setActiveProducts(filterGreen);
setActiveColor(color);
} else if (color === "yellow") {
const filterYellow = filteredProducts.filter((product) =>
product.colors.includes("#ffb900")
);
setActiveProducts(filterYellow);
setActiveColor(color);
} else if (color === "gray") {
const filterBlack = filteredProducts.filter((product) =>
product.colors.includes("#000")
);
setActiveProducts(filterBlack);
setActiveColor(color);
}
}
}

// function getIsItemInCart(id) {
// return cartItems.includes(cartItems.find((item) => item.id === id));
// }

// function filterActiveCategoryProducts(category) {
// if (!category) {
// setActiveProducts(products);
// setActiveCategory(null);
// } else {
// const filteredProducts = products.filter(
// (product) => product.category === category
// );
// setActiveProducts(filteredProducts);
// setActiveCategory(category);
// }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// useEffect(() => {
// console.log(
// "in use effect",
// activeCategory,
// activeColor,
// brandOptionValue,
// freeShipppingValue
// );

// return () =>
// console.log(
// "returned from use effect",
// activeCategory,
// activeColor,
// brandOptionValue,
// freeShipppingValue
// );
// }, [activeCategory, activeColor, brandOptionValue, freeShipppingValue]);

// function productsFiltered() {
// if (
// freeShipppingValue ||
// activeCategory ||
// activeColor ||
// brandOptionValue
// ) {
// return filteredProducts.filter(
// ({ category, colors, company, shipping }) => {
// category === activeCategory ||
// colors.includes(activeColor) ||
// company === brandOptionValue ||
// shipping === true;
// }
// );
// } else return filteredProducts;
// }

// function productsFiltered(
// products,
// activeCategory,
// activeColor,
// brandOptionValue,
// freeShipppingValue
// ) {
// let result;
// return (result = products?.filter(
// ({ category, colors, company, shipping }) => {
// category === activeCategory ||
// colors.includes(activeColor) ||
// company === brandOptionValue ||
// shipping === freeShipppingValue;
// }
// ));
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

// filters
const [activeCategory, setActiveCategory] = useState(null);
const [activeColor, setActiveColor] = useState(null);
const [brandOptionValue, setBrandOptionValue] = useState(null);
const [freeShipppingValue, setFreeShippingValue] = useState(false);

const [filters, setFilters] = useState({
name: "",
currentCategory: "All",
currentCompany: "All",
currentColor: "All",
price: 0,
maxPrice: 0,
shipping: false,
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

useEffect(() => {
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

function clearFilters() {
setSearchValue("");
setPriceRangeValule("3999");
setSortValue("price-lowest");
setActiveCategory(null);
setActiveColor(null);
setBrandOptionValue(null);
setFreeShippingValue(null);
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
                activeCategory === category.value ? "active" : ""
              }`}
onClick={() => setActiveCategory(category.value)} >
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
                    opacity: `${isActive ? 1 : 0.4}`,
                    scale: `${isActive ? 1.5 : 1}`,
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
            className="w-[100%] cursor-pointer"
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

<!-- pogledaj u taiwind config dodati pink custom boju i okrenuti media query-->
<!-- koristiti tailwind design sistem kad god je moguce -->
<!-- home.jsx  -> index.jsx -->
<!-- home componenst -> components -->
<!-- reusable components - UI -->

// requestAnimationFrame

useEffect(() => {
function filterProducts(category, color) {
if (!category && !color) {
setActiveProducts(products);
} else if (category && !color) {
const filteredProducts = products.filter(
(product) => product.category === category
);
setActiveProducts(filteredProducts);
} else if (!category && color) {
const filteredProducts = products.filter((product) =>
product.colors.includes(color)
);
setActiveProducts(filteredProducts);
} else if (category && color) {
const filteredProducts = products.filter(
(product) =>
product.colors.includes(color) && product.category === category
);
setActiveProducts(filteredProducts);
}
}
return filterProducts(activeCategory, activeColor);
}, [activeCategory, activeColor]);
<button class="back-btn">BACK</button>
.back-btn {
background-color: #d22dc1;
color: white;
font-weight: bold;
width: 300px;
height: 40px;
border-radius: 10px;
border: none;
}

desktop:bg-green-300
laptop:bg-blue-400
smallLT:bg-red-300
tablet:bg-pink-400
mobile:bg-yellow-400
smallmobile:bg-purple-300
