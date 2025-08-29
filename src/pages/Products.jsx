import { useState, useEffect } from "react";

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
    <>
      <h1>Products</h1>
      <div className="container">
        <ul className="furniture-list">
          {products?.map((product, index) => (
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
          ))}
        </ul>
      </div>
    </>
  );
}

export default Products;
