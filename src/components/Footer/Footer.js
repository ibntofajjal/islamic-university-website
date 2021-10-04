import React from "react";
import "./Footer.css";
import logo from "../../img/logo.png";

const footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="" />
      <p>
        Copyright ©2021 All Rights Reserved | Developed By ➤{" "}
        <i className="text-warning">Joynal Bin Tofajjal</i>
      </p>
    </div>
  );
};

export default footer;
