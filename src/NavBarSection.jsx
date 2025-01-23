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
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/courses"}>Courses</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </div>
  );
};

export default NavBarSection;
