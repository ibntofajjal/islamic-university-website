import React from "react";
import "./instructors.css";
import zakaria from "../../img/instructors/zakaria.png";
import mukarrom from "../../img/instructors/mukarrom.png";
import motiur from "../../img/instructors/motiur.png";
import wasiullah from "../../img/instructors/wasiullah.png";
import abdullah from "../../img/instructors/abdullah.png";
import galib from "../../img/instructors/galib.png";
import saifuddin from "../../img/instructors/saifuddin.png";
import manjur from "../../img/instructors/manjur.png";
import alhakeem from "../../img/instructors/alhakeem.png";
import saifullah from "../../img/instructors/saifullah.png";

const Instructors = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={motiur} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={alhakeem} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={zakaria} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={abdullah} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={saifuddin} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={saifullah} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={wasiullah} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={galib} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={manjur} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={mukarrom} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Instructors;
