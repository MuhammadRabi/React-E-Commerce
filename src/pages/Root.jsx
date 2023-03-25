import { Outlet } from "react-router-dom"
import Navbar from "../components/UI/Navbar"
import Layout from "../components/UI/Layout"
import Modal from "../components/UI/Modal"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { calculateTotalPrice } from "../Features/cartSlice"
import productStore from "../Features/productStore"
import { modalStore } from "../Features/modalStore"
import { cartStore } from "../Features/cartStore"

const Root = () => {
  const cart = useSelector((state) => state.cart)

  //const cartStore((state)=>
  const isModalOpen = modalStore((state) => state.isModalOpen)

  const { getProducts, updateSort, sort } = productStore((state) => ({
    sort: state.sort,
    getProducts: state.getProducts,
    updateSort: state.updateSort,
  }))
  /* 
  useEffect(() => {
      addToLocalStorage(cart.items)
    calculateTotalPrice()
  }, [cart.items])
 */
  useEffect(() => {
    getProducts()
  }, [])

  const setSearchQuery = productStore((state) => state.setSearchQuery)
  const searchQuery = productStore((state) => state.searchQuery)

  useEffect(() => {
    setSearchQuery(searchQuery)
  }, [searchQuery])

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
