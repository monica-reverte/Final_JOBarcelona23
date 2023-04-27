import React from 'react'
import "./Header.css";
import { BsSearch } from "react-icons/bs"

export const Header = () => {
  return (
    <div>
        <h1></h1>
        <div>
            <BsSearch />
            <input>Search...</input>
        </div>
    </div>
  )
}
