import Button from "../../../UI/Button";

function ProductAmount(props) {
  const { product, amount, setAmount } = props;
  return (
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
  );
}

export default ProductAmount;
