import React from "react";
import { IoIosAppstore } from "react-icons/io";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/m.png";

export const HeroSection = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <div className="home_text">
              <h2>
                Present your app with{" "}
                <span className="text-uppercase">oneshot</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliquaLorem
                ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna sed do
                eiusmod tempor incididunt ut labore et dolore magna aliquaLorem
                ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt{" "}
              </p>
              <div className="home-download-btn">
                <Link to="#" className="btn btn-bordered mt-4 ">
                  <span></span>Play Store
                </Link>
                <Link to="#" className="btn btn-bordered mt-4">
                  <span ></span>App Store
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 ">
            <div className="home-image">            <img src={heroImage} alt="" className="img-fluid" />
</div>
          </div>
        </div>
      </div>
    </section>
  );
};
