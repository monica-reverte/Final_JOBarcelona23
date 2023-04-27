import React, { useState } from "react";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";

export const NavBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q') ?? ""

  const handleInput =({target}) => {
    const {value} =  target
    setSearchParams({q : value})
    
  }

  return (
    <header>
      <h1>TeamTracker</h1>
      <form>
        <BsSearch />
        <input type="search" value={query} name="filter" placeholder="Search" onChange={handleInput} />
      </form>
    </header>
  );
};
