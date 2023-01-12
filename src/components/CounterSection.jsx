import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export const CounterSection = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <section className="section counter_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 col-sm-3 single_counter text-center">
            <div className="counter_inner p-3 p-md-0">
              <div className="counter_item d-inline-block mb-3">
                <ScrollTrigger
                  style={{ display: "inline" }}
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <span className="counter fw-bold">
                    {counterOn && <CountUp start={0} end={10} />}
                  </span>
                </ScrollTrigger>

                <span className="fw-bold">M</span>
              </div>
              <h5>users</h5>
            </div>
          </div>
          <div className="col-6 col-sm-3 single_counter text-center">
            <div className="counter_inner p-3 p-md-0">
              <div className="counter_item d-inline-block mb-3">
                <ScrollTrigger
                  style={{ display: "inline" }}
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <span className="counter fw-bold">
                    {" "}
                    {counterOn && <CountUp start={0} end={23} />}
                  </span>
                </ScrollTrigger>{" "}
                <span className="fw-bold">K</span>
              </div>
              <h5>Downloads</h5>
            </div>
          </div>
          <div className="col-6 col-sm-3 single_counter text-center">
            <div className="counter_inner p-3 p-md-0">
              <div className="counter_item d-inline-block mb-3">
                <ScrollTrigger
                  style={{ display: "inline" }}
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <span className="counter fw-bold">
                    {" "}
                    {counterOn && <CountUp start={0} end={9} />}
                  </span>
                </ScrollTrigger>{" "}
                <span className="fw-bold">M</span>
              </div>
              <h5>customers</h5>
            </div>
          </div>
          <div className="col-6 col-sm-3 single_counter text-center">
            <div className="counter_inner p-3 p-md-0">
              <div className="counter_item d-inline-block mb-3">
                <ScrollTrigger
                  style={{ display: "inline" }}
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <span className="counter fw-bold">
                    {" "}
                    {counterOn && <CountUp start={0} end={12} />}
                  </span>
                </ScrollTrigger>{" "}
                <span className="fw-bold">k</span>
              </div>
              <h5>Developers</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
