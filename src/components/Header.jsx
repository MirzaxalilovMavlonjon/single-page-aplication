/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Shop
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
