import React from "react";
import Instructors from "../Instructors/Instructors";
import zakaria from "../../img/blob/zakaria.png";
import mukarrom from "../../img/blob/mukarrom.png";
import motiur from "../../img/blob/motiur.png";
import wasiullah from "../../img/blob/wasiullah.png";
import abdullah from "../../img/blob/abdullah.png";
import asadullah from "../../img/blob/asadullah.png";
import saifuddin from "../../img/blob/saifuddin.png";
import manjur from "../../img/blob/manjur.png";
import assim from "../../img/blob/assim.png";
import saifullah from "../../img/blob/saifullah.png";
import humble from "../../img/blob/humble.png";
import fawzan from "../../img/blob/fawzan.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="introduction my-5">
        <h1 className="text-center">✦ Islamic University ✦</h1>
        <div className="decription">
          <p className="text-center">
            The Islamic University (IU) aims to grant global access to quality
            undergraduate, graduate, and postgraduate level education programs
            for students at virtually no cost. Its mission is to change the
            Muslim Nation and the world situation through appropriate, Islamized
            education. Making authentic Islamic knowledge readily available to
            the world through the Internet solely for God’s pleasure is a noble
            life-goal and a mission well worth sacrificing all of one’s energies
            and means for. Our university is committed to spreading beneficial
            knowledge that is easily affordable and will benefit not only
            individual students but also empower entire communities. The IOU
            provides an equal opportunity for all students and makes earning a
            degree a real possibility even for the neediest of students.
            Students can benefit from tuition-free accredited Bachelor’s and
            Master’s degrees in various fields of study.
          </p>
        </div>
      </div>

      <div className="instructor-blob">
        <h1>Our Instructor</h1>
        <img src={fawzan} alt="" />
        <img src={motiur} alt="" />
        <img src={zakaria} alt="" />
        <img src={saifullah} alt="" />
        <img src={manjur} alt="" />
        <img src={humble} alt="" />
        <img src={saifuddin} alt="" />
        <img src={wasiullah} alt="" />
        <img src={assim} alt="" />
        <img src={mukarrom} alt="" />
        <img src={asadullah} alt="" />
        <img src={abdullah} alt="" />
      </div>
      <div className="instructor-section mb-5">
        <Instructors></Instructors>
      </div>
    </div>
  );
};

export default Home;
