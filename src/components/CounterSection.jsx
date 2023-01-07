import React from "react";

export const CounterSection = () => {
  return (
    <section className="section counter_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 col-sm-3 single_counter text-center">
            <div className="counter_inner p-3 p-md-0">
              <div className="counter_item d-inline-block mb-3">
                <span className="counter fw-bold">10</span>
                <span className="fw-bold">M</span>
              </div>
              <h5>users</h5>
            </div>
            
          </div>
          <div className="col-6 col-sm-3 single_counter text-center">
            <div className="counter_inner p-3 p-md-0">
              <div className="counter_item d-inline-block mb-3">
                <span className="counter fw-bold">23</span>
                <span className="fw-bold">K</span>
              </div>
              <h5>Downloads</h5>
            </div>
            
          </div>
          <div className="col-6 col-sm-3 single_counter text-center">
            <div className="counter_inner p-3 p-md-0">
              <div className="counter_item d-inline-block mb-3">
                <span className="counter fw-bold">9</span>
                <span className="fw-bold">M</span>
              </div>
              <h5>customers</h5>
            </div>
            
          </div>
          <div className="col-6 col-sm-3 single_counter text-center">
            <div className="counter_inner p-3 p-md-0">
              <div className="counter_item d-inline-block mb-3">
                <span className="counter fw-bold ">12</span>
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
