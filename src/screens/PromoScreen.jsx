import React from "react";
import { GiBrokenHeartZone } from "react-icons/gi";
import { AiFillUnlock } from "react-icons/ai";
import {FaSolarPanel} from "react-icons/fa"
export const PromoScreen = () => {
  return (
    <section className="promo_section ">
      <div className="container p-3">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-8">
            <div className="section_heading text-center">
              <h2>
                Why do every people
                <br />
                <span>love App-mobile?</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br /> Culpa commodi, fugit suscipit ut
              </p>
            </div>
          </div>
        </div>
        <div className="row  mobile_px_20 ">
          <div className="col-md-6 col-lg-4 p-0">
            <div className="single_promo_hover single_promo_1 text-center">
              <div className="circle-icon">
                <span className="text-black">
                  <GiBrokenHeartZone />{" "}
                </span>
              </div>
              <h5>Clean Design</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                commodi, fugit suscipit ut
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 p-0">
            <div className="single_promo_hover single_promo_1 text-center">
              <div className="circle-icon">
                <span className=" text-black"> <AiFillUnlock/> </span>
              </div>
              <h5>Secure Data</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                commodi, fugit suscipit ut
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 p-0">
            <div className="single_promo_hover single_promo_1 text-center">
              <div className="circle-icon">
                <span className="ti-panel text-black "><FaSolarPanel/></span>
              </div>
              <h5>Retina Ready</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                commodi, fugit suscipit ut
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PromoScreen