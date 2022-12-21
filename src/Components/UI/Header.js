import Cart from "../Cart"

const Header = () => {
  return (
    <>
      <header className="bg-red-900 font-bold capitalize py-5 px-10 text-white text-3xl flex justify-between items-center">
        <h3>redux-toolkit cart</h3>
        <Cart />
      </header>
    </>
  )
}
export default Header
