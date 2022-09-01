import { Banner } from "../../additional/Banner";
import { Footer } from "../../additional/Footer";
import { Header } from "../../additional/Header";
import { Link } from "react-router-dom";
import "./Dedicated.scss";
import teamServices from "../../../assets/photos/blog/team-services.svg";
import share from "../../../assets/photos/blog/share.svg";
import face from "../../../assets/photos/blog/face.svg";
import linkedin from "../../../assets/photos/blog/link.svg";
import twitter from "../../../assets/photos/blog/tw.svg";
import copyLink from "../../../assets/photos/blog/lin.svg";
import { useState } from "react";

export const Dedicated = () => {
    const [shareVisibility, setShareVisibility] = useState<boolean>(false);

    return (
        <div className="services">
            <Header />
            <div className="services__photo pst">
                <img
                    className="pst__image"
                    src={teamServices}
                    alt="team services"
                />
            </div>
            <div className="services__container cont">
                <div className="services__container-category category">
                    <Link to="/company/blog/" className="category__link">All</Link>
                </div>
                <h2 className="services__title headn">Dedicated Team Services</h2>
                <div className="services__container-share share">
                    <p className="share__info">23 April, 2021  . 5 min read</p>
                    <div
                        className="share__wrap"
                        onMouseEnter={() => setShareVisibility(true)}
                        onMouseLeave={() => setShareVisibility(false)}
                    >
                        <div className="share__wrap-photo">
                            <img src={share} alt="share" />
                        </div>
                        {shareVisibility && (
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
                <div className="services__conteiner-details details">
                    <p className="details__txt">So you decided to get some assistance with software development. You had a number of interviews, discussions and finally chose a vendor. Now the question is - how shall I cooperate with this vendor? What kind of engagement model is OK for me personally?</p>
                    <p className="details__txt">If you are reading this article - that means that you got interested in the Dedicated Team Model of cooperation and we would like to make it clear for you what that is and you may decide if that is exactly what you are looking for. </p>
                    <h2 className="details__gen">What is “Dedicated Team Model”?</h2>
                    <p className="details__txt">To put it in a nutshell - this business model is an agreement between the client and service provider, when the latter setups a team of engineers who will work exclusively with a client on the agreed project/scope and as a rule that is for a long-time basis<br></br> Service provider conducts a search for team members based on the client's needs and requirements. Nowadays Dedicated teams can work remotely or from the service provider's office.<br></br> The working processes of the team can be managed by a client or by a project manager from a service provider's side. The team works for the client on a regular basis, full-time.</p>
                    <p className="details__txt">If the team is managed by the client - the performance, development progress and daily tasks are easily tracked by the client themselves and this gives them full awareness of the process.<br></br> In case the project manager is involved from the service provider's side - we recommend daily sync up calls with the project manager (or weekly/biweekly with the team).<br></br> This model comes handy when the development plan isn't clearly shaped up or the requirements for the solution have to be changed. This model is also advisable when your solution requires continuous maintenance.</p>
                    <h2 className="details__gen">How does the Dedicated Team Model Work?</h2>
                    <div className="details__numeration">
                        <p className="details__numeration-text">
                            <span>01.</span>
                            The client understands his business needs and rolls out the criteria needed to cover the development which is not done in-house: tech stack and a number of employees needed.
                        </p>
                        <p className="details__numeration-text">
                            <span>02.</span>
                            The service provider collects the requirements and interviews the candidates (the client may be involved in the process or not - it is negotiable).
                        </p>
                        <p className="details__numeration-text">
                            <span>03.</span>
                            When all the interviews are settled down and the candidates are chosen the team and the client have to agree on the scope of the project and the requirements.
                        </p>
                        <p className="details__numeration-text">
                            <span>04.</span>
                            The collaboration starts when all the necessary preparations are done and the tasks are well formulated - this gives the team the possibility to work during.
                        </p>
                        <p className="details__numeration-text">
                            <span>05.</span>
                            The client has the possibility to track and control the process as well as monitor the progress, its workflow and the team.
                        </p>
                    </div>
                    <h2 className="details__gen">What are the advantages of the Dedicated Team Model?</h2>
                    <div className="details__advantages">
                        <img className="details__advantages-photo" src={require("../../../assets/photos/blog/advantages.png")} alt="adventages" />
                    </div>
                    <div className="details__desc">
                        <div className="details__desc-writn writn">
                            <h2 className="writn__title">Cost</h2>
                            <p className="writn__txt">
                                Dedicated Team is a great option when compared to hiring a team of your own. No pain with recruitment, screening, selection, interviews.
                                You already have a team carved out for your project needs.
                                Besides - no headache of wasting resources and time for recruitment.
                            </p>
                        </div>
                        <div className="details__desc-writn writn">
                            <h2 className="writn__title">Flexibility</h2>
                            <p className="writn__txt">
                                Dedicated team can be reshaped and reconfigured if there is such a need. You are also quite flexible in implementing new features or technologies for your project. You also have a full freedom to manage the team the way you want it and see it.
                                This flexibility is very handy if the long-term project doesn't have a full scope. You always have a chance for maneuver and at some points that is crucial.
                            </p>
                        </div>
                        <div className="details__desc-writn writn">
                            <h2 className="writn__title">Collaboration You Will Enjoy</h2>
                            <p className="writn__txt">
                                This model provides a new level of communication and trust between the hired employees and the client. Long-term cooperation is the one the dedicated team model presupposes.
                                The engineers get to know more of the client's needs and business purposes and can suggest insights or solutions.
                                This type of collaboration is not only efficient in terms of time and costs, but leads to development of worthy digital products and solutions.
                            </p>
                        </div>
                    </div>
                    <h2 className="details__gen">What are the disadvantages of the Dedicated Team Model?</h2>
                    <div className="details__advantages">
                        <img className="details__advantages-photo" src={require("../../../assets/photos/blog/disadvantages.png")} alt="adventages" />
                    </div>
                    <div className="details__desc">
                        <div className="details__desc-writn writn">
                            <h2 className="writn__title">Low Efficiency During Short Terms</h2>
                            <p className="writn__txt">
                                This model is to be used more efficiently if we are talking about long-term projects. It comes really handy if you are not sure about the scope, terms, deadlines as it gives you
                                a great possibility to be flexible.
                                <br></br>
                                But for the short-term projects we suggest a fixed price model.
                            </p>
                        </div>
                        <div className="details__desc-writn writn">
                            <h2 className="writn__title">You need to dedicate your time as well</h2>
                            <p className="writn__txt">
                                If you decide on the dedicated team model, then you should understand that you will need to invest a certain amount of your time in the management of the development process. If you are not ready to do so you shall think of other models of cooperation.
                            </p>
                        </div>
                        <div className="details__desc-writn writn">
                            <h2 className="writn__title">Time Zone</h2>
                            <p className="writn__txt">
                                Well, yeah. That might be a thing.
                                <br></br>
                                Most likely that you and your vendor will be in different time zones and sometimes that may be the case which can cause problems with timing for communication. Though as usual - efficient cooperation can only be achieved through the mutual effort of both parties.
                                <br></br>
                                Before choosing a particular model be sure to know what is the best environment for it.
                                Thus you will avoid unnecessary risks or confusion.
                                <br></br>
                                That is why we advise to get a clear understanding of what you want to develop/achieve, do some ground research and decide what model will suit you best.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Banner />
            <Footer />
        </div>
    )
}