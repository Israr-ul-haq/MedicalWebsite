import React from "react";
import Counter from "../Counter";

const Statistic1 = () => {
  return (
    <div id="statistic-1" className="bg-scroll statistic-section division">
      <div className="container white-color">
        <div className="row">
          {/* STATISTIC BLOCK #1 */}
          <div className="col-md-6 col-lg-3">
            <div
              className="statistic-block icon-lg wow fadeInUp"
              data-wow-delay="0.4s"
            >
              {/* Icon  */}
              <span className="flaticon-062-cardiogram-3" />
              {/* Text */}
              <h5 className="statistic-number">
                9, <Counter end={632} />
              </h5>
              <p className="txt-400">Happy Patients</p>
            </div>
          </div>
          {/* STATISTIC BLOCK #2 */}
          <div className="col-md-6 col-lg-3">
            <div
              className="statistic-block icon-lg wow fadeInUp"
              data-wow-delay="0.6s"
            >
              {/* Icon  */}
              <span className="flaticon-137-doctor" />
              {/* Text */}
              <h5 className="statistic-number">
                <Counter end={178} />
              </h5>
              <p className="txt-400">Qualified Doctors</p>
            </div>
          </div>
          {/* STATISTIC BLOCK #3 */}
          <div className="col-md-6 col-lg-3">
            <div
              className="statistic-block icon-lg wow fadeInUp"
              data-wow-delay="0.8s"
            >
              {/* Icon  */}
              <span className="flaticon-065-hospital-bed" />
              {/* Text */}
              <h5 className="statistic-number">
                <Counter end={864} />
              </h5>
              <p className="txt-400">Clinic Rooms</p>
            </div>
          </div>
          {/* STATISTIC BLOCK #4 */}
          <div className="col-md-6 col-lg-3">
            <div
              className="statistic-block icon-lg wow fadeInUp"
              data-wow-delay="1s"
            >
              {/* Icon  */}
              <span className="flaticon-040-placeholder" />
              {/* Text */}
              <h5 className="statistic-number">
                <Counter end={473} />
              </h5>
              <p className="txt-400">Local Partners</p>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </div>
  );
};

export default Statistic1;
