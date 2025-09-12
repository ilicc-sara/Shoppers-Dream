import { sortValues } from "./helpers";

function ProductsHeader(props) {
  const { sortValue, setSortValue, productsFound, setShowMobileFIlters } =
    props;
  return (
    <div className="flex justify-between items-center gap-5 !mb-4">
      <div className="mobile:hidden" onClick={() => setShowMobileFIlters(true)}>
        <i class="bxr  bx-clipboard-detail  text-brand-darker text-4xl"></i>
      </div>
      <p>{productsFound} Products Found</p>
      <hr className="self-center border-t border-brand-darker flex-1 mx-4" />
      <select
        type="text"
        className="bg-none border-[1px] border-brand-darker !pl-[10px]"
        value={sortValue}
        onChange={(e) => setSortValue(e.target.value)}
      >
        {sortValues.map((sortValue, index) => (
          <option key={index} value={sortValue.value}>
            {sortValue.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ProductsHeader;
