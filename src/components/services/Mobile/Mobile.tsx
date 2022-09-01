import { Banner } from "../../additional/Banner";
import { Footer } from "../../additional/Footer";
import { Header } from "../../additional/Header";
import { Link } from "react-router-dom";
import "./Mobile.scss";
import ios from "../../../assets/photos/services/mobile/ios.svg";
import android from "../../../assets/photos/services/mobile/android.svg";
import swift from "../../../assets/photos/services/mobile/swift.svg";
import native from "../../../assets/photos/services/mobile/native.svg";
import kotlin from "../../../assets/photos/services/mobile/kotlin.svg";
import flutter from "../../../assets/photos/services/mobile/flutter.svg";
import { MobileSwitcher } from "../../additional/MobileSwitcher";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const Mobile = () => {
  return (
    <div>
      <Header />
      <section className="start">
        <div className="start__gen gen">
          <div className="gen__mobi">
            <img
              className="gen__mobi-img"
              src={require("../../../assets/photos/services/mobile/mobile-mob.png")}
              alt="mobile bckg"
            />
          </div>
          <div className="gen__intro">
            <h1 className="gen__intro-title">
              Does your business have a mobile app?
            </h1>
            <p className="gen__intro-text">
              {" "}
              We develop fully functional mobile applications, available online
              to millions of users in any country of the world.{" "}
            </p>
            <Link to="/contact-us/" className="gen__intro-link">
              GET IN TOUCH
            </Link>
          </div>
          <div className="gen__phone">
            <p className="gen__phone-mob">Mobile</p>
            <div className="gen__phone-image">
              <img
                src={require("../../../assets/photos/services/mobile/main-mob.png")}
                alt="mobile phone"
              />
            </div>
          </div>
        </div>
        <div className="start__letter">
          <img
            src={require("../../../assets/photos/services/mobile/m.png")}
            alt="letter m"
          />
        </div>
        <p className="start__additional">App</p>
        <div className="start__bg">
          <img
            src={require("../../../assets/photos/services/mobile/top-bg.png")}
            alt="start bg"
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
            <h2 className="build__desc-title">
              Your Business is always close to you!
            </h2>
            <div className="build__desc-content">
              <p className="content-simple">
                Nowadays, almost 52% of users search for information and
                products with the help of mobile devices, while 97% of those
                people finish their target intervention in the smartphones, and
                therefore, entrepreneurs receive 72% of their profit from mobile
                applications. They are developed to attract and keep new
                customers' attention by transforming them from new clients into
                regular ones.
              </p>
            </div>
          </div>
        </AnimationOnScroll>
        <div className="build__bg">
          <img
            className="build__bg-img"
            src={require("../../../assets/photos/services/mobile/build-bg.png")}
            alt="build bg"
          />
        </div>
      </section>
      <section className="phones">
        <div className="phones__container">
          <div className="phones__container-images images images-desktop">
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__fadeInUp"
              className="animated"
            >
              <div className="images__ios">
                <img
                  src={require("../../../assets/photos/services/mobile/ios-phone.png")}
                  alt="ios phone"
                />
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={true}
              animateIn="animate__fadeInUp"
              className="animated"
            >
              <div className="images__android">
                <img
                  src={require("../../../assets/photos/services/mobile/android-phone.png")}
                  alt="android phone"
                />
              </div>
            </AnimationOnScroll>
          </div>
          <AnimationOnScroll
            animateOnce={true}
            animateIn="animate__fadeInUp"
            className="animated"
          >
            <div className="phones__container-pres pres">
              <div className="pres__item">
                <h2 className="pres__item-title">iOS Development</h2>
                <p className="pres__item-desc">
                  iOS is the fastest growing mobile operating system in the
                  world. Therefore, by reaching the target audience with the
                  help of a mobile application, you can count on the strategic
                  growth of your business.
                </p>
              </div>
              <div className="pres__item">
                <h2 className="pres__item-title">Android Development</h2>
                <p className="pres__item-desc">
                  Android is a more common mobile platform due to the lower
                  threshold cost of devices. By developing an application for
                  Android, you will get a multimillion audience.
                </p>
              </div>
            </div>
          </AnimationOnScroll>
          <div className="phones__container-images images images-mobile">
            <div className="images__ios">
              <img
                src={require("../../../assets/photos/services/mobile/ios-phone.png")}
                alt="ios phone"
              />
            </div>
            <div className="images__android">
              <img
                src={require("../../../assets/photos/services/mobile/android-phone.png")}
                alt="android phone"
              />
            </div>
          </div>
        </div>
      </section>
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
                Top-notch mobile applications are built using the highest
                standards
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
                  <img className="block__icon-img" src={ios} alt="ios" />
                </div>
                <p className="block__txt">iOS</p>
              </div>
              <div className="info__tech-block block">
                <div className="block__icon">
                  <img
                    className="block__icon-img"
                    src={android}
                    alt="android"
                  />
                </div>
                <p className="block__txt">Android</p>
              </div>
              <div className="info__tech-block block">
                <div className="block__icon">
                  <img className="block__icon-img" src={swift} alt="swift" />
                </div>
                <p className="block__txt">Swift</p>
              </div>
              <div className="info__tech-block block">
                <div className="block__icon">
                  <img
                    className="block__icon-img"
                    src={native}
                    alt="react native"
                  />
                </div>
                <p className="block__txt">React Native</p>
              </div>
              <div className="info__tech-block block">
                <div className="block__icon">
                  <img className="block__icon-img" src={kotlin} alt="kotlin" />
                </div>
                <p className="block__txt">Kotlin</p>
              </div>
              <div className="info__tech-block block">
                <div className="block__icon">
                  <img
                    className="block__icon-img"
                    src={flutter}
                    alt="flutter"
                  />
                </div>
                <p className="block__txt">Flutter</p>
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
        <div className="technologies__bg-left">
          <img
            src={require("../../../assets/photos/services/mobile/bgm.png")}
            alt="left bg"
          />
        </div>
      </section>
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__fadeInUp"
        className="animated"
      >
        <MobileSwitcher />
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
