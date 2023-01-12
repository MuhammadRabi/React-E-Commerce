import { Outlet } from "react-router-dom"
import Footer from "../Components/UI/Footer"
import Navbar from "../Components/UI/Navbar"
import Layout from "../Components/UI/Layout"
import Modal from "../Components/UI/Modal"
import { useSelector } from "react-redux"

const Root = () => {
  const { isModalOpen } = useSelector((state) => state.modal)

  return (
    <main className="relative">
      {isModalOpen && <Modal />}
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
      <Footer />
    </main>
  )
}
export default Root
