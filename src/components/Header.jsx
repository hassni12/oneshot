import React from "react";
import { Link } from "react-router-dom";
import Whitelogo from "../assets/images/logo/oneshot-white.png";
import Pinklogo from "../assets/images/logo/oneshot-pink.png";
import heroImage from "../assets/images/m.png";
// import {} from ""
import { BsFilterRight } from "react-icons/bs";

const Header = () => {
  return (
    <header >
      <nav className="navbar navbar-expand-lg navbar-sticky fixed-top">
        <div className="container">
          <Link className="navbar-brand " to="#">
            <img
              src={Whitelogo}
              alt="logo"
              className="img-fluid navbar-brand-regular "
            />
            <img
              src={Pinklogo}
              alt="logo"
              className="img-fluid navbar-brand-sticky "
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              {" "}
              {/* <BsFilterRight /> */}
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <Link className="nav-link nav-link-hover scroll active " to="#home">
                  Home
                </Link>
              </li>
              <li className="nav-item nav-link-hover">
                <Link className="nav-link scroll"  to="#features">
                  Features
                </Link>
              </li>
              <li className="nav-item nav-link-hover">
                <Link className="nav-link scroll" to="#screen">
                  Screenshots
                </Link>
              </li>
              <li className="nav-item nav-link-hover">
                <Link className="nav-link scroll" to="#pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item nav-link-hover">
                <Link className="nav-link scroll" to="#contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
