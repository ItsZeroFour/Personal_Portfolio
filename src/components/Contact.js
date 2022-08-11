import React from "react";
import img from "../assets/img/astronaut-2.svg";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact__text">
        <h1>Contact With Me</h1>
        <p>Here we can contact me</p>
      </div>
      <div className="contact__blocks">
        <div className="contact__blocks-form">
          <div className="contact__block-form--text">
            <h1>Come on contact me 🚀</h1>
            <p>Fill out this form</p>
          </div>
          <div className="contact__block-form--block">
            <span>Full Name</span>
            <input />
          </div>

          <div className="contact__block-form--block">
            <span>Phone No.</span>
            <input />
          </div>

          <div className="contact__block-form--block">
            <span>Email</span>
            <input />
          </div>

          <div className="contact__block-form--block">
            <span>Your Message</span>
            <textarea></textarea>
          </div>

          <button className="button-mobile" type="submit">
            Submit
          </button>
        </div>
        <div className="contact__right">
          <img src={img} alt="astronaut" />
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
