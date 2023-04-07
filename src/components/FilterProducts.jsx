import productStore from "../Features/productStore";

const FilterProducts = ({
  selectedCategoryItem,
  setSelectedCategoryItem,
  selectedCompanyItem,
  setSelectedCompanyItem,
}) => {
  const onCategoryChange = (item) => {
    setSelectedCategoryItem([...selectedCategoryItem, item]);
  };

  const onCompanyChange = (item) => {
    setSelectedCompanyItem([...selectedCompanyItem, item]);
  };

  const productsList = productStore((state) => state.productsList);
  const allCategories = [...new Set(productsList.map((c) => c.category))];
  const allCompanies = [...new Set(productsList.map((c) => c.company))];

  return (
    <div className="p-4 border-2 rounded-md h-96 border-zinc-200">
      <div className="flex justify-between mb-5 capitalize">
        <h2 className="text-center">Filter</h2>
        <span className="font-medium text-red-400 duration-200 cursor-pointer hover:text-red-600">
          clear
        </span>
      </div>
      <div className="flex flex-col space-y-6">
        <article>
          <h3 className="mb-2 capitalize">select category:</h3>
          {allCategories.map((cat, i) => {
            return (
              <div key={i} className="mb-1">
                <input
                  type="checkbox"
                  id={cat}
                  name="category"
                  value={cat}
                  onChange={() => onCategoryChange(cat)}
                />
                <label className="pl-2 capitalize" htmlFor="category">
                  {cat}
                </label>
              </div>
            );
          })}
        </article>
        <article>
          <label htmlFor="company" className="block mb-2 capitalize">
            select company:
          </label>
          <select
            name="company"
            id="company"
            className="outline-none"
            onChange={(e) => onCompanyChange(e.target.value)}
          >
            {allCompanies.map((company, i) => {
              return (
                <option
                  key={i}
                  className="capitalize cursor-pointer"
                  value={company}
                >
                  {company}
                </option>
              );
            })}
          </select>
        </article>
        {/*  <section>
          <label htmlFor="price">Price</label>
          <input type="range" max="" min="" />
        </section> */}
      </div>
    </div>
  );
};
export default FilterProducts;
