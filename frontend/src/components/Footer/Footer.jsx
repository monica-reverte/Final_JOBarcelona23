import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div>
        <p>TeamTracker</p>
      </div>

      <ol>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaTwitter />
        </li>
      </ol>
    </footer>
  );
};
