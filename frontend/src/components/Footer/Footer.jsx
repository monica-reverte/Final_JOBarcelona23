import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div>
        <p>TeamTracker</p>
      </div>

      <ul>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaTwitter />
        </li>
      </ul>
    </footer>
  );
};
