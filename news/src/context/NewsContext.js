import React, { useContext, createContext, useState, useEffect } from "react";

const NewsContext = createContext();
const API_KEY = process.env.REACT_APP_KEY;
const url = `https://newsapi.org/v2/top-headlines?`;

export const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("business");
  const [country, setCountry] = useState("in");

  const [articles, setArticles] = useState([]);
  console.log(`${API_KEY}`);

  const getData = async () => {
    const response = await fetch(
      `${url}country=${country}&category=${category}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    setArticles(data.articles);
    console.log(data.articles);
  };
  useEffect(() => {
    getData();
  }, [category, country]);

  return (
    <NewsContext.Provider
      value={{ setCategory, setCountry, articles, country }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
