import GoHome from "../UI/GoHome"

const EmptyCart = () => {
  return (
    <div className="flex flex-col space-y-12 mt-40 h-[calc(100vh-330px)]">
      <p className="text-center text-xl">
        there is no items available in your cart
      </p>
      <GoHome />
    </div>
  )
}
export default EmptyCart
