import React from "react";
import { Link } from "react-router-dom";
import logoimg from "./assets/images/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBarSection = () => {
  return (
    <div className="navbar">
      {/* <div className="nav"> */}
      <div className="logo">
        <img src={logoimg} alt="Logo-img" />
      </div>

      <div className="navbar-content">
        <input type="checkbox" id="check" />

        <label htmlFor="check" className="checkbtn">
          <FaBars className="bar-icon" />
          <FaTimes className="x-icon" />
        </label>

        <ul className="nav-ul ">
          <li>
            <Link className="active" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link to={""}>About</Link>
          </li>
          <li>
            <Link to={""}>Services</Link>
          </li>
          <li>
            <Link to={""}>Courses</Link>
          </li>
          <li>
            <Link to={""}>Contact</Link>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </div>
  );
};

export default NavBarSection;
