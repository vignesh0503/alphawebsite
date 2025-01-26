import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./Form.css";
import { useState } from "react";

const DoForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneno] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [phonenoMessage, setPhonenoMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = () => {
    const namepattern =
      /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let valid = true;
    if (username.trim() === "") {
      setUserMessage("Enter Your Name");
      valid = false;
    } else if (!namepattern.test(username)) {
      setUserMessage("Name is invalid");
      valid = false;
    } else {
      setUserMessage("");
    }

    if (email.trim() === "") {
      setEmailMessage("Enter an Email");
      valid = false;
    } else if (!emailpattern.test(email)) {
      setEmailMessage("Invalid email");
      valid = false;
    } else {
      setEmailMessage("");
    }
    if (phoneNo.trim() === "") {
      setPhonenoMessage("Enter Your Number");
      valid = false;
    } else {
      setPhonenoMessage("");
    }

    if (valid) {
      setSuccess("Form submitted successfully");
      setUsername("");
      setEmail("");
      setPhoneno("");
    } else {
      setSuccess("");
    }
  };

  const handleUser = (e) => {
    setUsername(e.target.value);
    setUserMessage("");
    setSuccess("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailMessage("");
    setSuccess("");
  };
  const handlePhone = (e) => {
    setPhoneno(e.target.value);
    setPhonenoMessage("");
    setSuccess("");
  };
  return (
    <div className="Do-For-Section">
      <div className="Do-For-Content">
        <h1 className="Do-for-Header">What can us do for you</h1>
        <p>
          We are ready to work on a project of any complexity, whether it’s
          commercial or residential.
        </p>
      </div>
      <div className="Do-Form-Form">
        <div className="Form-Do">
          <input
            value={username}
            onChange={handleUser}
            type="text"
            placeholder="Enter username"
            className="Do-Form-input"
          />
          {userMessage && (
            <p style={{ color: "red", fontSize: "12px" }}>{userMessage}</p>
          )}
        </div>
        <div className="Form">
          <input
            value={email}
            onChange={handleEmail}
            type="email"
            placeholder="Enter an email"
            className="Do-Form-input"
          />
          {emailMessage && (
            <p style={{ color: "red", fontSize: "12px" }}>{emailMessage}</p>
          )}
        </div>
        <div className="Form">
          <input
            type="number"
            onChange={handlePhone}
            placeholder="Your phone number"
            className="Do-Form-input"
          />
          {phonenoMessage && (
            <p style={{ color: "red", fontSize: "12px" }}>{phonenoMessage}</p>
          )}
        </div>
        <div className="Form">
          <select className="Do-Form-input">
            <option value="Select Course">Select Course</option>
            <option value="Html">Html</option>
            <option value="Css">Css</option>
            <option value="Java Script">Java Script</option>
          </select>
        </div>
      </div>
      <div className="Do-Forbtn">
        <button className="Do-For-btn" onClick={handleSubmit}>
          Get in Touch <span>{<FaArrowRight />}</span>
        </button>
      </div>
      {success && <p style={{ color: "green", fontSize: "12px" }}>{success}</p>}
    </div>
  );
};

export default DoForm;
