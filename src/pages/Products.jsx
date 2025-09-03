import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

function Products() {
  const [products, setProducts] = useState(null);
  const [activeProducts, setActiveProducts] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeColor, setActiveColor] = useState("all");

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

  const colors = ["all", "red", "green", "blue", "black", "yellow"];

  return (
    <div className="!mt-[100px] flex gap-6 w-7xl !mx-auto">
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Search"
          className="bg-none border-[1px] border-brand-darker !pl-[10px]"
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
          >
            <option>All</option>
            <option>Marcos</option>
            <option>Liddy</option>
            <option>Ikea</option>
            <option>Caressa</option>
          </select>
        </div>

        <div className="flex flex-col items-start">
          <p className="text-base font-medium">Color</p>
          <div className="flex items-center justify-between gap-3">
            <div>All</div>
            <div className="w-3 h-3 rounded rull bg-red-400"></div>
            <div className="w-3 h-3 rounded rull bg-green-400"></div>
            <div className="w-3 h-3 rounded rull bg-blue-400"></div>
            <div className="w-3 h-3 rounded rull bg-gray-400"></div>
            <div className="w-3 h-3 rounded rull bg-yellow-400"></div>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <p className="text-base font-medium">Price</p>
          <p className="text-base font-medium text-brand-darker">$3999</p>
          <input
            type="range"
            class="graph"
            name="points"
            value="16"
            min="0"
            max="3999"
          />
        </div>

        <div className="flex gap-[10px]">
          <p className="text-base font-medium">Free Shipping</p>
          <input type="checkbox" />
        </div>

        <Button variation="clear">Clear Filters</Button>
      </div>
      <div className="!mx-auto">
        <ul className="furniture-list">
          {activeProducts?.map((product, index) => (
            <Link to={`/product/${product.id}`}>
              <li key={index} className="furniture-item">
                <img
                  src={product.image}
                  alt="Furniture-Picture"
                  className="furniture-picture"
                  style={{ display: "block" }}
                />
                <div className="furniture-item-info">
                  <h3 className="furniture-name">{product.name}</h3>
                  <h3 className="furniture-price">${+product.price / 100} $</h3>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Products;
