import React, { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  const getSearchData = async () => {
    setLoading(true);
    try {
      const response = await fetchDataFromApi(`search/?q=${selectedCategory}`);
      setSearchResults(response.contents);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSearchData();
  }, [selectedCategory]);

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
