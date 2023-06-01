import { useEffect, useState } from "react";
import { useProductStore } from "../Features/productStore";

const useFilterProducts = () => {
  const productsList = useProductStore((state) => state.productsList);
  const allCategories = [...new Set(productsList.map((c) => c.category))];
  const allCompanies = [...new Set(productsList.map((c) => c.company))];
  const [containerData, setcontainerData] = useState(productsList);
  const [selectedCategoryItem, setSelectedCategoryItem] = useState(null);
  const [selectedCompanyItem, setSelectedCompanyItem] = useState(null);

  const categoryFilter = () => {
    let results = [...productsList];
    let filteredCategoryResult;
    if (selectedCategoryItem) {
      filteredCategoryResult = results.filter((item) => {
        if (selectedCategoryItem.includes(item.category)) {
          return item;
        }
        return null;
      });
      setcontainerData(filteredCategoryResult);
    }
  };

  const companyFilter = () => {
    let results = [...productsList];
    let filteredCompanyResult;
    if (selectedCompanyItem) {
      filteredCompanyResult = results.filter((item) => {
        if (selectedCompanyItem.includes(item.company)) {
          return item;
        }
        return null;
      });
      setcontainerData(filteredCompanyResult);
    }
  };

  const removeFilter = () => {
    setSelectedCategoryItem(null);
    setSelectedCompanyItem(null);
    setcontainerData(productsList);
  };

  useEffect(() => {
    categoryFilter();
    companyFilter();
  }, [selectedCategoryItem, selectedCompanyItem]);

  return {
    containerData,
    selectedCategoryItem,
    setSelectedCategoryItem,
    selectedCompanyItem,
    setSelectedCompanyItem,
    allCategories,
    allCompanies,
    removeFilter,
  };
};

export default useFilterProducts;
