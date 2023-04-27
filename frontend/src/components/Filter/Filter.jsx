import React from 'react'
import "./Filter.css"
import { GiGoalKeeper } from "react-icons/gi"
import { FaFlag } from "react-icons/fa"
import { BiFootball } from "react-icons/bi"

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
                <span>Goal Ranking</span>
            </li>

        </ul>
    </div>
  )
}
