import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`./courses.JSON`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="container">
          <h1 className="text-center our-courses container">✦ OUR COURSES ✦</h1>
        </div>
        <div className="map-services">
          {services.map((service) => (
            <Service key={service.key} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
