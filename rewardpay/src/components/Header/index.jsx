import React from "react";
import { Link } from "react-router";
import "./style.scss";

const Header = () => {
  return (
    <header>
      <div className="menu">
        <Link to="revenue">
          <button>Revenue</button>
        </Link>
        <Link to="expenses">
          <button>Expenses</button>
        </Link>
        <Link to="gpm">
          <button>GPM</button>
        </Link>
        <Link to="npm">
          <button>NPM</button>
        </Link>
        <Link to="wcr">
          <button>WCR</button>
        </Link>
        <Link to="dataset">
          <button>Dataset</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
