import { useState } from "react";
import { Link } from "react-router-dom";
import { Banner } from "../../additional/Banner";
import { Footer } from "../../additional/Footer";
import { Header } from "../../additional/Header";
import poster from "../../../assets/photos/blog/top-web.svg"
import share from "../../../assets/photos/blog/share.svg";
import face from "../../../assets/photos/blog/face.svg";
import linkedin from "../../../assets/photos/blog/link.svg";
import twitter from "../../../assets/photos/blog/tw.svg";
import copyLink from "../../../assets/photos/blog/lin.svg";
import "./GoodFirms.scss";

export const GoodFirms = () => {
    const [visibility, setVisibility] = useState(false);

    return (
        <div className="goodfirm">
            <Header />
            <div className="goodfirm__photo pst">
                <img className="pst__image" src={poster} alt="goodfirm" />
            </div>
            <section className="goodfirm__container cont">
                <div className="services__container-category category">
                    <Link to="/company/blog/" className="category__link">All</Link>
                </div>
                <h2 className="goodfirms__container-title headn">Got It Agency Has Paved Its Way to Thrive by Offering Great Business Solutions: GoodFirms   </h2>
                <div className="goodfirms__container-share share">
                    <p className="share__info">23 September, 2021  . 6 min min read</p>
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
                <div className="goodfirm__content">
                    <p className="goodfirm__content-text">Providing robust solutions to clients and making their business stand out in the market would soon endow Got It Agency as one of the top web development companies in Ukraine at GoodFirms.</p>
                    <h2 className="goodfirm__content-title">Overview:</h2>
                    <p className="goodfirm__content-text">Incorporated in 2018 and based in LVIV,
                        <span>&nbsp;</span><a href="https://www.goodfirms.co/company/got-it-agency">Got It Agency</a> is a UI/UX Design and Development agency. It provides remote teams for businesses that want to outsource short-term and long-term UI/UX design & development tasks. The professionals consider each project as a challenge. They don't just design and code - but make all clients' ideas come to life.
                    </p>
                    <p className="goodfirm__content-text">GIA's focus has always been to create an enjoyable, intuitive, engaging, and remarkable experience for a person; that's what sets the firm apart from everyone else.</p>
                    <p className="goodfirm__content-text">The organization's experience is constantly multiplied and allows the firm to grow and meet all modern trends, which helps the customers to get the perfect product.</p>
                    <p className="goodfirm__content-text">With five years of experience and 30+ skilled professionals, GIA has developed 50+ projects for clients in 11 countries. Once the customers get the dedicated development team, they are provided with instant access to the technology and domain skillset to provide them mature software development processes and methodologies to adjust to customers' business practices and methods.</p>
                    <h2 className="goodfirm__content-title">GoodFirms' Research Process:</h2>
                    <p className="goodfirm__content-text">Piloting an endless list of service categories, confirmed reviews, and research papers to find the right business companion,
                        <span>&nbsp;</span><a href="https://www.goodfirms.co/">GoodFirms</a>, with its ground-breaking evaluation method, appraises the registered businesses based on three criteria - Quality, Reliability, and Ability.
                    </p>
                    <p className="goodfirm__content-text">Likewise, GoodFirms has evaluated Got It Agency and found it to be the leading company amongst the app design companies in LVIV at GoodFirms.</p>
                    <p className="goodfirm__content-text">Moreover, the researchers also concluded that the firm would soon get recognition amongst the leading web development and web designing companies in Ukraine and LVIV, respectively, at GoodFirms.</p>
                    <h2 className="goodfirm__content-title">Web Development:</h2>
                    <p className="goodfirm__content-text">GIA's web app development team gives progressive web apps and multi-tenant SaaS apps based on advanced frameworks, including React, Vue, Angular, and ASP.NET MVC. All the generated solutions are mobile responsive, spontaneous, and backward/forward congenial.</p>
                    <p className="goodfirm__content-text">At GIA, the expert web developers do prototyping that helps identify and formulate the main direction of the design and significantly save time. With prototyping, the expert web developers allow clients to make the process of creating a site readable, controllable, and more comfortable for customers and their users. This advancement stage also helps understand how the web application will look to make the coveted changes asked by clients.</p>
                    <p className="goodfirm__content-text">GIA's team produces a responsive web app ready for deployment utilizing the most exceptional web development technologies and solutions, including Angular, React, Vue, and ASP.Net MVC. After meticulous testing on mobile and desktop devices, the web developers deliver the outcomes that provide an ultimate user experience.</p>
                    <p className="goodfirm__content-text">
                        Thus, having such a proficient team of web developers, GoodFirms researchers believe that Got It Agency would soon thrive as one of the top
                        <span>&nbsp;</span><a href="https://www.goodfirms.co/directory/country/top-website-development-companies/ua"> web development companies in Ukraine</a>
                        at GoodFirms.
                    </p>
                    <h2 className="goodfirm__content-title">Web Design:</h2>
                    <p className="goodfirm__content-text">GIA follows a human-centered approach to design. The expert designing team understands that user interface design should aim to make the user's interaction as simple and efficient as possible to accomplish user goals. This means the team cares about the end customer and strives to deliver products that people genuinely enjoy using.</p>
                    <p className="goodfirm__content-text">The expert artistic team makes sure that the layout of a user interface design should also be set out for users so that details can be found in a logical position by the user. Got It Agency user experience firm creates the highest-converting websites that look stunning and work for clients' business.</p>
                    <p className="goodfirm__content-text">
                        The team conducts extensive field studies to understand how clients' users think and create a well-polished interface prototype that moves with the user and a thorough design blueprint. Thus, backed by such a creative professional team providing clients with robust solutions would soon endow Got It Agency as one of
                        <span>&nbsp;</span><a href="https://www.goodfirms.co/directory/city/top-web-design-companies/lviv">LVIV's top web design agencies</a> at GoodFirms.
                    </p>
                    <h2 className="goodfirm__content-title">App Design:</h2>
                    <p className="goodfirm__content-text">At GIA, expert designers strive to design fully functional mobile applications available online to millions of users in any country of the world. They are designed to attract and keep new customers' attention by transforming them into regular ones.</p>
                    <p className="goodfirm__content-text">The professional designing team helps clients reach the target audience with the help of an out-of-the-box design, which they can count on clients' business's strategic growth. The experts' team first does a detailed study of clients' competitor's app to figure out what features are absent in their app to include it in clients' apps to make them stand out.</p>
                    <p className="goodfirm__content-text">Furthermore, the team decides how to successfully consolidate clients' goals with users' needs and make the mobile app design profitable for both sides. They outline the creation of all screens and states of the elements by using the recommendations of Google and Apple to design the application.</p>
                    <p className="goodfirm__content-text">
                        Thus, taking care that the graphics solutions are understandable and convenient to deliver a design that will set clients' business apart from the competition endows Got It Design to lead as one of the thriving
                        <span>&nbsp;</span><a href="https://www.goodfirms.co/directory/city/mobile-app-design-companies/lviv">mobile app design companies in LVIV</a> at GoodFirms.
                    </p>
                    <h2 className="goodfirm__content-title">About GoodFirms</h2>
                    <p className="goodfirm__content-text">Washington, D.C.-based GoodFirms is a maverick B2B research and reviews firm that aligns its efforts in finding the web development, app designing, development, and web designing agencies delivering unparalleled services to its clients. GoodFirms' extensive research process ranks the companies, boosts their online reputation, and helps service seekers pick the right technology partner that meets their business needs.</p>
                    <h2 className="goodfirm__content-title">About the Author</h2>
                    <p className="goodfirm__content-text">Anna Stark is presently working as a Content Writer with GoodFirms - Washington D.C.-based B2B Research Company, which bridges the gap between service seekers and service providers. Anna's current role lingers to shape every company's performance and key attributes into words. She firmly believes in the magic of words and equips new strategies that work, always with ideas, something new to carve, and something original to decorate the firm's identity.</p>
                </div>
            </section>
            <Banner />
            <Footer />
        </div>
    )
}