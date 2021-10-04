import React from "react";

const Card = (props) => {
  const { name, instractor, fee, img } = props.course;
  return (
    <div>
      <div className="container cards">
        <div className="card-group">
          <div className="card bg-dark text-white">
            <img src={img} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <h6 className="card-title">
                Course Name: <i className="text-warning">{name}</i>
              </h6>
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
    </div>
  );
};

export default Card;
