import React from "react";
import { Link } from "react-router-dom";
import logoimg from "./assets/images/Logo.png";
import { FaBars } from "react-icons/fa";

const NavBarSection = () => {
  return (
    <div className="navbar">
      {/* <div className="nav"> */}
        <div className="logo">
          <img src={logoimg} alt="Logo-img" />
        </div>

        <div className="navbar-content">
          <input type="checkbox" id="check" />
          <label for="checkbtn" className="checkbtn">
            <FaBars className="bar-icon" />
          </label>
          <ul className="nav-ul">
            <li>
              <Link to={"/"}>Home</Link>
              <Link to={""}>About</Link>
              <Link to={""}>Services</Link>
              <Link to={""}>Courses</Link>
              <Link to={""}>Contact</Link>
            </li>
          </ul>
        </div>
      {/* </div> */}
    </div>
  );
};

export default NavBarSection;
