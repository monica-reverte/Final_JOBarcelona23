import React, { useState } from "react";
import "./NavBar.css";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search/" + input);
  };

  return (
    <header>
      <h1>TeamTracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="Search..."
        />
        <BsSearch className="search-icon" />
      </form>
    </header>
  );
};
