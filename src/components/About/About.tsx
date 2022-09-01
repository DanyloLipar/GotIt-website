import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import { Banner } from "../additional/Banner";
import { Footer } from "../additional/Footer";
import { Header } from "../additional/Header";
import map from "../../assets/photos/about/map.svg";
import line from "../../assets/photos/about/line.svg";
import idea from "../../assets/photos/about/idea.svg";
import analysis from "../../assets/photos/about/analysis.svg";
import design from "../../assets/photos/about/design.svg";
import development from "../../assets/photos/about/development.svg";
import launch from "../../assets/photos/about/launch.svg";
import testing from "../../assets/photos/about/testing.svg";
import { AboutCarousel } from "../additional/AboutCarousel";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const About = () => {
  return (
    <div className="aquintance">
      <Header />
      <section className="aquintance__begin begin">
        <div className="begin__container">
          <div className="begin__container-bg begin-mobile">
            <img
              src={require("../../assets/photos/about/about-main.png")}
              alt="about bg"
            />
          </div>
          <div className="begin__container-dsc dsc">
            <h2 className="dsc__title">
              Got IT specialists in digital solutions
            </h2>
            <p className="dsc__text">
              Has become one of the best quality design and development Agency
              in Ukraine.
            </p>
            <p className="dsc__text">
              Our focus has always been to create enjoyable, intuitive, engaging
              and remarkable experience for people — that's what sets us apart
              from everyone else.
            </p>
            <Link to="/contact-us/" className="dsc__link">
              GET IN TOUCH
            </Link>
          </div>
        </div>
        <div className="begin__bg begin-desktop">
          <img
            className="begin__bg-photo"
            src={require("../../assets/photos/about/about-main.png")}
            alt="about bg"
          />
        </div>
      </section>
      <section className="build">
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          className="animated"
        >
          <div className="build__desc">
            <h2 className="build__desc-title">Our goal</h2>
            <div className="build__desc-content">
              <p className="content-simple">
                Our creative team of professionals will make sure to provide
                great UI/UX design & development services to those organizations
                that wish to grow. We take care of your business needs by
                bringing the right solutions.
              </p>
              <p className="content-simple">
                Our experience is constantly multiplied and allows us to grow
                and meet all modern trends, which allows our customers to get
                the perfect product.
              </p>
            </div>
          </div>
        </AnimationOnScroll>
        <div className="bd bd-desktop">
          <img
            className="bd__img"
            src={require("../../assets/photos/about/first-bg.png")}
            alt="info bckg"
          />
        </div>
        <div className="bd bd-mobile">
          <img
            className="bd__img"
            src={require("../../assets/photos/about/change-bg.png")}
            alt="info bckg"
          />
        </div>
      </section>
      <section className="aquintance__map map">
        <div className="map__line">
          <img className="map__line-img" src={line} alt="line" />
        </div>
        <div className="map__circle circle">
          <img className="circle__bckg" src={map} alt="map" />
          <div className="circle__first round">
            <p className="round__txt round__txt-desktop">Completed projects</p>
            <div className="round__num">50</div>
            <p className="round__txt round__txt-mobile">Completed projects</p>
          </div>
          <div className="circle__second round">
            <div className="round__num">30+</div>
            <p className="round__txt">Skilled professionals</p>
          </div>
          <div className="circle__third round">
            <p className="round__txt round__txt-desktop">Supported countries</p>
            <div className="round__num">11</div>
            <p className="round__txt round__txt-mobile">Supported countries</p>
          </div>
          <div className="circle__fourth round">
            <div className="round__num">5</div>
            <p className="round__txt">Years in business</p>
          </div>
        </div>
      </section>
      <AboutCarousel />
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__fadeInUp"
        className="animated"
      >
        <section className="build">
          <div className="build__back wd">
            <img
              className="build__bg-img wd__sec"
              src={require("../../assets/photos/about/wb-sec.png")}
              alt="build bg"
            />
          </div>
          <div className="build__desc">
            <h2 className="build__desc-title">Our work flow</h2>
            <div className="build__desc-content">
              <p className="content-simple">
                Once the customers get our dedicated development team for hire,
                they are provided with instant access to our technology and
                domain skillset and mature software development processes and
                methodologies that can be adjusted to the customers' practices
                and methodologies.
              </p>
            </div>
          </div>
        </section>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__fadeInUp"
        className="animated"
      >
        <section className="flowbox">
          <div className="flowbox__container">
            <div className="flowbox__container-thing thing">
              <div className="thing__image">
                <img src={idea} alt="light" />
              </div>
              <div className="thing__text">
                <p className="thing__text-title">Idea</p>
                <p className="thing__text-simple">
                  If you have always wanted to deploy innovative systems but
                  lacked resources, a custom dedicated team model is the perfect
                  choice.
                </p>
              </div>
            </div>
            <div className="flowbox__container-thing thing">
              <div className="thing__image">
                <img src={analysis} alt="analysis" />
              </div>
              <div className="thing__text">
                <p className="thing__text-title">Analysis</p>
                <p className="thing__text-simple">
                  If you have always wanted to deploy innovative systems but
                  lacked resources, a custom dedicated team model is the perfect
                  choice.
                </p>
              </div>
            </div>
            <div className="flowbox__container-thing thing">
              <div className="thing__image">
                <img src={design} alt="design" />
              </div>
              <div className="thing__text">
                <p className="thing__text-title">Design</p>
                <p className="thing__text-simple">
                  If you have always wanted to deploy innovative systems but
                  lacked resources, a custom dedicated team model is the perfect
                  choice.
                </p>
              </div>
            </div>
            <div className="flowbox__container-thing thing">
              <div className="thing__image">
                <img src={development} alt="development" />
              </div>
              <div className="thing__text">
                <p className="thing__text-title">Development</p>
                <p className="thing__text-simple">
                  If you have always wanted to deploy innovative systems but
                  lacked resources, a custom dedicated team model is the perfect
                  choice.
                </p>
              </div>
            </div>
            <div className="flowbox__container-thing thing">
              <div className="thing__image">
                <img src={testing} alt="testing" />
              </div>
              <div className="thing__text">
                <p className="thing__text-title">Testing</p>
                <p className="thing__text-simple">
                  If you have always wanted to deploy innovative systems but
                  lacked resources, a custom dedicated team model is the perfect
                  choice.
                </p>
              </div>
            </div>
            <div className="flowbox__container-thing thing">
              <div className="thing__image">
                <img src={launch} alt="launch" />
              </div>
              <div className="thing__text">
                <p className="thing__text-title">Launch</p>
                <p className="thing__text-simple">
                  If you have always wanted to deploy innovative systems but
                  lacked resources, a custom dedicated team model is the perfect
                  choice.
                </p>
              </div>
            </div>
          </div>
          <div className="flowbox__bck">
            <img
              className="flowbox__bck-img"
              src={require("../../assets/photos/about/mask-bg.png")}
              alt="info bckg"
            />
          </div>
        </section>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__fadeInUp"
        className="animated"
      >
        <section className="examples">
          <div className="examples__content">
            <div className="examples__content-texting texting">
              <h2 className="texting__title">Amazing projects we built</h2>
              <p className="texting__text">
                We've successfully implemented more 50 projects for industries
                like E-Commerce, Health Care, Advertising & marketing,
                Education, E-Learning, and many more.
              </p>
            </div>
            <div className="examples__content-container">
              <div className="row__up">
                <Link to="/portfolio/clinics/" className="row__up-small">
                  <img
                    src={require("../../assets/photos/examples/clinics.png")}
                    alt="NewMe Clinics"
                  />
                  <p>NewMe Clinics</p>
                </Link>
                <Link to="/portfolio/holy-perogy/" className="row__up-big">
                  <img
                    src={require("../../assets/photos/examples/rehab.png")}
                    alt="Holy Perogy"
                  />
                  <p>Rehab Finder</p>
                </Link>
              </div>
              <div className="row__bottom">
                <Link to="/portfolio/miia/" className="row__bottom-box box">
                  <img
                    src={require("../../assets/photos/examples/miia-shop.jpg")}
                    alt="Miia Shop"
                  />
                  <p className="box__title">Miia Shop</p>
                </Link>
                <button className="row__bottom-more more">
                  <Link to="/portfolio/" className="more__title changing">
                    See more projects
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </AnimationOnScroll>
      <Banner />
      <Footer />
    </div>
  );
};
