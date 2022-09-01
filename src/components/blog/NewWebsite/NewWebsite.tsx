import { Banner } from "../../additional/Banner";
import { Footer } from "../../additional/Footer";
import { Header } from "../../additional/Header";
import { Link } from "react-router-dom";
import share from "../../../assets/photos/blog/share.svg";
import face from "../../../assets/photos/blog/face.svg";
import linkedin from "../../../assets/photos/blog/link.svg";
import twitter from "../../../assets/photos/blog/tw.svg";
import copyLink from "../../../assets/photos/blog/lin.svg";
import "./NewWebsite.scss";
import { useState } from "react";

export const NewWebsite = () => {
    const [visibility, setVisibility] = useState<boolean>(false);

    return (
        <div className="new">
            <Header />
            <div className="new__photo pst">
                <img className="pst__image" src={require("../../../assets/photos/blog/website.png")} alt="new website" />
            </div>
            <section className="new__container cont">
                <div className="services__container-category category">
                    <Link to="/company/blog/" className="category__link">All</Link>
                </div>
                <h2 className="new__title headn">We're proud to announce the launch of our new Website & Blog</h2>
                <div className="services__container-share share">
                    <p className="share__info">28 January, 2021  . 2 min read</p>
                    <div
                        className="share__wrap"
                        onMouseEnter={() => setVisibility(true)}
                        onMouseLeave={() => setVisibility(false)}
                    >
                        <div className="share__wrap-photo">
                            <img src={share} alt="share" />
                        </div>
                        {visibility && (
                            <div className="share__wrap-cross cross">
                                <a
                                    target="blank"
                                    href="http://www.facebook.com/sharer/sharer.php?u=https://got-it.agency/dedicated-team-services/&title=Dedicated%20Team%20Services"
                                    className="cross__box"
                                >
                                    <img className="cross__box-icon" src={face} alt="facebook" />
                                    <p className="cross__box-text">Facebook</p>
                                </a>
                                <a
                                    target="blank"
                                    href="http://www.linkedin.com/shareArticle?mini=true&url=https://got-it.agency/dedicated-team-services/&title=Dedicated%20Team%20Services&source=https://got-it.agency"
                                    className="cross__box"
                                >
                                    <img className="cross__box-icon" src={linkedin} alt="linkedin" />
                                    <p className="cross__box-text">Linkedin</p>
                                </a>
                                <a
                                    target="blank"
                                    href="https://twitter.com/intent/tweet?url=https://got-it.agency/dedicated-team-services//&text=Dedicated%20Team%20Services"
                                    className="cross__box"
                                >
                                    <img className="cross__box-icon" src={twitter} alt="twitter" />
                                    <p className="cross__box-text">Twitter</p>
                                </a>
                                <a
                                    onClick={(event) => {
                                        event.preventDefault();
                                        navigator.clipboard.writeText(window.location.href);
                                    }}
                                    href={window.location.href}
                                    className="cross__box"
                                >
                                    <img className="cross__box-icon" src={copyLink} alt="copy link" />
                                    <p className="cross__box-text">Copy link</p>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                <div className="new__content">
                    <p className="new__content-text">The wait is finally over! We are delighted to announce the launch of our new website and blog. The structure of the website has been redesigned making it easier and quicker for you to find the information you are after. We used
                        <span>&nbsp;</span>
                        <a href="https://medium.com/thinking-design/design-best-practices/home"> the best design practices</a> for creating our new website.
                    </p>
                    <h2 className="new__content-title">New colour scheme</h2>
                    <p className="new__content-text">We have implemented a fresh colour scheme making it look more modern and visually pleasing. Being an Information Technology Company, it is important for us to make details regarding solutions, services easily accessible to our current and prospective clients. Our goal with this new website is to provide our visitors an easier way to learn about our company and services. Our current and prospective clients will find useful information about our services and references on the homepage.</p>
                    <h2 className="new__content-title">New navigation</h2>
                    <p className="new__content-text">
                        Our new website with improved navigation will give you better access while exploring About Us, Services, Design, Development, Mobile, Portfolio, News and Updates, Contact Us. Amongst the new features the site contains integrated social media buttons for
                        <span>&nbsp;</span>
                        <a href="https://www.facebook.com/gotitagency">Facebook</a>,
                        <span>&nbsp;</span>
                        <a href="https://twitter.com/AgencyGot">Twitter</a> and <a href="https://www.linkedin.com/company/got-it-agency">Linkedin</a> to foster improved communication with our clients.
                    </p>
                    <h2 className="new__content-title">New blog</h2>
                    <p className="new__content-text">We will be constantly updating our content with helpful information, articles, company announcements and client successes in the blog section.
                        <br></br>
                        We hope you'll love it as much as we do and welcome any feedback you may have on how we can further improve the website.
                    </p>
                    <p className="new__content-strong">
                        <strong>We look forward to hearing from you!</strong>
                    </p>
                </div>
            </section>
            <Banner />
            <Footer />
        </div>
    )
}