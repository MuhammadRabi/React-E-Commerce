import Cart from "../cart/Cart"

const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-gray-500 font-bold capitalize py-3 px-10 text-white text-2xl flex justify-between items-center">
        <h3 className="text-sm md:text-2xl ">redux-toolkit cart</h3>
        <Cart />
      </nav>
    </>
  )
}
export default Navbar
