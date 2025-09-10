import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://www.course-api.com/react-store-single-product?id=${params.productId}`
        );
        const post = await response.json();
        setProduct(post);
        setDisplayImage(post.images[0].url);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, []);

  return (
    <>
      {product && (
        <div className="w-4/5 grid grid-cols-2 !mx-auto gap-10 !mt-28">
          <div class="pictures-cont">
            <img
              src={displayImage}
              alt="Furniture-Picture"
              class="w-full h-125 rounded-lg object-cover"
            />

            <div class="!mt-5 flex w-full justify-between">
              <img
                src={product.images[0].url}
                alt="Furniture-Picture"
                class="w-24 h-18 rounded-sm object-cover"
                onClick={(e) => setDisplayImage(e.target.src)}
              />
              <img
                src={product.images[1].url}
                alt="Furniture-Picture"
                class="w-24 h-18 rounded-sm object-cover"
                onClick={(e) => setDisplayImage(e.target.src)}
              />
              <img
                src={product.images[2].url}
                alt="Furniture-Picture"
                class="w-24 h-18 rounded-sm object-cover"
                onClick={(e) => setDisplayImage(e.target.src)}
              />
              <img
                src={product.images[3].url}
                alt="Furniture-Picture"
                class="w-24 h-18 rounded-sm object-cover"
                onClick={(e) => setDisplayImage(e.target.src)}
              />
              <img
                src={product.images[4].url}
                alt="Furniture-Picture"
                class="w-24 h-18 rounded-sm object-cover"
                onClick={(e) => setDisplayImage(e.target.src)}
              />
            </div>
          </div>

          <div class="flex flex-col gap-[70px]">
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
