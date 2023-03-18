import { Link, NavLink } from "react-router-dom"
import Cart from "../cart/Cart"
import { MdMenu } from "react-icons/md"

const Navbar = () => {
  return (
    <>
      <nav className="bg-teal-600 font-bold capitalize py-3 px-10 text-white flex justify-between items-center">
        <h3 className="text-xl md:text-2xl px-4">
          <Link to="/">LOGO</Link>
        </h3>
        <ul className="hidden flex-1 justify-center lg:flex space-x-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <Cart />
        <span className="lg:hidden block cursor-pointer text-5xl">
          <MdMenu />
        </span>
      </nav>
    </>
  )
}
export default Navbar
