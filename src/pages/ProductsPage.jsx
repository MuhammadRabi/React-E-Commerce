import { useState } from "react";
import FilterProducts from "../components/FilterProducts";
import SearchBar from "../components/UI/SearchBar";
import ProductsContainer from "../components/product/ProductsContainer";
import Sort from "../components/Sort";
import useFilterProducts from "../hooks/useFilterProducts";
import Layout from "../components/UI/Layout";

const ProductsPage = () => {
  const [sort, setSort] = useState("name-a");
  const [searchTerm, setSearchTerm] = useState("");
  const {
    selectedCategoryItem,
    setSelectedCategoryItem,
    setSelectedCompanyItem,
    selectedCompanyItem,
    containerData,
    allCategories,
    allCompanies,
    removeFilter,
  } = useFilterProducts();

  // sorting
  const handleSort = (e) => {
    const sortValue = e.target.value;
    setSort(sortValue);
  };

  let tempProducts = [...containerData];
  if (sort === "price-lowest") {
    tempProducts = containerData.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sort === "price-highest") {
    tempProducts = containerData.sort((a, b) => {
      return b.price - a.price;
    });
  } else if (sort === "name-a") {
    tempProducts = containerData.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } else if (sort === "name-z") {
    tempProducts = containerData.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  }

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
  };

  // search products
  tempProducts = tempProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <Sort handleSort={handleSort} tempProducts={tempProducts} sort={sort} />
      <div className="grid grid-cols-8 gap-8 mt-12 grid-rows-44 auto-rows-auto lg:gap-12">
        <FilterProducts
          selectedCategoryItem={selectedCategoryItem}
          setSelectedCategoryItem={setSelectedCategoryItem}
          selectedCompanyItem={selectedCompanyItem}
          setSelectedCompanyItem={setSelectedCompanyItem}
          allCategories={allCategories}
          allCompanies={allCompanies}
          removeFilter={removeFilter}
        />
        <ProductsContainer tempProducts={tempProducts} />
      </div>
    </Layout>
  );
};
export default ProductsPage;
