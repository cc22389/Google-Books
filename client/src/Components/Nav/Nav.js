import React from "react";
import "./Nav.css";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="./">Google Books</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link
            to="/"
            className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Searched
          </Link>
          <Link
            to="/saved"
            className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
            Saved
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

