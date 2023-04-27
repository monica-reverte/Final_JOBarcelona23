import React from 'react'
import "./Filter.css"
import { GiGoalKeeper } from "react-icons/gi"
import { FaFlag } from "react-icons/fa"
import { BiFootball } from "react-icons/bi"
import { Link } from 'react-router-dom'

export const Filter = () => {
  return (
    <div className="filter-bar">
        <ul className="list-bar">
            <li className="list-bar">
                <GiGoalKeeper />
                <span>Position</span>
            </li>
            <li className="list-bar">
                <FaFlag />
                <span>Country</span></li>
            <li className="list-bar">
            <BiFootball />
            <Link to={"/goals"}>
                <span>Goal Ranking</span>
            </Link>
            </li>

        </ul>
    </div>
  )
}
