import { Outlet } from "react-router-dom"
import Footer from "../Components/UI/Footer"
import Header from "../Components/UI/Header"
import Layout from "../Components/UI/Layout"

const Root = () => {
  return (
    <>
      <Header />
      <Layout>
        <Outlet />
      </Layout>
      <Footer />
    </>
  )
}
export default Root
