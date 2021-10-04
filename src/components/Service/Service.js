import React from "react";
import "./Service.css";
const Service = (props) => {
  const { name, fee, img, instractor } = props.service;
  return (
    <>
      <div className="container cards">
        <div className="card-group">
          <div className="card bg-dark text-white">
            <img src={img} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                Course Name: <i className="text-warning">{name}</i>
              </h5>
              <p className="card-text">
                <b>Instructor: </b>
                {instractor}
              </p>
              <p className="card-text">
                <b>Course Fee:</b> {fee}
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                <button className="btn btn-success enroll">Enroll Now</button>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
