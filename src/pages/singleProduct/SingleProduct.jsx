import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";
import ProductColors from "./components/ProductColors";

const URL = "https://www.course-api.com";

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
          `${URL}/react-store-single-product?id=${params.productId}`
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

          <ProductImage
            product={product}
            displayImage={displayImage}
            setDisplayImage={setDisplayImage}
          />

          <div className="flex flex-col laptop:gap-4 max-laptop:gap-3 max-tablet:gap-4">
            <ProductInfo product={product} />

            <hr className="border-t border-brand-darker" />

            {!product.stock == 0 && (
              <>
                <ProductColors
                  product={product}
                  activeColor={activeColor}
                  setActiveColor={setActiveColor}
                />

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
