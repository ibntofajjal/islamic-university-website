import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <div className="notfound-container">
        <h1>404</h1>
        <p>Page Not Found</p>
        <Link to="/home">
          <button>Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
