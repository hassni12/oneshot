import React from "react";
import {TfiMedallAlt} from "react-icons/tfi"
import {BsClipboard,BsGift} from "react-icons/bs"
import {BiCrown} from "react-icons/bi"

export const PricingScreen = () => {
  return (
    <section id="pricing" className="ptb_100">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 offset-md-3">
            <div className="section_heading text-center">
              <h2>Approdable Packages</h2>
              <p className="section_sub_title">
                Lorem ipsum dolor sit amet consectetur, ipsa aperiam rerum
                beatae doloribus officiis blanditiis dignissimos?.
              </p>
            </div>
          </div>
        </div>
        <div className="row mobile_px_30">
          <div className="col-12 col-md-6 col-lg-3 ">
            <div className="single_price">
              {/* <!-- month --> */}
              <div className="month">Month</div>
              <h5>premium</h5>
              <div className="icon_pad">
                {/* <!-- icon-circle --> */}
                <div className="icon_circle">
                  <span className=""><TfiMedallAlt/></span>
                </div>
              </div>

              <div className="doler">
                <h2>
                  <span className="doler-sine">$</span>35
                </h2>
              </div>

              <ul>
                <br />
                <li>5GB Linux Web Space</li>
                <li>5 MySQL Databases</li>
                <li>24/7 Tech Support</li>
                <li>Daily Backups</li>
              </ul>

              <a href="#" className="btn btn-bordered mt-4">
                learn more
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-3 col-md-6">
            <div className="single_price">
              {/* <!-- month --> */}
              <div className="month">Month</div>
              <h5>basic</h5>
              <div className="icon_pad">
                {/* <!-- icon-circle --> */}
                <div className="icon_circle">
                  <span className=""><BsClipboard/></span>
                </div>
              </div>

              <div className="doler">
                <h2>
                  <span className="doler-sine">$</span>55
                </h2>
              </div>

              <ul>
                <br />
                <li>5GB Linux Web Space</li>
                <li>5 MySQL Databases</li>
                <li>24/7 Tech Support</li>
                <li>Daily Backups</li>
              </ul>

              <a href="#" className="btn btn-bordered mt-4">
                learn more
              </a>
            </div>
          </div>



          <div className="col-12 col-lg-3 col-md-6">
            <div className="single_price">
              {/* <!-- month --> */}
              <div className="month">Month</div>
              <h5>addict</h5>
              <div className="icon_pad">
                {/* <!-- icon-circle --> */}
                <div className="icon_circle">
                  <span className=""><BiCrown/></span>
                </div>
              </div>

              <div className="doler">
                <h2>
                  <span className="doler-sine">$</span>75
                </h2>
              </div>

              <ul>
                <br />
                <li>5GB Linux Web Space</li>
                <li>5 MySQL Databases</li>
                <li>24/7 Tech Support</li>
                <li>Daily Backups</li>
              </ul>

              <a href="#" className="btn btn-bordered mt-4">
                learn more
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-3 col-md-6">
            <div className="single_price">
              {/* <!-- month --> */}
              <div className="month">Month</div>
              <h5>business</h5>
              <div className="icon_pad">
                {/* <!-- icon-circle --> */}
                <div className="icon_circle">
                  <span className=""><BsGift/></span>
                </div>
              </div>

              <div className="doler">
                <h2>
                  <span className="doler-sine">$</span>85
                </h2>
              </div>

              <ul>
                <br />
                <li>5GB Linux Web Space</li>
                <li>5 MySQL Databases</li>
                <li>24/7 Tech Support</li>
                <li>Daily Backups</li>
              </ul>

              <a href="#" className="btn btn-bordered mt-4">
                learn more
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};
export default PricingScreen;
