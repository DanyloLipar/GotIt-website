import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import "./Banner.scss";

export const Banner = () => {
  return (
    <AnimationOnScroll
      animateOnce={true}
      animateIn="animate__fadeIn"
      className="animated"
    >
      <div className="banner banner-in">
        <div className="banner__box">
          <h2 className="banner__box-title">Let`s make some great together</h2>
          <p className="banner__box-desc">
            Tell us about your problem and we get the best solution from our
            team{" "}
          </p>
          <Link to="/contact-us/" className="banner__box-link">
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </AnimationOnScroll>
  );
};
