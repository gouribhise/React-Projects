import React, { useContext, useState } from "react";
import SearchContext from "../context/SearchContext";

const Search = () => {
  const { setSearch, articles } = useContext(SearchContext);
  const [term, setTerm] = useState("");
  return (
    <div className="row">
      <div className="col-lg-10 mx-auto py-5">
        <div class="form-group fg--search">
          <input
            type="text"
            className="input mx-5"
            placeholder="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button className="btn btn-primary" onClick={() => setSearch(term)}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
