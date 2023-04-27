import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="rrss">
        <div>
          <p>TeamTracker</p>
        </div>
        <ul className="rss-list">
          <li>
            <a href="www.instagram.com" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="www.facebook.com" target="_blank">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="www.twitter.com" target="_blank">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>

      <div className="privacy">
        <small>© 2023 TeamTracker – All Rights Reserved.</small>
        <ul>
          <li>
            <a href="#">PRIVACY & COOKIE POLICY</a>
          </li>
          <li>
            <a href="#">ADVERTISE</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
