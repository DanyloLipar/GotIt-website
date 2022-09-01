import { Footer } from "../../additional/Footer";
import { Header } from "../../additional/Header";
import { Link } from "react-router-dom";
import bubblesBottom from "../../../assets/photos/career/bubbles-bot.svg";
import growing from "../../../assets/photos/career/growing.svg";
import rocket from "../../../assets/photos/career/rocket.svg";
import study from "../../../assets/photos/career/study.svg";
import support from "../../../assets/photos/career/support.svg";
import location from "../../../assets/photos/career/place.svg";
import time from "../../../assets/photos/career/time.svg";
import form from "../../../assets/photos/career/form.svg";
import fire from "../../../assets/photos/career/fire.svg";
import "./CareerPage.scss";
import { Banner } from "../../additional/Banner";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const CareerPage = () => {
    return (
        <div className="career">
            <Header />
            <div className="career__container">
                <div className="career__container-entry entry">
                    <div className="entry__desc-images imagebox imagebox-mobile">
                        <div className="imagebox__poster">
                            <img className="imagebox__poster-img" src={require("../../../assets/photos/career/general.png")} alt="general" />
                        </div>
                        <div className="imagebox__list">
                            <div className="imagebox__list-second">
                                <img src={bubblesBottom} alt="bubbles" />
                            </div>
                        </div>
                    </div>
                    <div className="entry__desc">
                        <h2 className="entry__desc-title">Great opportunities  with Got It Agency</h2>
                        <p className="entry__desc-text">We are constantly evolving, keeping up with the times, if you also want to develop and gain a cool new experience, we are waiting for you in the Got It Agency Team</p>
                        <a href="#positions" className="entry__desc-link">OPEN POSITIONS</a>
                    </div>
                    <div className="entry__desc-images imagebox imagebox-desktop">
                        <div className="imagebox__poster">
                            <img className="imagebox__poster-img" src={require("../../../assets/photos/career/general.png")} alt="general" />
                        </div>
                        <div className="imagebox__list">
                            <div className="imagebox__list-second">
                                <img src={bubblesBottom} alt="bubbles" />
                            </div>
                        </div>
                    </div>
                </div>
                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                    <section className="career__container-build build">
                        <div className="build__desc">
                            <h2 className="build__desc-title">Join Got It Agency</h2>
                            <div className="build__desc-content">
                                <p className="content-simple">With us you can build a great career, we are a friendly team that always supports fresh ideas, creative solutions and desire to grow, together we can reach new heights and gain invaluable experience.</p>
                            </div>
                        </div>
                        <div className="build__bg backg">
                            <img
                                className="build__bg-img "
                                src={require("../../../assets/photos/career/career-bg.png")}
                                alt="build bg"
                            />
                        </div>
                    </section>
                </AnimationOnScroll>
                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                    <section className="conditions">
                        <div className="conditions__species species">
                            <div className="species__image">
                                <img className="species__image-icon" src={growing} alt="growing" />
                            </div>
                            <div className="species__text">
                                <h2 className="species__text-heading">Always growing</h2>
                                <p className="species__text-small">If you have always wanted to deploy innovative systems but lacked resources, a custom dedicated team model is the perfect choice.</p>
                            </div>
                        </div>
                        <div className="conditions__species species">
                            <div className="species__image">
                                <img className="species__image-icon" src={study} alt="study" />
                            </div>
                            <div className="species__text">
                                <h2 className="species__text-heading">Enjoy study</h2>
                                <p className="species__text-small">If you have always wanted to deploy innovative systems but lacked resources, a custom dedicated team model is the perfect choice.</p>
                            </div>
                        </div>
                        <div className="conditions__species species">
                            <div className="species__image">
                                <img className="species__image-icon" src={rocket} alt="cool project" />
                            </div>
                            <div className="species__text">
                                <h2 className="species__text-heading">Cool big projects</h2>
                                <p className="species__text-small">If you have always wanted to deploy innovative systems but lacked resources, a custom dedicated team model is the perfect choice.</p>
                            </div>
                        </div>
                        <div className="conditions__species species">
                            <div className="species__image">
                                <img className="species__image-icon" src={support} alt="team support" />
                            </div>
                            <div className="species__text">
                                <h2 className="species__text-heading">Cool team</h2>
                                <p className="species__text-small">If you have always wanted to deploy innovative systems but lacked resources, a custom dedicated team model is the perfect choice.</p>
                            </div>
                        </div>
                    </section>
                </AnimationOnScroll>
                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                    <section className="openings" id="positions">
                        <h2 className="openings__title">Open positions</h2>
                        <div className="openings__box">
                            <div className="opening__box-vacancy vacancy">
                                <div className="vacancy__items">
                                    <div className="vacancy__items-fire">
                                        <img src={fire} alt="hot" />
                                    </div>
                                    <h2 className="vacancy__items-big">Lead Generation Specialist / IT Sales Manager</h2>
                                    <p className="vacancy__items-small">Got It Agency is looking for a skilled Lead Generator/Sales manager who has upper-Intermediate / advanced English</p>
                                    <div className="vacancy__items-informing informing">
                                        <div className="informing__details">
                                            <img className="informing__details-pht" src={location} alt="location" />
                                            <p className="informing__details-text">Lviv, Ukraine</p>
                                        </div>
                                        <div className="informing__details">
                                            <img className="informing__details-pht" src={time} alt="location" />
                                            <p className="informing__details-text">Full time</p>
                                        </div>
                                        <div className="informing__details">
                                            <img className="informing__details-pht" src={form} alt="location" />
                                            <p className="informing__details-text">Remote</p>
                                        </div>
                                    </div>
                                    <Link to="/company/career/leadspecialist-position/" className="vacancy__more">VIEW DETAILS</Link>
                                </div>
                            </div>
                            <div className="opening__box-vacancy vacancy">
                                <div className="vacancy__items">
                                    <div className="vacancy__items-fire">
                                        <img src={fire} alt="hot" />
                                    </div>
                                    <h2 className="vacancy__items-big">Middle Front-End Developer (Angular)</h2>
                                    <p className="vacancy__items-small">We are looking for a responsible person, who wants to help our team to be more efficient and to make our clients happy.</p>
                                    <div className="vacancy__items-informing informing det">
                                        <div className="informing__details">
                                            <img className="informing__details-pht" src={location} alt="location" />
                                            <p className="informing__details-text">Lviv, Ukraine</p>
                                        </div>
                                        <div className="informing__details">
                                            <img className="informing__details-pht" src={time} alt="location" />
                                            <p className="informing__details-text">Full time</p>
                                        </div>
                                    </div>
                                    <Link to="/company/career/middle-frontend-position/" className="vacancy__more">VIEW DETAILS</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </AnimationOnScroll>
            </div>
            <Banner />
            <Footer />
        </div>
    )
}