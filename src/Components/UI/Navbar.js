import { useEffect, useState } from "react"
import Cart from "../cart/Cart"

const Navbar = () => {
  const [scroll, setScroll] = useState(false)

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

  return (
    <>
      <nav
        className={`${
          scroll ? "shadow-lg" : ""
        } fixed bg-teal-700 w-full font-bold capitalize py-3 px-10 text-white text-2xl flex justify-between items-center`}
      >
        <h3 className="text-sm md:text-2xl">redux-toolkit cart</h3>
        <Cart />
      </nav>
    </>
  )
}
export default Navbar
