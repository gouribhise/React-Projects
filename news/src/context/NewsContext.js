import React, { useContext, createContext, useState, useEffect } from "react";

const NewsContext = createContext();
const API_KEY = `${process.env.REACT_APP_KEY}`;
const url = `GET https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`;
export const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  console.log(`${process.env.REACT_APP_KEY}`);
  const getData = async () => {
    const response = await fetch(url);
    console.log("response:", response);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("category:", category);
  console.log("my api key:", url);
  console.log("country", country);
  return (
    <NewsContext.Provider value={{ setCategory, setCountry }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
