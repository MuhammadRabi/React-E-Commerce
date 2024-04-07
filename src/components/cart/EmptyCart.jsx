import { FaCartPlus } from "react-icons/fa"

const EmptyCart = () => {
  return (
    <div className="flex flex-col mt-24 space-y-24">
      <p className="p-6 text-sm text-center capitalize md:text-xl">
        there is no items available in your cart
      </p>
      <FaCartPlus className="mx-auto text-gray-300 text-7xl md:text-9xl" />
    </div>
  )
}
export default EmptyCart
