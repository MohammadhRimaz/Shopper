import "./NewsLetter.css";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subsribe to our Newsletter and stay updated!</p>
      <div>
        <input type="email" placeholder="Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
