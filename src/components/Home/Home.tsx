import { Link } from "react-router-dom";
import { Header } from "../additional/Header";
import { Banner } from "../additional/Banner";
import { Footer } from "../additional/Footer";
import cost from "../../assets/photos/home/cost.svg";
import quality from "../../assets/photos/home/quality.svg";
import clock from "../../assets/photos/home/clock.svg";
import uiUx from "../../assets/photos/home/uiUx.svg";
import conversation from "../../assets/photos/home/conversation.svg";
import mobile from "../../assets/photos/home/mobile-dev.svg";
import web from "../../assets/photos/home/web-dev.svg";
import "./Home.scss";
import { HomeCarousel } from "../additional/HomeCarousel";
import { HomeCarouselMobile } from "../additional/HomeCarouselMobile";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <section className="home__main main">
        <div className="main__container container">
          <div className="container__bg">
            <img
              className="container__bg-img"
              src={require("../../assets/photos/home/main-gen.png")}
              alt="main bg"
            />
            <img
              className="container__bg-mobi"
              src={require("../../assets/photos/home/main-mob.png")}
              alt="main bg"
            />
          </div>
          <div className="container__info">
            <h1 className="container__info-title">
              Efficient digital solutions delivered on time
            </h1>
            <p className="container__info-desc">
              We're a design and development agency, located in Eastern Europe
              that creates and supports awesome web & mobile apps.{" "}
            </p>
            <Link to="/portfolio/" className="container__info-click">
              PORTFOLIO
            </Link>
          </div>
        </div>
      </section>
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__fadeInUp"
        className="animated"
      >
        <section className="home__benefits benefits">
          <h2 className="benefits__title">Our benefits</h2>
          <p className="benefits__description">
            Which are based on years of experience in multiple industries and
            deep understanding of business needs.
          </p>
          <div className="benefits__illustration illustration">
            <div className="illustration__box">
              <img
                className="illustration__box-photo"
                src={quality}
                alt="benefits target"
              />
              <h3 className="illustration__box-name">High Quality</h3>
              <p className="illustration__box-small">
                We invest all our years of experience in solving your problems,
                which ultimately allows you to get a perfect product.
              </p>
            </div>
            <div className="illustration__box">
              <img
                className="illustration__box-photo"
                src={clock}
                alt="benefits clock"
              />
              <h3 className="illustration__box-name">Our Punctuality</h3>
              <p className="illustration__box-small">
                We make every effort to ensure that the product is not only high
                quality but also finished on time
              </p>
            </div>
            <div className="illustration__box">
              <img
                className="illustration__box-photo"
                src={cost}
                alt="benefits money"
              />
              <h3 className="illustration__box-name">Cost Efficiency</h3>
              <p className="illustration__box-small">
                Great solutions for your business can be available to you, and
                we prove it
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
        <section className="home__help help">
          <h2 className="help__title">We are here to help you with</h2>
          <p className="help__desc">
            Our dedicated team of UI/UX designers, web & mobile developers and
            project managers will ensure that the job gets done with the highest
            level of professionalism and most cost affordably.
          </p>
          <div className="help__items items">
            <Link
              to="/services/ui-ux-design/"
              className="help__items-example example"
            >
              <span className="example__box">
                <img
                  className="example__box-picture"
                  src={uiUx}
                  alt="UI/UX Design"
                />
              </span>
              <p className="example__txt">UX/UI Design</p>
            </Link>
            <Link
              to="/services/dedicated-team-services/"
              className="help__items-example example"
            >
              <span className="example__box">
                <img
                  className="example__box-picture"
                  src={conversation}
                  alt="Conversation"
                />
              </span>
              <p className="example__txt">Dedicated team services</p>
            </Link>
            <Link
              to="/services/mobile-development/"
              className="help__items-example example"
            >
              <span className="example__box">
                <img
                  className="example__box-picture"
                  src={mobile}
                  alt="Mobile Development"
                />
              </span>
              <p className="example__txt">Mobile Development </p>
            </Link>
            <Link
              to="/services/web-development/"
              className="help__items-example example"
            >
              <span className="example__box">
                <img
                  className="example__box-picture"
                  src={web}
                  alt="Web Development"
                />
              </span>
              <p className="example__txt">Web Development</p>
            </Link>
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
                    src={require("../../assets/photos/examples/holy.png")}
                    alt="Holy Perogy"
                  />
                  <p>Holy Perogy</p>
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
                <Link to="/portfolio/" className="row__bottom-more more">
                  <p className="more__title changing">See more projects</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__fadeInUp"
        className="animated"
      >
        <section className="home__carousel-desktop">
          <HomeCarousel />
        </section>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__fadeInUp"
        className="animated"
      >
        <section className="home__carousel-mobile">
          <HomeCarouselMobile />
        </section>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__fadeInUp"
        className="animated"
      >
        <section className="home__testimonials testimonials">
          <div className="testimonials__container">
            <div className="testimonials__container-exps expos">
              <h2 className="expos__gen">Testimonials</h2>
              <p className="expos__simple">
                Clutch.co is a leading platform that conducts independent,
                in-depth interviews of clients of tech services companies{" "}
              </p>
            </div>
            <div className="testimonials__container-response resp">
              <iframe
                id="iframe-0.8731522158075802"
                className="resp__table"
                width="100%"
                src="https://widget.clutch.co/widgets/get/4?ref_domain=got-it.agency&amp;uid=979763&amp;ref_path=/"
                height="600px"
                scrolling="no"
                title="[iFrameSizer]iframe-0.8731522158075802:0:0:mouseleave:305:8844"
              ></iframe>
            </div>
          </div>
        </section>
      </AnimationOnScroll>
      <Banner />
      <Footer />
    </div>
  );
};
