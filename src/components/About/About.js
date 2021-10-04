import React from "react";
import "./About.css";
import whoWeAre from "../../img/wea.jpg";
import Instructors from "../Instructors/Instructors";

const About = () => {
  return (
    <div className="container">
      <div className="about">
        <div className="text-content">
          <h1>Who We Are</h1>
          <p>
            The Islamic University (IU) aims to grant global access to quality
            undergraduate, graduate, and postgraduate level education programs
            for students at virtually no cost. Its mission is to change the
            Muslim Nation and the world situation through appropriate, Islamized
            education. Making authentic Islamic knowledge readily available to
            the world through the Internet solely for God’s pleasure is a noble
            life-goal and a mission well worth sacrificing all of one’s energies
            and means for.
          </p>
        </div>
        <div className="img">
          <img src={whoWeAre} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="instructors">
        <div className="instructors-text">
          <h1>✦ OUR INSTRUCTORS ✦</h1>
        </div>
        <Instructors></Instructors>
      </div>
    </div>
  );
};

export default About;
