import { useState } from "react";
import { Link } from "react-router-dom";
import { Banner } from "../../additional/Banner";
import { Footer } from "../../additional/Footer";
import { Header } from "../../additional/Header";
import poster from "../../../assets/photos/blog/b2b.svg";
import share from "../../../assets/photos/blog/share.svg";
import face from "../../../assets/photos/blog/face.svg";
import linkedin from "../../../assets/photos/blog/link.svg";
import twitter from "../../../assets/photos/blog/tw.svg";
import copyLink from "../../../assets/photos/blog/lin.svg";
import "./TopCompany.scss"

export const TopCompany = () => {
    const [visibility, setVisibility] = useState(false);

    return (
        <div className="finest">
            <Header />
            <div className="finest__photo pst">
                <img className="pst__image" src={poster} alt="b2b company" />
            </div>
            <section className="finest__container cont">
                <div className="services__container-category category">
                    <Link to="/company/blog/" className="category__link">All</Link>
                </div>
                <h2 className="goodfirms__container-title headn">Got It Agency Named to Clutch 2019 Top Eastern European</h2>
                <div className="goodfirms__container-share share">
                    <p className="share__info">12 January, 2021  . 2 min read</p>
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
                <div className="finest__content">
                    <p className="finest__content-text">Got It Agency is proud to announce that we have been recognized as a top company in Ukraine by Clutch, a leading ratings and reviews platform.</p>
                    <p className="finest__content-text">
                        <em>"We are a young company and honestly didn't expect to receive this award. We are very surprised; it's fantastic!” said Got It Agency's CEO. “We strive to deliver the best possible results to our clients, and this award proves that approach works. We are honoured to receive this award. However, we know it's not just our award, but also our clients' award. We are convinced that сlient feedback is the most important metric for success, and we will continue to use it to improve our services."</em>
                    </p>
                    <p className="finest__content-text">The Got It Agency Team is always seeking out new ways to improve and provide the best possible
                        <span>&nbsp;</span><a>web design</a> , UI/UX design, and web development services to our clients. We would like to thank our clients who have left reviews and contributed to growing our company.
                    </p>
                    <p className="finest__content-text">Clutch is a leading B2B rating and reviews platform that uses client interviews to rank and evaluate service providers. Their reviews help buyers find the
                        <span>&nbsp;</span><a>best designers in Ukraine</a>  to make their projects a reality.
                    </p>
                    <p className="finest__content-text">Potential buyers can also
                        <span>&nbsp;</span><a>view The Manifest's research</a>  to find more information on service providers. Clutch's sister site serves as an information hub for new entrants into the space. Our work is also highlighted at Visual Objects, a site where companies can post work portfolios.

                    </p>
                    <div className="finest__content-rating">
                        <img src={require("../../../assets/photos/blog/clutch.jpg")} alt="clutch rating" />
                    </div>
                    <p className="finest__content-text">Potential customers can
                        <a>look at Visual Objects' list</a>  of top Ukrainian web designers and find our portfolio. If you want to start a project, make sure to <a>contact us</a> today!
                    </p>
                </div>
            </section>
            <Banner />
            <Footer />
        </div>
    )
}