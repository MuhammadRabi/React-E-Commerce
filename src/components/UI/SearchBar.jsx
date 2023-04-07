const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="text-center ">
      <input
        className="w-3/4 p-2 mx-auto border rounded-md lg:w-1/2"
        name="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="find your product!"
      />
    </form>
  );
};

export default SearchBar;
