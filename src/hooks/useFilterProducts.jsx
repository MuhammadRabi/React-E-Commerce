import { useEffect, useState } from "react";
import productStore from "../Features/productStore";

const useFilterProducts = () => {
  const productsList = productStore((state) => state.productsList);
  const [containerData, setcontainerData] = useState(productsList);
  const [selectedCategoryItem, setSelectedCategoryItem] = useState([]);
  const [selectedCompanyItem, setSelectedCompanyItem] = useState([]);

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

  useEffect(() => {
    if (selectedCategoryItem.length > 0) {
      categoryFilter();
    }
    if (selectedCompanyItem.length > 0) {
      companyFilter();
    }
  }, [selectedCategoryItem, selectedCompanyItem]);

  return {
    containerData,
    selectedCategoryItem,
    setSelectedCategoryItem,
    selectedCompanyItem,
    setSelectedCompanyItem,
    categoryFilter,
    companyFilter,
  };
};

export default useFilterProducts;
