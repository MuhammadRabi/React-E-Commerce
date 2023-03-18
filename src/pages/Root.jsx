import { Outlet } from "react-router-dom"
import Navbar from "../components/UI/Navbar"
import Layout from "../components/UI/Layout"
import Modal from "../components/UI/Modal"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addToLocalStorage } from "../localStorage"
import { calculateTotalPrice } from "../Features/cartSlice"
import useProductsStore from "../Features/productsStore"

const Root = () => {
  const { isModalOpen } = useSelector((state) => state.modal)
  const cart = useSelector((state) => state.cart)

  const { getProducts, updateSort, sort } = useProductsStore((state) => ({
    sort: state.sort,
    getProducts: state.getProducts,
    updateSort: state.updateSort,
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    addToLocalStorage(cart.items)
    dispatch(calculateTotalPrice())
  }, [cart.items, dispatch])

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    updateSort()
  }, [sort])

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
