import { Banner } from "../../additional/Banner";
import { Footer } from "../../additional/Footer";
import { Header } from "../../additional/Header";
import { Link } from "react-router-dom";
import "./Web.scss";
import angular from "../../../assets/photos/services/web/angular.svg";
import vue from "../../../assets/photos/services/web/vue.svg";
import php from "../../../assets/photos/services/web/php.svg";
import net from "../../../assets/photos/services/web/net.svg";
import react from "../../../assets/photos/services/web/react.svg";
import node from "../../../assets/photos/services/web/node.svg";
import down from "../../../assets/photos/services/web/down.svg";
import up from "../../../assets/photos/services/web/up.svg";
import requirementPhoto from "../../../assets/photos/services/web/requirement.svg";
import designPhoto from "../../../assets/photos/services/web/design.svg";
import devPhoto from "../../../assets/photos/services/web/dev.svg";
import launchPhoto from "../../../assets/photos/services/web/launch.svg";
import { WebLifecycle } from "../../additional/WebLifecycle";
import { useState } from "react";
import classNames from "classnames";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const Web = () => {
  const [requirements, setRequirements] = useState(false);
  const [design, setDesign] = useState(false);
  const [dev, setDev] = useState(false);
  const [launch, setLaunch] = useState(false);

  const clear = () => {
    setRequirements(false);
    setDesign(false);
    setDev(false);
    setLaunch(false);
  };

  return (
    <div>
      <Header />
      <section className="web">
        <div className="web__mobi">
          <img
            className="web__mobi-img"
            src={require("../../../assets/photos/services/web/web-mobi.png")}
            alt="web mobi logo"
          />
        </div>
        <div className="web__topic topic">
          <div className="topic__intro">
            <h1 className="topic__intro-title">
              Build modern applications that grow with your business
            </h1>
            <p className="topic__intro-text">
              We are a Web Development Company that will create every project
              that you can think of.
            </p>
            <Link to="/contact-us/" className="topic__intro-link">
              GET IN TOUCH
            </Link>
          </div>
          <div className="topic__web">
            <h2 className="topic__web-big">
              Web <span>Development</span>
            </h2>
            <div className="topic__web-image">
              <img
                src={require("../../../assets/photos/services/web/laptop.png")}
                alt="laptop"
              />
            </div>
          </div>
        </div>
        <div className="topic__letter">
          <img
            src={require("../../../assets/photos/services/web/w.png")}
            alt="w letter"
          />
        </div>
        <div className="topic__bg">
          <img
            src={require("../../../assets/photos/services/web/m-bg.png")}
            alt="bg"
          />
        </div>
        <div className="topic__code">
          <img
            src={require("../../../assets/photos/services/web/code.png")}
            alt="code"
          />
        </div>
      </section>
      <section className="build">
        <AnimationOnScroll
          animateOnce={true}
          animateIn="animate__fadeInUp"
          className="animated"
        >
          <AnimationOnScroll
            animateOnce={true}
            animateIn="animate__fadeInUp"
            className="animated"
          >
            <div className="build__desc">
              <h2 className="build__desc-title">
                We build websites <span>that sell</span>
              </h2>
              <div className="build__desc-content">
                <p className="content-simple">
                  “Do I need a site at all?” - Disturbing concerns among
                  business owners who are afraid that their investments in the
                  development of the website will not be redeemed.
                </p>
                <p className="content-simple">
                  Today, when the market is full of a lot of products, users are
                  particularly demanding, so even the slightest errors in the
                  service can cost you loyalty and reputation of the company.
                  And what about the lack of a professional website, or in
                  general, its absence? Although the site no one will surprise
                  you, but without it you will not build a reliable name.
                </p>
              </div>
            </div>
          </AnimationOnScroll>
        </AnimationOnScroll>
        <div className="build__bg">
          <img
            className="build__bg-img"
            src={require("../../../assets/photos/services/web/build-bg.png")}
            alt="build bg"
          />
        </div>
      </section>
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__fadeInUp"
        className="animated"
      >
        <section className="lifecycle">
          <h2 className="lifecycle__title">Our Web Development Lifecycle</h2>
          <WebLifecycle />
          <ul className="fallout">
            <li className="fallout__box">
              <div
                className={classNames({
                  "fallout__box-forw": true,
                  forw: true,
                  "forw-checked": requirements,
                })}
                onClick={() => {
                  clear();
                  requirements ? setRequirements(false) : setRequirements(true);
                }}
              >
                <div className="forw__first">
                  <div className="forw__first-icon">
                    <img src={requirementPhoto} alt="requirement" />
                  </div>
                  <p
                    className={classNames({
                      "forw__first-text": true,
                      whiter: requirements,
                    })}
                  >
                    Requirement discovery
                  </p>
                </div>
                <div className="forw__back">
                  {requirements ? (
                    <img className="forw__back-img" src={up} alt="down" />
                  ) : (
                    <img className="forw__back-img" src={down} alt="down" />
                  )}
                </div>
              </div>
              {requirements && (
                <p className="fallout__box-desc">
                  Our web app development team offers progressive web apps and
                  multi-tenant SaaS apps based on modern frameworks, including
                  React, Vue, Angular, and ASP.NET MVC. All the developed
                  solutions are mobile responsive, intuitive, and
                  backward/forward compatible.
                </p>
              )}
            </li>
            <li className="fallout__box">
              <div
                className={classNames({
                  "fallout__box-forw": true,
                  forw: true,
                  "forw-checked": design,
                })}
                onClick={() => {
                  clear();
                  design ? setDesign(false) : setDesign(true);
                }}
              >
                <div className="forw__first">
                  <div className="forw__first-icon">
                    <img src={designPhoto} alt="design" />
                  </div>
                  <p
                    className={classNames({
                      "forw__first-text": true,
                      whiter: design,
                    })}
                  >
                    Design & Prototype creation
                  </p>
                </div>
                <div className="forw__back">
                  {design ? (
                    <img className="forw__back-img" src={up} alt="down" />
                  ) : (
                    <img className="forw__back-img" src={down} alt="down" />
                  )}
                </div>
              </div>
              {design && (
                <p className="fallout__box-desc">
                  Prototyping helps not only to identify and formulate the main
                  direction of the design but also significantly save time. But
                  this is not the only reason to devote time to the prototype.
                  We can safely assume that the prototype will be equally useful
                  to both parties. It allows you to make the process of creating
                  a site understandable, controllable and more comfortable for
                  both parties. This development stage also helps understand how
                  the web application will look like and make the desired
                  changes if necessary.
                </p>
              )}
            </li>
            <li className="fallout__box">
              <div
                className={classNames({
                  "fallout__box-forw": true,
                  forw: true,
                  "forw-checked": dev,
                })}
                onClick={() => {
                  clear();
                  dev ? setDev(false) : setDev(true);
                }}
              >
                <div className="forw__first">
                  <div className="forw__first-icon">
                    <img src={devPhoto} alt="dev" />
                  </div>
                  <p
                    className={classNames({
                      "forw__first-text": true,
                      whiter: dev,
                    })}
                  >
                    Development & Testing
                  </p>
                </div>
                <div className="forw__back">
                  {dev ? (
                    <img className="forw__back-img" src={up} alt="down" />
                  ) : (
                    <img className="forw__back-img" src={down} alt="down" />
                  )}
                </div>
              </div>
              {dev && (
                <p className="fallout__box-desc">
                  Development and testing are at the core of Got It Agency
                  services. This is usually the most time-consuming phase
                  consisting of application coding, user documentation creation,
                  and quality assurance. Using the most advanced web development
                  technologies and solutions, including Angular, React, Vue, and
                  ASP.Net MVC, our team creates a responsive web app ready for
                  deployment. After the rigorous testing on mobile and desktop
                  devices, the application is sure to provide an ultimate user
                  experience.
                </p>
              )}
            </li>
            <li className="fallout__box">
              <div
                className={classNames({
                  "fallout__box-forw": true,
                  forw: true,
                  "forw-checked": launch,
                })}
                onClick={() => {
                  clear();
                  launch ? setLaunch(false) : setLaunch(true);
                }}
              >
                <div className="forw__first">
                  <div className="forw__first-icon">
                    <img src={launchPhoto} alt="launch" />
                  </div>
                  <p
                    className={classNames({
                      "forw__first-text": true,
                      whiter: launch,
                    })}
                  >
                    Launch & Measure
                  </p>
                </div>
                <div className="forw__back">
                  {launch ? (
                    <img className="forw__back-img" src={up} alt="down" />
                  ) : (
                    <img className="forw__back-img" src={down} alt="down" />
                  )}
                </div>
              </div>
              {launch && (
                <p className="fallout__box-desc">
                  Once the our quality assurance team shows the green flag for
                  the web app, it is deployed to the server using FTP (File
                  Transfer Protocol). At Techuz we use, deploy the web apps to
                  the servers using, Github, Bitbucket and FileZilla. The web
                  development process doesn't end after deployment. There are
                  several post-deployment tasks to be carried out by the web
                  development team such as providing the clients with the source
                  code and project documents, working on their feedbacks and the
                  post-deployment support and maintenance. This stage holds
                  equal gravity because the real purpose of the web app starts
                  once it's live for the users. Further changes according to the
                  user's feedback, support and maintenance as well as new
                  updates are equally necessary.
                </p>
              )}
            </li>
          </ul>
        </section>
      </AnimationOnScroll>
      <section className="technologies">
        <div className="technologies__info info">
          <AnimationOnScroll
            animateOnce={true}
            animateIn="animate__fadeIn"
            className="animated"
          >
            <div className="info__text">
              <h2 className="info__text-title">Technologies we use</h2>
              <p className="info__text-desc">
                Got IT provides web development services based on the latest
                JavaScript frameworks and modern back-end technologies.
              </p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOnce={true}
            animateIn="animate__fadeInLeft"
            className="animated"
          >
            <div className="info__tech">
              <div className="info__tech-block block">
                <div className="block__icon">
                  <img className="block__icon-img" src={angular} alt="ios" />
                </div>
                <p className="block__txt">Angular</p>
              </div>
              <div className="info__tech-block block">
                <div className="block__icon">
                  <img className="block__icon-img" src={vue} alt="android" />
                </div>
                <p className="block__txt">Vue</p>
              </div>
              <div className="info__tech-block block">
                <div className="block__icon">
                  <img className="block__icon-img" src={php} alt="php" />
                </div>
                <p className="block__txt">PHP</p>
              </div>
              <div className="info__tech-block block">
                <div className="block__icon">
                  <img className="block__icon-img" src={net} alt=".NET" />
                </div>
                <p className="block__txt">.NET</p>
              </div>
              <div className="info__tech-block block">
                <div className="block__icon">
                  <img className="block__icon-img" src={react} alt="React" />
                </div>
                <p className="block__txt">React</p>
              </div>
              <div className="info__tech-block block">
                <div className="block__icon">
                  <img className="block__icon-img" src={node} alt="Node.js" />
                </div>
                <p className="block__txt">Node</p>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
        <div className="technologies__bg">
          <img
            src={require("../../../assets/photos/services/mobile/tech-bg.png")}
            alt="right bg"
          />
        </div>
      </section>
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__fadeInUp"
        className="animated"
      >
        <section className="why">
          <div className="why__container">
            <h2 className="why__container-title">Why Got IT?</h2>
            <div className="why__container-txt">
              <p className="why__container-txt-small">
                Got It Agency is a software development company based in Lviv,
                Ukraine that focuses on a narrow technology, helping startups
                and enterprises to grow their business. Our goal is to increase
                the capacity of your team and provide high-performing
                professionals. We have expertise in JavaScript, .NET, and Native
                Mobile. With strong values, management experience in web
                application development, and an active local community we always
                involve talented engineers to provide quality services to our
                clients!
              </p>
            </div>
          </div>
        </section>
      </AnimationOnScroll>
      <section className="information">
        <div className="information__container">
          <div className="information__container-notitia notitia">
            <div className="notitia__head">
              <h2 className="notitia__head-title tit">
                Technological advances
                <span className="tit__number">
                  <img
                    src={require("../../../assets/photos/services/web/first.png")}
                    alt="01"
                  />
                </span>
              </h2>
            </div>
            <p className="notitia__desc">
              Our web app development team offers progressive web apps and
              multi-tenant SaaS apps based on modern frameworks, including
              React, Vue, Angular, and ASP.NET MVC. All the developed solutions
              are mobile responsive, intuitive, and backward/forward compatible.
            </p>
          </div>
          <div className="information__container-notitia notitia">
            <div className="notitia__head">
              <h2 className="notitia__head-title tit">
                Standard compliance
                <span className="tit__number">
                  <img
                    src={require("../../../assets/photos/services/web/second.png")}
                    alt="02"
                  />
                </span>
              </h2>
            </div>
            <p className="notitia__desc">
              Our web application development process relies on the latest
              standards for HTML, CSS, JavaScript (ECMAScript 2017) and HTTP.
              This helps us continuously support the quality of software
              development services and remain a reliable tech partner for our
              clients.
            </p>
          </div>
          <div className="information__container-notitia notitia">
            <div className="notitia__head">
              <h2 className="notitia__head-title tit">
                Top-notch security
                <span className="tit__number">
                  <img
                    src={require("../../../assets/photos/services/web/third.png")}
                    alt="03"
                  />
                </span>
              </h2>
            </div>
            <p className="notitia__desc">
              Got it web applications have a high level of security necessary
              for stable operation in the risky online environment. We protect
              our systems and products from the most common types of malicious
              attacks, including cross-site request forgery and cross-site
              scripting.
            </p>
          </div>
        </div>
        <div className="information__bg">
          <img
            src={require("../../../assets/photos/services/web/info-bg.png")}
            alt="info bg"
          />
        </div>
      </section>
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
                    src={require("../../../assets/photos/examples/clinics.png")}
                    alt="NewMe Clinics"
                  />
                  <p>NewMe Clinics</p>
                </Link>
                <Link to="/portfolio/holy-perogy/" className="row__up-big">
                  <img
                    className="back-desktop"
                    src={require("../../../assets/photos/examples/rehab.png")}
                    alt="Rehab Perogy"
                  />
                  <p className="back-desktop">Rehab Finder</p>
                  <img
                    className="back-mobile"
                    src={require("../../../assets/photos/examples/holy.png")}
                    alt="Holy Perogy"
                  />
                  <p className="back-mobile">Holy Perogy</p>
                </Link>
              </div>
              <div className="row__bottom">
                <Link to="/portfolio/miia/" className="row__bottom-box box">
                  <img
                    src={require("../../../assets/photos/examples/miia-shop.jpg")}
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
