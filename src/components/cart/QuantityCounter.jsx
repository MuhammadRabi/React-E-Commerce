import { useState } from "react";
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";

const QuantityCounter = ({ onIncreaseBtn, onDecreaseBtn }) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity((prev) => prev + 1);
    onIncreaseBtn();
  };
  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      onDecreaseBtn();
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <span
        className="text-green-500 hover:text-green-700 text-[24px] sm:text-[24px] cursor-pointer duration-500"
        onClick={increase}
      >
        <FiPlusSquare />
      </span>
      <p className="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-sm text-slate-800">
        {quantity}
      </p>
      <span
        className="text-red-500 hover:text-red-700 text-[24px] sm:text-[24px] cursor-pointer duration-500"
        onClick={decrease}
      >
        <FiMinusSquare />
      </span>
    </div>
  );
};
export default QuantityCounter;
