import React from "react"

const SearchBar = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="text-center">
      {/*       <label htmlFor="search">search</label>
       */}{" "}
      <input
        className="lg:w-full mx-auto pl-2 p-2 outline-none rounded-md"
        type="text"
        name="text"
        placeholder="find your product!"
      />
      {/*      <button
        type="submit"
        className="bg-teal-700 text-white px-4 py-2 rounded-r-md duration-300 hover:bg-teal-600"
      >
        Search
      </button> */}
    </form>
  )
}

export default SearchBar
