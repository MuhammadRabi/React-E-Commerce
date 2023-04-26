import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Root from "./pages/Root";
import TestPage from "./pages/TestPage";
import ProductsPage from "./pages/ProductsPage";
import AboutusPage from "./pages/AboutusPage";
import Login from "./pages/Login";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
          <Route path="test" element={<TestPage />} />
          <Route path="about" element={<AboutusPage />} />
        </Route>
        <Route path="auth" element={<Login />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
