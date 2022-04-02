import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <header>
      <h2 className={classes.heading}>Library Bees</h2>
      <div>
        <a href="/">Search</a>
        <a href="/mybooks">MyBooks</a>
        <a href="/about">About</a>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
