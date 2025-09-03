import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          "https://www.course-api.com/react-store-products"
        );
        const posts = await response.json();
        setProducts(posts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, []);
  return (
    <div className="!mt-[150px] flex">
      <div>
        <div>
          <input type="text" placeholder="Search" />
          <div className=" flex flex-col items-start">
            <p className="text-base font-medium">Category</p>
            <p className="text-base">All</p>
            <p className="text-base">Office</p>
            <p className="text-base">Living Room</p>
            <p className="text-base">Kitchen</p>
            <p className="text-base">Bedroom</p>
            <p className="text-base">Dining</p>
            <p className="text-base">Kids</p>
          </div>
        </div>
        <select type="text">
          <option>All</option>
          <option>Marcos</option>
          <option>Liddy</option>
          <option>Ikea</option>
          <option>Caressa</option>
        </select>

        <div name="color">
          <p>Color</p>
          <div name="color-options">
            <div>All</div>
            <div>Red</div>
            <div>Green</div>
            <div>Blue</div>
            <div>Black</div>
            <div>Yellow</div>
          </div>

          <div name="price">
            <p>Price</p>
            <input
              type="range"
              class="graph"
              name="points"
              value="16"
              min="0"
              max="3999"
            />
          </div>
        </div>
      </div>
      <div className="container !mt-[8rem]">
        <ul className="furniture-list">
          {products?.map((product, index) => (
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
