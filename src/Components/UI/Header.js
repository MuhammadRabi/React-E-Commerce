import Cart from "../Cart"

const Header = () => {
  return (
    <>
      <header className="w-full  bg-red-800 font-bold capitalize py-5 px-10 text-white text-2xl flex justify-between items-center">
        <h3 className="text-sm md:text-2xl">redux-toolkit cart</h3>
        <Cart />
      </header>
    </>
  )
}
export default Header
