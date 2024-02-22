import React, { useContext, useState } from "react";
import NewsContext from "../context/NewsContext";
import { useNavigate } from "react-router-dom";

const imgn = require("./No_Image_Available.jpg");
const Home = () => {
  const [count, setCount] = useState("");
  const { setCategory, country, setCountry, articles } =
    useContext(NewsContext);

  const navigate = useNavigate();

  const goToArticle = (item) => {
    navigate("article", { state: { article: item } });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-9">
          <div className="row py-2">
            <button
              className="col mx-2 rounded-pill"
              onClick={() => setCategory("business")}
            >
              Business
            </button>
            <button
              className="col mx-1 rounded-pill"
              onClick={() => setCategory("entertainment")}
            >
              Entertainment
            </button>
            <button
              className="col mx-1 rounded-pill"
              onClick={() => setCategory("health")}
            >
              Health
            </button>
            <button
              className="col mx-1 rounded-pill"
              onClick={() => setCategory("science")}
            >
              Science
            </button>

            <button
              className="col mx-1 rounded-pill"
              onClick={() => setCategory("sports")}
            >
              Sports
            </button>
            <button
              className="col mx-1 rounded-pill"
              onClick={() => setCategory("techonology")}
            >
              Technology
            </button>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="dropdown py-2">
            <button
              type="button"
              className="btn  btn-outline-secondary dropdown-toggle rounded-pill country"
              data-bs-toggle="dropdown"
            >
              {count ? count : "Select Country"}
            </button>
            <ul class="dropdown-menu">
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => {
                    setCountry("au");
                    setCount("Australia");
                  }}
                >
                  Australia
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => {
                    setCountry("cz");
                    setCount("Czech Republic");
                  }}
                >
                  Czech Republic
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => {
                    setCountry("fr");
                    setCount("France");
                  }}
                >
                  France
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => {
                    setCountry("in");
                    setCount("India");
                  }}
                >
                  India
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => {
                    setCountry("jp");
                    setCount("Japan");
                  }}
                >
                  Japan
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => {
                    setCountry("nl");
                    setCount("Netherlands");
                  }}
                >
                  Netherlands
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => {
                    setCountry("pl");
                    setCount("Portugal");
                  }}
                >
                  Portugal
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => {
                    setCountry("ru");
                    setCount("Russia");
                  }}
                >
                  Russia
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => {
                    setCountry("sa");
                    setCount("Saudi Arabia");
                  }}
                >
                  Saudi Arabia
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => {
                    setCountry("sk");
                    setCount("South Africa");
                  }}
                >
                  South Africa
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => {
                    setCountry("th");
                    setCount("Thailand");
                  }}
                >
                  Thailand
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => {
                    setCountry("ua");
                    setCount("UAE");
                  }}
                >
                  UAE
                </a>
              </li>
            </ul>
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

export default Home;
