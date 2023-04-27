import React, { useState } from 'react'
import "./Header.css";
import { BsSearch } from "react-icons/bs"
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search/" + input)
};

  return (
    <div>
        <h1>fndskjnfdskj</h1>
        <form onSubmit={handleSubmit}>
        
            <BsSearch />
            <input onChange={(e)=> setInput(e.target.value)} type="text" value={input} placeholder='Search...'/>
        
        </form>
    </div>
  )
}
