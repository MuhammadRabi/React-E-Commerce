import { Link, NavLink } from "react-router-dom"
import { MdMenu } from "react-icons/md"
import Login from "../auth/Login"
import { useModalStore } from "../../Features/modalStore"
import NavIcons from "./NavIcons"
import WishlistDropdown from "../wishlist/WishlistDropdown"
import { useAuth0 } from "@auth0/auth0-react"
import Avatar from "../auth/Avatar"

const Navbar = () => {
  const openSidebar = useModalStore((state) => state.openSidebar)
  const openModal = useModalStore((state) => state.openModal)
  const { user, isAuthenticated, isLoading } = useAuth0()

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-3 font-bold text-white capitalize sm:px-10 horizontal-nav bg-main">
        <Link to="/">
          <h3 className="px-4 text-xl font-bold md:text-3xl">
            Market<span className="text-teal-600">H</span>ub
          </h3>
        </Link>
        <ul className="justify-center flex-1 hidden space-x-4 lg:flex">
          <li>
            <NavLink to="/" className="p-2 rounded-md">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="p-2 rounded-md">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="p-2 rounded-md">
              About
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center">
          <NavIcons />
          <WishlistDropdown />
          {isAuthenticated ? <Avatar user={user} /> : <Login />}
          <span className="block ml-4 text-5xl cursor-pointer lg:hidden">
            <MdMenu
              onClick={() => {
                openSidebar()
                openModal()
              }}
            />
          </span>
        </div>
      </nav>
    </>
  )
}
export default Navbar
