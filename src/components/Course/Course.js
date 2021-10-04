import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import "./Course.css";

const Course = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch(`./course.JSON`)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="map-course">
      {courses.map((course) => (
        <Card key={course.key} course={course}></Card>
      ))}
    </div>
  );
};

export default Course;
