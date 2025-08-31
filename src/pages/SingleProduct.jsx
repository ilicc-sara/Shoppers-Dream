import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://www.course-api.com/react-store-single-product?id=${params.productId}`
        );
        const post = await response.json();
        console.log(post);
        setProduct(post);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, []);
  return (
    <>
      <h1>Single Product</h1>
      {product && (
        <div className="single-product-item">
          <div class="pictures-cont">
            <img
              src={product.images[0].url}
              alt="Furniture-Picture"
              class="product-img"
              style={{ display: "block" }}
            />

            <div class="side-pictures">
              <img
                src={product.images[0].url}
                alt="Furniture-Picture"
                class="side-img"
                style={{ display: "block" }}
              />
              <img
                src={product.images[1].url}
                alt="Furniture-Picture"
                class="side-img"
                style={{ display: "block" }}
              />
              <img
                src={product.images[2].url}
                alt="Furniture-Picture"
                class="side-img"
                style={{ display: "block" }}
              />
              <img
                src={product.images[3].url}
                alt="Furniture-Picture"
                class="side-img"
                style={{ display: "block" }}
              />
              <img
                src={product.images[4].url}
                alt="Furniture-Picture"
                class="side-img"
                style={{ display: "block" }}
              />
            </div>
          </div>

          <div class="info-cont">
            <h1 class="single-product-name">{product.name}</h1>

            <p class="description text">${product.description}</p>

            <p>
              Available: <span class="available-number">${product.stock}</span>
            </p>

            <p>
              Brand: <span class="brand-name">${product.company}</span>
            </p>

            <button class="back-btn">BACK</button>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
