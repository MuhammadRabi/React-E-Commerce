import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import Cart from "../cart/Cart"

const Navbar = () => {
  /*   const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20)
    })
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(false)
      })
    }
  }, [])
 */
  return (
    <>
      {/*   <nav
        className={`${
          scroll ? "shadow-lg" : ""
        } fixed bg-teal-700 w-full font-bold capitalize py-3 px-10 text-white text-2xl flex justify-between items-center`}
      > */}
      <nav className="bg-teal-700 w-full font-bold capitalize py-3 px-10 text-white flex justify-around items-center">
        <h3 className="text-sm md:text-2xl">redux-toolkit cart</h3>
        <ul className="hidden lg:flex space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About us</NavLink>
        </ul>
        <Cart />
      </nav>
    </>
  )
}
export default Navbar
