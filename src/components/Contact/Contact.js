import React from "react";
import contact from "../../img/contact.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="contact-container">
        <div className="contact-img">
          <img src={contact} className="img-fluid" alt="" />
        </div>
        <div className="contact-details">
          {/* <h1>✦ Contact US ✦</h1> <br /> */}
          <input type="text" placeholder="Enter Your Name" /> <br />
          <input type="email" placeholder="your@mail.com" /> <br />
          <textarea
            name=""
            id=""
            cols="40"
            rows="10"
            placeholder="Your Message Here"
          ></textarea>{" "}
          <br /> <br />
          <a href className="send">
            Send ➤
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
