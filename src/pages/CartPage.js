import { Link } from "react-router-dom"
import CartContainer from "../Components/CartContainer"

const CartPage = () => {
  return (
    <>
      <CartContainer />
      <Link to="/">go home</Link>
    </>
  )
}
export default CartPage
