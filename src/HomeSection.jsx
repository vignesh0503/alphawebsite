import React, { Fragment } from "react";
import { FaArrowRight, FaLocationDot, FaPhone } from "react-icons/fa6";
import Heartimg from "./assets/images/Heart.png";
// import GetinTouchimg from "./assets/images/Rectangle 631 .png";
import GetinTouchimg from "./assets/images/cart-img.jpeg";
import cardimg from "./assets/images/education.png";
import { IoIosArrowForward, IoMdMail } from "react-icons/io";
import { GoShieldCheck } from "react-icons/go";
import Experinceimg from "./assets/images/Exp.png";
import experinceimg from "./assets/images/Image.png";
import logoimage from "./assets/images/Mask group.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiAlarm } from "react-icons/pi";

const HomeSection = () => {
  const x = [
    {
      //   image: <cardimg />,
      heading: "AR Calling",
      para: "Lorem ipsum dolor sit amet consectetu Ttempor egestas neque lectus",
    },
    {
      //   image: <cardimg />,
      heading: "AR Calling",
      para: "Lorem ipsum dolor sit amet consectetu Tempor egestas neque lectus",
    },
    {
      //   image: <cardimg />,
      heading: "AR Calling",
      para: "Lorem ipsum dolor sit amet consectetu Tempor egestas neque lectus",
    },
    {
      //   image: <cardimg />,
      heading: "AR Calling",
      para: "Lorem ipsum dolor sit amet consectetu Tempor egestas neque lectus",
    },
  ];
  return (
    <Fragment>
      {/* HERO SECTION */}
      <div className="Hero-Section">
        <div className="Hero-bg-color">
          <div className="hero-content-left">
            <h2 className="Hero-header1">Master Medical Coding</h2>
            <h2 className="Hero-header2">
              Achieve Excellence in Healthcare Services
            </h2>
            <p className="Hero-para">
              Your Gateway to Expert Training and Reliable Coding Solutions
            </p>
          </div>

          <form className="Hero-Form">
            <h1 className="Hero-Form-header">We're here to help!</h1>
            <p className="Hero-Form-para">
              Please contact us in case of any query.
            </p>

            <input type="text" placeholder="Your Name" className="form-input" />

            <input
              type="email"
              placeholder="Your Email address"
              className="form-input"
            />

            <input
              type="number"
              placeholder="Your phone number"
              className="form-input"
            />

            <select className="form-input">
              <option value="Select Course">Select Course</option>
              <option value="Html">Html</option>
              <option value="Css">Css</option>
              <option value="Java Script">Java Script</option>
            </select>

            <div>
              <button className="Hero-btn">
                Get in Touch <span>{<FaArrowRight />}</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ABOUT_SECTION */}
      <div className="About-section">
        <div className="About-section-header">
          <h1>About Alpha</h1>
          <p>
            At Alpha Healthcare, we specialize in delivering accurate,
            efficient, and reliable medical codingsolutions that empower
            healthcare providers to focuson what they do best-caring for
            patients.
          </p>
        </div>
        <div className="About-Card-Section">
          <div className="About-Card-Content">
            <div className="About-Card">
              <img src={Heartimg} alt="" />
              <h2>Our Vision</h2>
              <p>
                To revolutionize healthcare administration through precise and
                innovative coding solutions, enabling a more efficient and
                patient-focused healthcare system.
              </p>
            </div>
            <div className="About-Card">
              <img src={Heartimg} alt="" />
              <h2>Our Vision</h2>
              <p>
                To revolutionize healthcare administration through precise and
                innovative coding solutions, enabling a more efficient and
                patient-focused healthcare system.
              </p>
            </div>
            <div className="About-Card">
              <img src={Heartimg} alt="" />
              <h2>Our Vision</h2>
              <p>
                To revolutionize healthcare administration through precise and
                innovative coding solutions, enabling a more efficient and
                patient-focused healthcare system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* OUR TRANNING PROGRAM */}

      <div className="Training-Section">
        <div className="Training-Header">
          <h1>Our Training Programs</h1>
          <p>
            At Alpha Healthcare, we specialize in delivering accurate,
            efficientthat empower healthcare providers to focuson what they do
            best-caring for patients.
          </p>
        </div>

        <div className="Training-Card">
          {x.map((item) => (
            <div className="Training-card-content">
              <div className="Training-card-img">
                <img src={cardimg} className="cardimages" alt="img" />
              </div>
              <div className="Training-Card-subcontent">
                <h3>{item.heading}</h3>
                <p>{item.para}</p>
                <div className="Training-card-footer">
                  <div className="Start-btn">
                    Start Course
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </div>
                  <div className="card-time">
                    <PiAlarm className="card-time-icon" />
                    <span>2 Months</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Get in Touch */}

      <div className="Get-In-Section">
        <div className="Get-Card-Img">
          <img src={GetinTouchimg} alt="" />
        </div>
        <div className="Get-Card-Contents">
          <div className="Get-Card-Content">
            <h2>Lorem ipsum dolor sit amet consectetura</h2>
            <h3>
              Lorem ipsum dolor sit amet consectetur. Lacus at pellentesque in
              vitae.
            </h3>
            <div className="Get-SubContent">
              <p>
                <span>
                  <GoShieldCheck />
                </span>
                Lorem ipsum dolor sit amet consectetur
              </p>
              <p>
                <span>
                  <GoShieldCheck />
                </span>
                Lorem ipsum dolor sit amet consectetur
              </p>
              <p>
                <span>
                  <GoShieldCheck />
                </span>
                Lorem ipsum dolor sit amet consectetur
              </p>
              <p>
                <span>
                  <GoShieldCheck />
                </span>
                Lorem ipsum dolor sit amet consectetur
              </p>

              <div className="Get-Btn">
                <button className="Getin-btn">
                  Get in Touch <span>{<FaArrowRight />}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience SECTION */}

      <div className="Experience-section">
        <div className="Experience-Content">
          <div class="Experience-Bg">
            <div className="Experience-SubContent">
              <h1>Experience Excellence, Enroll Now!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Pellentesque arcu mauris
                turpis tincidunt sed morbi. Praesent sapien eget commodo ut
                pretium. Amet id enim lorem habitant
              </p>
            </div>
            <div className="Experience-img">
              <img src={experinceimg} alt="" className="Expimg" />
              <img src={Experinceimg} alt="" className="Expimg-Mobile" />
            </div>
          </div>
        </div>
      </div>

      {/* What Can I Do For Us */}

      <div className="Do-For-Section">
        <div className="Do-For-Content">
          <div className="Do-for-Header">
            <h1>What can us do for you</h1>
            <p>
              We are ready to work on a project of any complexity, whether it’s
              commercial or residential.
            </p>
          </div>
          <form className="Do-Form-Form">
            <div className="Form-Do">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email address" />
              <input type="number" placeholder="Your phone number" />
              <select>
                <option value="Select Course">Select Course</option>
                <option value="Html">Html</option>
                <option value="Css">Css</option>
                <option value="Java Script">Java Script</option>
              </select>
            </div>
            <div className="Do-Forbtn">
              <button className="Do-For-btn">
                Get in Touch <span>{<FaArrowRight />}</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="Footer-section">
        <div className="Footer-Content">
          <div className="FooterSubcontent">
            <div className="Footer-logo">
              <img src={logoimage} alt="" />
            </div>
            <p className="Footerpara">
              Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
              diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
              muvåning, och pesask vyfisat. Viktiga poddradio har un mad och
              inde.
            </p>
            <div className="Footer-icon">
              <p>{<FaFacebookF />}</p>
              <p>{<FaTwitter />}</p>
              <p>{<FaLinkedin />}</p>
              <p>{<FaInstagram />}</p>
            </div>
          </div>
          <div className="FooterSubcontent">
            <h1>Links</h1>
            <p>Home</p>
            <p>About </p>
            <p>Services</p>
            <p>Courses</p>
            <p> Contact</p>
          </div>
          <div className="FooterSubcontent">
            <h1>Courses</h1>
            <p>AR Caller </p>
            <p>Medical Billing</p>
            <p>Medical Coding</p>
          </div>
          <div className="FooterSubcontent">
            <h1>Contact</h1>

            <p className="Footer-Address">
              <span>
                <FaPhone />
              </span>
              +91 98765 43210
            </p>
            <p className="Footer-Address">
              <span>
                <IoMdMail />
              </span>
              alpha123@gmail.com
            </p>
            <p className="Footer-Address">
              <span>
                <FaLocationDot />
              </span>
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
        <div className="Copyrights-Footer">
          <p>© 2025alphahealthcare.com</p>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeSection;
