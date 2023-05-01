const Button = ({ title }) => {
  return (
    <button className="px-4 py-2 capitalize duration-300 bg-teal-600 rounded-md w-fit hover:text-teal-600 hover:bg-white hover:scale-110">
      {title}
    </button>
  );
};
export default Button;
