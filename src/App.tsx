import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductIndex } from "./views/products/ProductIndex";
import { ProductDetails } from "./views/products/ProductDetails";
import { ProductCreate } from "./views/products/ProductCreate";
import { ErrorBoundary } from "./views/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductIndex />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/:productId",
    element: <ProductDetails />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/create",
    element: <ProductCreate />,
    errorElement: <ErrorBoundary />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
