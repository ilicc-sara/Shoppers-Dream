import { Link } from "react-router-dom";
import Button from "../../../UI/Button";

function DisplayEmptyCart() {
  return (
    <div className="flex flex-col !mx-auto gap-10">
      <h1>Your cart is empty...</h1>
      <Link to="/products">
        <Button variation="primary">Keep shopping</Button>
      </Link>
    </div>
  );
}

export default DisplayEmptyCart;
