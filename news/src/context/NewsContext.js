import React, { useContext, createContext, useState, useEffect } from "react";

const NewsContext = createContext();
const API_KEY = process.env.REACT_APP_KEY;
const url = `https://newsapi.org/v2/top-headlines?`;
export const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState(null);
  const [country, setCountry] = useState(null);
  console.log(`${API_KEY}`);

  const getData = async () => {
    const response = await fetch(
      `${url}country=${country}&category=${category}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    console.log(data.articles);
  };
  useEffect(() => {
    getData();
  }, [category, country]);

  return (
    <NewsContext.Provider value={{ setCategory, setCountry, getData }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
