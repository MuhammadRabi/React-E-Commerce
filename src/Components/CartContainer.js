import { useEffect } from "react"
import CartFooter from "./CartFooter"
import { calculateTotalPrice } from "../Features/cartSlice"
import CartItem from "./CartItem"
import { useSelector, useDispatch } from "react-redux"
import Modal from "./UI/Modal"

const CartContainer = () => {
  const { items } = useSelector((state) => state.cart)
  const { isModalOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotalPrice())
  }, [items, dispatch])
  return (
    <>
      <section className="relative rounded-md mx-auto p-4 bg-slate-200 w-full max-w-sm md:max-w-lg md:p-8">
        <h2 className="text-center text-xl p-4 capitalize bg-red-800/90 w-1/2 mx-auto text-white rounded-lg md:p-2 md:text-3xl md:w-3/4">
          cart details
        </h2>
        {items.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
        <CartFooter />
      </section>
      {isModalOpen && <Modal />}
    </>
  )
}
export default CartContainer
