import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom"
import CartPage from "./pages/CartPage"
import ErrorPage from "./pages/ErrorPage"
import HomePage from "./pages/HomePage"
import Root from "./pages/Root"
import TestPage from "./pages/TestPage"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="test" element={<TestPage />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App
