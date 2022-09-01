import React from "react";
import { Link } from "react-router-dom";
import behance from "../../../assets/photos/footer/behance.svg";
import linkedin from "../../../assets/photos/footer/linkedin.svg";
import facebook from "../../../assets/photos/footer/facebook.svg";
import twitter from "../../../assets/photos/footer/twitter.svg";
import clutch from "../../../assets/photos/footer/clutch.svg";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container-logo logo">
          <a href="/" className="logo__reload">
            <img
              className="logo__reload-img"
              src={require("../../../assets/photos/home/logo.png")}
              alt="logo gotIt"
            />
          </a>
          <div className="footer__container-clutch clutch clutch-tablet">
            <div className="clutch__icons">
              <a
                href="https://www.behance.net/gotitagency"
                className="clutch__icons-item"
              >
                <img src={behance} alt="behance icon" />
              </a>
              <a
                href="https://www.facebook.com/gotitagency"
                className="clutch__icons-item"
              >
                <img src={facebook} alt="facebook icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/got-it-agency/"
                className="clutch__icons-item"
              >
                <img src={linkedin} alt="linkedin icon" />
              </a>
              <a
                href="https://twitter.com/AgencyGot"
                className="clutch__icons-item"
              >
                <img src={twitter} alt="clutch icon" />
              </a>
              <a
                href="https://clutch.co/profile/got-it-agency#summary"
                className="clutch__icons-item"
              >
                <img src={clutch} alt="clutch icon" />
              </a>
            </div>
            <div className="clutch__response">
              <iframe
                className="clutch__response-own"
                id="iframe-0.2920422332486563"
                width="100%"
                src="https://widget.clutch.co/widgets/get/2?ref_domain=got-it.agency&amp;uid=979763&amp;ref_path=/contact-us/"
                height="50px"
                title="Got It Agency Clutch Review Widget 2"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="footer__container-list ls">
          <ul className="ls__mobile">
            <li className="ls__mobile-item">
              <Link to="/about-us/">About us</Link>
            </li>
            <li className="ls__mobile-item">
              <Link to="/portfolio/">Portfolio</Link>
            </li>
            <li className="ls__mobile-item">
              <Link to="/contact-us/">Contact us</Link>
            </li>
          </ul>
          <div className="ls__content content">
            <ul className="content__services">
              <li className="content__services-link link">
                <Link to="#" className="link__gen">
                  Services
                </Link>
              </li>
              <li className="content__services-link link">
                <Link to="/services/ui-ux-design/" className="link__go">
                  UI/UX Design
                </Link>
              </li>
              <li className="content__services-link link">
                <Link to="/services/web-development/" className="link__go">
                  Web Development
                </Link>
              </li>
              <li className="content__services-link link">
                <Link to="/services/mobile-development/" className="link__go">
                  Mobile Development
                </Link>
              </li>
              <li className="content__services-link link">
                <Link
                  to="/services/dedicated-team-services/"
                  className="link__go"
                >
                  Dedicated Team Services
                </Link>
              </li>
            </ul>
            <ul className="content__portfolio">
              <li className="content__portfolio-link link">
                <Link to="#" className="link__gen">
                  Portfolio
                </Link>
              </li>
              <li className="content__portfolio-link link">
                <Link to="/services/ui-ux-design/" className="link__go">
                  Holy Perogy
                </Link>
              </li>
              <li className="content__portfolio-link link">
                <Link to="/services/web-development/" className="link__go">
                  Miia
                </Link>
              </li>
              <li className="content__portfolio-link link">
                <Link to="/services/mobile-development/" className="link__go">
                  Reno
                </Link>
              </li>
              <li className="content__portfolio-link link">
                <Link
                  to="/services/dedicated-team-services/"
                  className="link__go"
                >
                  Clinics
                </Link>
              </li>
            </ul>
            <ul className="content__contacts">
              <li className="content__contacts-link link ">
                <Link to="/contact-us/" className="link__gen">
                  Contact us
                </Link>
              </li>
              <li className="content__contacts-link link">
                <a href="tel:0639640354" className="link__go">
                  +380639640354
                </a>
              </li>
              <li className="content__contacts-link link">
                <a
                  href="mailto:info@got-it.agency"
                  className="link__go link__mail"
                >
                  info@got-it.agency
                </a>
              </li>
              <li className="content__contacts-link link">
                <a
                  href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB.+%D0%9A%D1%83%D0%BB%D1%8C%D0%BF%D0%B0%D1%80%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0,+230,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8028733,23.9801595,17z/data=!3m1!4b1!4m5!3m4!1s0x473ae7a632c78ad5:0x15de5d2318d0f40c!8m2!3d49.8028733!4d23.9801595"
                  target="blank"
                  className="link__go"
                >
                  Kulparviska street, 230,
                  <span className="link__go-adress">Lviv, 79000, Ukraine</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__container-clutch clutch clutch-desktop">
          <div className="clutch__icons">
            <a
              href="https://www.behance.net/gotitagency"
              className="clutch__icons-item"
            >
              <img src={behance} alt="behance icon" />
            </a>
            <a
              href="https://www.facebook.com/gotitagency"
              className="clutch__icons-item"
            >
              <img src={facebook} alt="facebook icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/got-it-agency/"
              className="clutch__icons-item"
            >
              <img src={linkedin} alt="linkedin icon" />
            </a>
            <a
              href="https://twitter.com/AgencyGot"
              className="clutch__icons-item"
            >
              <img src={twitter} alt="clutch icon" />
            </a>
            <a
              href="https://clutch.co/profile/got-it-agency#summary"
              className="clutch__icons-item"
            >
              <img src={clutch} alt="clutch icon" />
            </a>
          </div>
          <div className="clutch__response ">
            <iframe
              className="clutch__response-own"
              id="iframe-0.2920422332486563"
              width="100%"
              src="https://widget.clutch.co/widgets/get/2?ref_domain=got-it.agency&amp;uid=979763&amp;ref_path=/contact-us/"
              height="50px"
              title="Got It Agency Clutch Review Widget 2"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
