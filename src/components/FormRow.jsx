const FormRow = ({ type, placeholder, label }) => {
  return (
    <div className="flex flex-col space-y-2 capitalize">
      <label htmlFor={type}>{label}:</label>
      <input
        type={type}
        className="p-4 duration-300 outline-teal-600 bg-slate-100"
        placeholder={placeholder}
      />
    </div>
  );
};
export default FormRow;
