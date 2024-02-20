import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)">
            News App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <Link to="/search">Search</Link>
                </a>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
