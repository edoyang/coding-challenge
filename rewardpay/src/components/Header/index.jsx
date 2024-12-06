import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <div className="menu">
        <Link to="revenue">Revenue</Link>
        <Link to="expenses">Expenses</Link>
        <Link to="gpm">GPM</Link>
        <Link to="npm">NPM</Link>
        <Link to="wcr">WCR</Link>
        <Link to="dataset">Dataset</Link>
      </div>
    </header>
  );
};

export default Header;
