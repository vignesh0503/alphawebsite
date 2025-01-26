import React from "react";
import { Link } from "react-router-dom";
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
            <Link onClick={closeMenu} className="active" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to={""}>
              About
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to={""}>
              Services
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to={""}>
              Courses
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to={""}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarSection;
