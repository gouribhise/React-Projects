import React, { useContext, useState } from "react";
import SearchContext from "../context/SearchContext";
import { useNavigate } from "react-router-dom";
const imgn = require("./No_Image_Available.jpg");

const Search = () => {
  const { setSearch, articles } = useContext(SearchContext);
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const goToArticle = (item) => {
    navigate("article", { state: { article: item } });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 mx-auto py-5 me-13">
          <div class="form-group fg--search">
            <input
              type="text"
              className="input mx-5"
              placeholder="search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <button
              className="btn btn-secondary rounded-pill btn-block"
              onClick={() => setSearch(term)}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        {articles.map((item) => {
          return (
            <div className="col-lg-6">
              <div className="py-2">
                <a
                  onClick={() => {
                    goToArticle(item);
                  }}
                  className="title"
                >
                  {item.title}
                </a>
                <br />
                {item.urlToImage ? (
                  <img src={item.urlToImage} className="home-img" />
                ) : (
                  <img src={imgn} className="home-img" />
                )}
                <br />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
