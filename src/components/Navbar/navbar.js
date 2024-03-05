import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-brand">
          <Link className="nav-link">JobDekho.com</Link>
        </div>
        <div className="navbar-nav">
          <div className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </div>
          <div className="nav-item" to="/company-review">
            <Link className="nav-link">Company Review</Link>
          </div>
          <div className="nav-item" to="/salary-guide">
            <Link className="nav-link">Salary Guide</Link>
          </div>
        </div>
        <div className="right-navbar-nav">
          <div className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link">Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
