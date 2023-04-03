import { useState } from "react";

const Sort = ({ tempProducts, handleSort, sort }) => {
  return (
    <>
      <section className="flex flex-col items-center justify-center mt-12 space-x-8 space-y-6 md:flex-row md:space-y-0">
        <p>{tempProducts.length} products found!</p>
        <hr className="hidden w-64 bg-teal-700 md:block" />
        <form>
          <label htmlFor="sort">sort products by :</label>
          <select
            className="outline-none px-1.5 py-1 rounded-md capitalize ml-4 cursor-pointer"
            name="sort"
            id="sort"
            value={sort}
            onChange={handleSort}
          >
            <option value="price-lowest">price (lowest)</option>
            <option value="price-highest">price (highest)</option>
            <option value="name-a">name (a-z)</option>
            <option value="name-z">name (z-a)</option>
          </select>
        </form>
      </section>
    </>
  );
};

export default Sort;
