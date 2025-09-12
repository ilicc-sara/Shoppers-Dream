import "./App.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Index from "./pages/home/Index.jsx";
import Products from "./pages/products/Products.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import Cart from "./pages/cart/Cart.jsx";
import SharedLayout from "./layouts/SharedLayout.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:productId",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
