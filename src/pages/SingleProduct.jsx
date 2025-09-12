import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function SingleProduct() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://www.course-api.com/react-store-single-product?id=${params.productId}`
        );
        const post = await response.json();
        setProduct(post);
        setDisplayImage(post.images[0].url);
        setActiveColor(post.colors[0]);
      } catch (error) {
        toast.error("Ups, something went wrong...");
      }
    };

    fetchPost();
  }, []);

  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const dispatch = useDispatch();
  return (
    <>
      <ToastContainer position="top-center" />
      {product && (
        <div className="w-4/5 grid tablet:grid-cols-2 max-tablet:grid-rows-2 !mx-auto tablet:gap-10 max-tablet:gap-5 !mt-28 !mb-5 text-left relative">
          <Link
            to="/products"
            className="!text-brand-darker absolute !font-medium left-0 -top-9 !underline"
          >
            Back to products &darr;
          </Link>
          <div className="pictures-cont">
            <img
              src={displayImage}
              alt="Furniture-Picture"
              className="w-full rounded-lg object-cover desktop:h-125 laptop:h-120 smallLT:h-115 tablet:h-105 mobile:h-120 smallmobile:h-105"
            />

            <div className="!mt-5 flex w-full justify-between">
              {product?.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt="Furniture-Picture"
                  className="desktop:w-24 desktop:h-16 laptop:h-15 laptop:w-22 smallLT:h-14 smallLT:w-19 tablet:h-12 tablet:w-17 mobile:w-24 mobile:h-16 smallmobile:h-14  smallmobile:w-18 rounded-sm object-cover"
                  onClick={(e) => setDisplayImage(e.target.src)}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col laptop:gap-4 max-laptop:gap-3 max-tablet:gap-4">
            <p className="single-product-name capitalize text-3xl font-bold">
              {product.name}
            </p>
            <div className="flex gap-2 items-center justify-center w-[fit-content]">
              <span className="text-yellow-600">{product.stars}</span>
              <div>
                <i class="bxr  bxs-star text-yellow-600"></i>
                <i class="bxr  bxs-star text-yellow-600"></i>
                <i class="bxr  bxs-star text-yellow-600"></i>
                <i class="bxr  bxs-star text-yellow-600"></i>
                <i class="bxr  bxs-star text-yellow-600"></i>
              </div>
              <p> ({product.reviews} customers rating) </p>
            </div>
            <p className="font-medium text-brand-darker">
              $ {product.price / 100}
            </p>

            <p className="desktop:text-base laptop:text-sm smallLT:text-sm max-smallLT:text-xs max-tablet:text-base ">
              {product.description}
            </p>

            <p>
              <span className="font-semibold">Available: </span> {product.stock}
            </p>

            <p>
              <span className="font-semibold">SKU: </span> {product.id}
            </p>

            <p>
              <span className="font-semibold">Available Brand: </span>
              {product.company}
            </p>

            <hr className="border-t border-brand-darker" />

            {!product.stock == 0 && (
              <>
                <div className="flex gap-4 items-center justify-center w-[fit-content]">
                  <span className="font-semibold">Colors:</span>
                  <div className="flex gap-3">
                    {product.colors.map((color, index) => {
                      const isActive = activeColor == color;
                      return (
                        <div
                          key={index}
                          className="w-3 h-3 rounded-full cursor-pointer"
                          style={{
                            backgroundColor: color,
                            opacity: `${isActive ? 1 : 0.4}`,
                            scale: `${isActive ? 1.5 : 1}`,
                          }}
                          onClick={() => setActiveColor(color)}
                        ></div>
                      );
                    })}
                  </div>
                </div>

                <div className="w-[fit-content] grid grid-cols-3 place-items-center">
                  <Button
                    variation="amount-btn"
                    handleClick={() =>
                      setAmount((prev) => {
                        if (prev !== 1) {
                          return prev - 1;
                        } else {
                          return prev;
                        }
                      })
                    }
                  >
                    -
                  </Button>
                  <span> {amount} </span>
                  <Button
                    variation="amount-btn"
                    handleClick={() => {
                      setAmount((prev) => {
                        if (prev === product.stock) {
                          return prev;
                        } else {
                          return prev + 1;
                        }
                      });
                    }}
                  >
                    +
                  </Button>
                </div>

                <div className="flex w-[fit-content]">
                  <Link to="/cart">
                    <Button
                      handleClick={() =>
                        dispatch(
                          addToCart({
                            image: product.images[0].url,
                            name: product.name,
                            id: product.id,
                            quantity: amount,
                            price: product.price / 100,
                            productsAvailable: product.stock,
                            color: activeColor,
                            shipping: product.shipping,
                          })
                        )
                      }
                      variation="primary"
                      disabled={
                        cart.reduce((acc, cur) => {
                          if (cur.id === product.id) {
                            return acc + cur.quantity;
                          } else return acc;
                        }, 0) === product.stock
                      }
                      // disabled={cart.includes(
                      //   cart.find(
                      //     (item) =>
                      //       item.id === product.id &&
                      //       item.quantity === product.stock
                      //   )
                      // )}
                    >
                      Add to cart
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
