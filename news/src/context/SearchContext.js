import React, { useContext, createContext, useState, useEffect } from "react";

const SearchContext = createContext();
const API_KEY = process.env.REACT_APP_KEY;
const url = `hhttps://newsapi.org/v2/everything?q=Apple&from=2024-02-22&sortBy=popularity&apiKey=4b58abbb814841fdb45d817b38716511`;
const searchUrl = `https://newsapi.org/v2/everything?`;
export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState(null);
  const [articles, setArticles] = useState([]);

  console.log(`${API_KEY}`);
  console.log("what is search", search);
  const getData = async () => {
    console.log("inside getdata");
    const response = await fetch(`${searchUrl}q=${search}&apiKey=${API_KEY}`);
    console.log(response);
    const data = await response.json();

    setArticles(data.articles);
    console.log(data.articles);
  };
  useEffect(() => {
    getData();
  }, [search]);

  return (
    <SearchContext.Provider value={{ articles, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
