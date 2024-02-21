import React, { useContext } from "react";
import NewsContext from "../context/NewsContext";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const { setCategory, setCountry, articles } = useContext(NewsContext);
  const navigate = useNavigate();

  const goToArticle = (item) => {
    navigate("article", { state: { article: item } });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8">
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
              class="btn btn-secondary dropdown-toggle rounded-pill"
              data-bs-toggle="dropdown"
            >
              Select Country
            </button>
            <ul class="dropdown-menu">
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setCountry("au")}
                >
                  Australia
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setCountry("cz")}
                >
                  Czech Republic
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setCountry("fr")}
                >
                  France
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setCountry("in")}
                >
                  India
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setCountry("jp")}
                >
                  Japan
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setCountry("nl")}
                >
                  Netherlands
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setCountry("pl")}
                >
                  Portugal
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setCountry("ru")}
                >
                  Russia
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setCountry("sa")}
                >
                  Saudi Arabia
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setCountry("sk")}
                >
                  South Africa
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setCountry("th")}
                >
                  Thailand
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setCountry("ua")}
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
              <div>
                <a
                  onClick={() => {
                    goToArticle(item);
                  }}
                >
                  {item.title}
                </a>
              </div>

              {item.urlToImage ? (
                <img src={item.urlToImage} className="home-img" />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
