import React from "react";
import "./Header.css";
import { BsSearch } from "react-icons/bs";

export const NavBar = () => {
  return (
    <header>
      <h1>TeamTracker</h1>
      <div>
        <input type="text"></input>
        <BsSearch />
      </div>
    </header>
  );
};
