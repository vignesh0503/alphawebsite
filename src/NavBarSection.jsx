import React from "react";
// import { Link } from "react-router-dom";
import logoimg from "./assets/images/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavBarSection = () => {
  const [menuopen, setMenuopen] = useState(false);

  const toggleopen = () => {
    setMenuopen(!menuopen);
  };

  const closeMenu = () => {
    setMenuopen(false);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logoimg} alt="Logo-img" />
      </div>

      <div className="navbar-content">
        <input
          type="checkbox"
          id="check"
          checked={menuopen}
          onChange={toggleopen}
        />

        <label htmlFor="check" className="checkbtn">
          {menuopen ? (
            <FaTimes className="x-icon" />
          ) : (
            <FaBars className="bar-icon" />
          )}
        </label>

        <ul className={`nav-ul ${menuopen ? "open" : ""}`}>
          <li>
            <a onClick={closeMenu} className="active" to={"/"}>
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#About">
              About
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#Training">
              Services
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#Getin">
              Courses
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#WhatDo">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarSection;
