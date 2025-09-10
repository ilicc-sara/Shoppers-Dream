import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

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
        toast.error("Ups, something went wrong...");
      }
    };

    fetchPost();
  }, []);

  return (
    <>
      <ToastContainer position="top-center" />
      {product && (
        <div className="w-4/5 grid grid-cols-2 !mx-auto gap-10 !mt-28 !mb-5 text-left relative">
          <Link
            to="/products"
            className="!text-brand-darker absolute !font-medium left-0 -top-9 !underline"
          >
            Back to products &darr;
          </Link>
          <div class="pictures-cont">
            <img
              src={displayImage}
              alt="Furniture-Picture"
              class="w-full h-125 rounded-lg object-cover"
            />

            <div class="!mt-5 flex w-full justify-between">
              {product?.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt="Furniture-Picture"
                  class="w-24 h-18 rounded-sm object-cover"
                  onClick={(e) => setDisplayImage(e.target.src)}
                />
              ))}
            </div>
          </div>

          <div class="flex flex-col gap-[70px]">
            <h1 class="single-product-name capitalize">{product.name}</h1>

            <p class="description text">{product.description}</p>

            <p>
              Available: <span class="available-number">{product.stock}</span>
            </p>

            <p>
              Brand: <span class="brand-name">{product.company}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
