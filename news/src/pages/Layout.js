import React from "react";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
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
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/search" className="nav-link">
                  Search
                </Link>
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

      <Outlet />
    </>
  );
};

export default Layout;
