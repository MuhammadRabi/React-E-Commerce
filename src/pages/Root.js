import { Outlet } from "react-router-dom"
import Navbar from "../components/UI/Navbar"
import Layout from "../components/UI/Layout"
import Modal from "../components/UI/Modal"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addToLocalStorage } from "../localStorage"
import { calculateTotalPrice } from "../Features/cartSlice"

const Root = () => {
  const { isModalOpen } = useSelector((state) => state.modal)
  const cart = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    addToLocalStorage(cart.items)
    dispatch(calculateTotalPrice())
  }, [cart.items, dispatch])

  return (
    <main className="relative">
      {isModalOpen && <Modal />}
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
    </main>
  )
}
export default Root
