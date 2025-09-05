# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

function filterAvailableColors(color) {
const filteredProducts = products.filter(
(product) => product.category === activeCategory
);
if (activeCategory === "all" && activeColor === "all") {
setActiveProducts(products);
setActiveColor("all");
} else if (activeCategory !== "all" && activeColor === "all") {
setActiveProducts(filteredProducts);
} else if (activeCategory !== "all" && activeColor !== "all") {
if (color === "red") {
const filterRed = filteredProducts.filter((product) =>
product.colors.includes("#ff0000")
);
setActiveProducts(filterRed);
setActiveColor(color);
} else if (color === "blue") {
const filterBlue = filteredProducts.filter((product) =>
product.colors.includes("#0000ff")
);
setActiveProducts(filterBlue);
setActiveColor(color);
} else if (color === "green") {
const filterGreen = filteredProducts.filter((product) =>
product.colors.includes("#00ff00")
);
setActiveProducts(filterGreen);
setActiveColor(color);
} else if (color === "yellow") {
const filterYellow = filteredProducts.filter((product) =>
product.colors.includes("#ffb900")
);
setActiveProducts(filterYellow);
setActiveColor(color);
} else if (color === "gray") {
const filterBlack = filteredProducts.filter((product) =>
product.colors.includes("#000")
);
setActiveProducts(filterBlack);
setActiveColor(color);
}
}
}

// function getIsItemInCart(id) {
// return cartItems.includes(cartItems.find((item) => item.id === id));
// }

// function filterActiveCategoryProducts(category) {
// if (!category) {
// setActiveProducts(products);
// setActiveCategory(null);
// } else {
// const filteredProducts = products.filter(
// (product) => product.category === category
// );
// setActiveProducts(filteredProducts);
// setActiveCategory(category);
// }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// useEffect(() => {
// console.log(
// "in use effect",
// activeCategory,
// activeColor,
// brandOptionValue,
// freeShipppingValue
// );

// return () =>
// console.log(
// "returned from use effect",
// activeCategory,
// activeColor,
// brandOptionValue,
// freeShipppingValue
// );
// }, [activeCategory, activeColor, brandOptionValue, freeShipppingValue]);

// function productsFiltered() {
// if (
// freeShipppingValue ||
// activeCategory ||
// activeColor ||
// brandOptionValue
// ) {
// return filteredProducts.filter(
// ({ category, colors, company, shipping }) => {
// category === activeCategory ||
// colors.includes(activeColor) ||
// company === brandOptionValue ||
// shipping === true;
// }
// );
// } else return filteredProducts;
// }

// function productsFiltered(
// products,
// activeCategory,
// activeColor,
// brandOptionValue,
// freeShipppingValue
// ) {
// let result;
// return (result = products?.filter(
// ({ category, colors, company, shipping }) => {
// category === activeCategory ||
// colors.includes(activeColor) ||
// company === brandOptionValue ||
// shipping === freeShipppingValue;
// }
// ));
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

<!-- pogledaj u taiwind config dodati pink custom boju i okrenuti media query-->
<!-- koristiti tailwind design sistem kad god je moguce -->
<!-- home.jsx  -> index.jsx -->
<!-- home componenst -> components -->
<!-- reusable components - UI -->

// requestAnimationFrame
