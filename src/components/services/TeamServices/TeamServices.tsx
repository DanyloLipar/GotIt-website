import { useState } from "react";
import "./TeamServices.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Banner } from "../../additional/Banner";
import { Footer } from "../../additional/Footer";
import { Header } from "../../additional/Header";
import net from "../../../assets/photos/services/web/net.svg";
import vue from "../../../assets/photos/services/web/vue.svg";
import react from "../../../assets/photos/services/web/react.svg";
import angular from "../../../assets/photos/services/web/angular.svg";
import ios from "../../../assets/photos/services/mobile/ios.svg";
import android from "../../../assets/photos/services/mobile/android.svg";
import like from "../../../assets/photos/services/team/like.svg";
import dislike from "../../../assets/photos/services/team/dislike.svg";
import arrowUp from "../../../assets/photos/services/team/arrow-up.svg";
import arrowDown from "../../../assets/photos/services/team/arrow-down.svg";
import analysis from "../../../assets/photos/services/team/analysis.svg";
import setting from "../../../assets/photos/services/team/setting.svg";
import project from "../../../assets/photos/services/team/project.svg";
import plus from "../../../assets/photos/services/team/plus.svg";
import minus from "../../../assets/photos/services/team/minus.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const TeamServices = () => {
  const [flexible, setFlexible] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const [time, setTime] = useState<boolean>(false);
  const [expertise, setExpertise] = useState<boolean>(false);
  const [broader, setBroader] = useState<boolean>(false);

  const resetAll = () => {
    setFlexible(false);
    setFocus(false);
    setTime(false);
    setExpertise(false);
    setBroader(false);
  };

  return (
    <div>
      <Header />
      <section className="opening">
        <div className="opening__container">
          <div className="opening__container-mobi">
            <img
              src={require("../../../assets/photos/services/team/team-mobi.png")}
              alt="team bg"
            />
          </div>
          <div className="opening__container-about about">
            <h1 className="about__title">
              We provide you with<span>the bust quality</span>
              <span>product</span>
            </h1>
            <p className="about__desc">
              For full-cycle product development, we assemble a team consisting
              of the project manager, business analyst, UI/UX designer, team
              lead, front and back-end developer, DevOps, and QA engineer.
            </p>
            <Link to="/contact-us/" className="about__link">
              GET IN TOUCH
            </Link>
          </div>
          <div className="opening__container-adding adding">
            <h2 className="adding__title">
              Dedicated<span>Team Service</span>
            </h2>
            <div className="adding__laptop">
              <img
                src={require("../../../assets/photos/services/team/laptop.png")}
                alt="laptop"
              />
            </div>
          </div>
        </div>
        <div className="opening__letter">
          <img
            src={require("../../../assets/photos/services/team/t.png")}
            alt="T letter"
          />
        </div>
        <div className="opening__bg">
          <img
            src={require("../../../assets/photos/services/team/tot-bg.png")}
            alt="bg"
          />
        </div>
        <div className="opening__code">
          <img
            src={require("../../../assets/photos/services/team/team.png")}
            alt="team"
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
              Dedicated team<span>approach: overview</span>
            </h2>
            <div className="build__desc-content">
              <p className="content-simple">
                Since 2018 we have delivered more than 100 projects. Thanks to
                our vast experience and well-established technology stack, we
                are ready to help you transform your business.
              </p>
              <p className="content-simple">
                We scout and hire the best technical talent to ensure your team
                is staffed with top qualified engineers.
              </p>
            </div>
          </div>
        </AnimationOnScroll>
        <div className="build__bg">
          <img
            className="build__bg-img"
            src={require("../../../assets/photos/services/team/bul-bg.png")}
            alt="build bg"
          />
        </div>
      </section>
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__fadeInUp"
        className="animated"
      >
        <section className="benef">
          <h2 className="benef__title">
            Benefits of our dedicated development team
          </h2>
          <div className="benef__container">
            <div className="benef__container-accordion accordion">
              <div
                className={classNames({
                  accordion__opener: true,
                  opener: true,
                  changer: flexible,
                })}
                onClick={() => {
                  resetAll();
                  setFlexible(!flexible);
                }}
              >
                <div className="opener__switcher">
                  <p className="opener__switcher-title">
                    Flexible development model
                  </p>
                  <div
                    className={classNames({
                      "opener__switcher-icon": true,
                      bord: flexible,
                    })}
                  >
                    {flexible ? (
                      <img src={minus} alt="minus icon" />
                    ) : (
                      <img src={plus} alt="plus icon" />
                    )}
                  </div>
                </div>
                <div
                  className={classNames({
                    opener__desc: true,
                    resize: flexible,
                  })}
                >
                  <p
                    className={classNames({
                      "opener__desc-text": true,
                      active: flexible,
                    })}
                  >
                    Adjusting the size of your remote team to your actual needs
                    has never been easier and faster than when you are paying on
                    a monthly basis. All you need is to send a month's notice to
                    add or remove staff from your project. Having a dedicated
                    development team at your disposal makes your business
                    processes more flexible and easily scalable.
                  </p>
                </div>
              </div>
              <div
                className={classNames({
                  accordion__opener: true,
                  opener: true,
                  changer: focus,
                })}
                onClick={() => {
                  resetAll();
                  setFocus(!focus);
                }}
              >
                <div className="opener__switcher">
                  <p
                    className={classNames({
                      "opener__switcher-title": true,
                      whitening: focus,
                    })}
                  >
                    Focus on core business activites
                  </p>
                  <div
                    className={classNames({
                      "opener__switcher-icon": true,
                      bord: focus,
                    })}
                  >
                    {focus ? (
                      <img src={minus} alt="minus icon" />
                    ) : (
                      <img src={plus} alt="plus icon" />
                    )}
                  </div>
                </div>
                <div
                  className={classNames({
                    opener__desc: true,
                    resize: focus,
                  })}
                >
                  <p
                    className={classNames({
                      "opener__desc-text": true,
                      active: focus,
                    })}
                  >
                    Multitasking kills productivity. Staying focused on one
                    project 100% of the time, as dedicated teams do, increases
                    productivity exponentially. Outsourcing a function to
                    experts with a proven portfolio is more economical than
                    having to spend resources on training your in-house team,
                    especially if they already have a lot on their plate.
                  </p>
                </div>
              </div>
              <div
                className={classNames({
                  accordion__opener: true,
                  opener: true,
                  changer: time,
                })}
                onClick={() => {
                  resetAll();
                  setTime(!time);
                }}
              >
                <div className="opener__switcher">
                  <p
                    className={classNames({
                      "opener__switcher-title": true,
                      whitening: time,
                    })}
                  >
                    Time and cost effectiveness
                  </p>
                  <div
                    className={classNames({
                      "opener__switcher-icon": true,
                      bord: time,
                    })}
                  >
                    {time ? (
                      <img src={minus} alt="minus icon" />
                    ) : (
                      <img src={plus} alt="plus icon" />
                    )}
                  </div>
                </div>
                <div
                  className={classNames({
                    opener__desc: true,
                    resize: time,
                  })}
                >
                  <p
                    className={classNames({
                      "opener__desc-text": true,
                      active: time,
                    })}
                  >
                    Higher rates of software developers' fees in the US and
                    Canada make this labor market less attractive for clients
                    who know the real value of money. With a dedicated software
                    development team, you needn’t pay four times as much for the
                    same work. Besides, hiring remotely spares you a lion’s
                    share of operational costs with regard to holiday and sick
                    payments, insurance policy, office space rent, and equipment
                    maintenance, hiring and on-boarding expenses, and much more.
                  </p>
                </div>
              </div>
              <div
                className={classNames({
                  accordion__opener: true,
                  opener: true,
                  changer: expertise,
                })}
                onClick={() => {
                  resetAll();
                  setExpertise(!expertise);
                }}
              >
                <div className="opener__switcher">
                  <p
                    className={classNames({
                      "opener__switcher-title": true,
                      whitening: expertise,
                    })}
                  >
                    Expertise
                  </p>
                  <div
                    className={classNames({
                      "opener__switcher-icon": true,
                      bord: expertise,
                    })}
                  >
                    {expertise ? (
                      <img src={minus} alt="minus icon" />
                    ) : (
                      <img src={plus} alt="plus icon" />
                    )}
                  </div>
                </div>
                <div
                  className={classNames({
                    opener__desc: true,
                    resize: expertise,
                  })}
                >
                  <p
                    className={classNames({
                      "opener__desc-text": true,
                      active: expertise,
                    })}
                  >
                    The primary drivers of hiring remote teams are global
                    expansion and unlimited access to the best talent worldwide.
                    Talent acquisition can be a problem due to the scarcity of a
                    local pool. By hiring an outsourcing team of developers, you
                    get the necessary experts without investing in training and
                    onboarding new employees. All you need is to outline the
                    expected level of qualification and experience and we will
                    do the rest. Our solid recruiting experience and sufficient
                    pool of high-level specialists will provide the best
                    candidates on demand.
                  </p>
                </div>
              </div>
              <div
                className={classNames({
                  accordion__opener: true,
                  opener: true,
                  changer: broader,
                })}
                onClick={() => {
                  resetAll();
                  setBroader(!broader);
                }}
              >
                <div className="opener__switcher">
                  <p
                    className={classNames({
                      "opener__switcher-title": true,
                      whitening: broader,
                    })}
                  >
                    Long-term engagement
                  </p>
                  <div
                    className={classNames({
                      "opener__switcher-icon": true,
                      bord: broader,
                    })}
                  >
                    {broader ? (
                      <img src={minus} alt="minus icon" />
                    ) : (
                      <img src={plus} alt="plus icon" />
                    )}
                  </div>
                </div>
                <div
                  className={classNames({
                    opener__desc: true,
                    resize: broader,
                  })}
                >
                  <p
                    className={classNames({
                      "opener__desc-text": true,
                      active: broader,
                    })}
                  >
                    If you are looking for stability and long-term
                    collaboration, signing a contract with a dedicated
                    development team is a winning business strategy. Finding a
                    team that corresponds to your skillset requirements, has
                    hands-on experience with the necessary technology stack, can
                    integrate with your corporate culture and vision, and align
                    with your business goals will definitely strengthen your
                    position in the market.
                  </p>
                </div>
              </div>
            </div>
            <div className="benef__container-photo">
              <img
                src={require("../../../assets/photos/services/team/dedic-benef.png")}
                alt="team"
              />
            </div>
          </div>
        </section>
      </AnimationOnScroll>
      <section className="processing">
        <div className="processing__container">
          <div className="processing__container-build build">
            <div className="build__desc">
              <h2 className="build__desc-title">Our Process</h2>
              <div className="build__desc-content">
                <p className="content-simple">
                  Once the customers get our dedicated development team for
                  hire, they are provided with instant access to our technology
                  and domain skillset and mature software development processes
                  and methodologies that can be adjusted to the customers'
                  practices and methodologies.
                </p>
              </div>
            </div>
            <div className="proc">
              <div className="proc__item">
                <div className="proc__item-arr">
                  <img src={arrowUp} alt="arow up" />
                </div>
                <div className="proc__item-icon">
                  <img src={analysis} alt="analysis" />
                </div>
                <p className="proc__item-title">Requirements analysis</p>
                <p className="proc__item-desc">
                  We'll define your business needs and project scope to prepare
                  a roadmap. We pay particular attention to your different
                  stakeholders' needs.
                </p>
              </div>
              <div className="proc__item">
                <div className="proc__item-icon">
                  <img src={setting} alt="setting" />
                </div>
                <p className="proc__item-title">
                  Setting up dedicated Development center
                </p>
                <p className="proc__item-desc">
                  Screen experts' resumes and interview the best candidates. We
                  assemble a team with optimal skill set for your particular
                  project.
                </p>
                <div className="proc__item-down">
                  <img src={arrowDown} alt="arow down" />
                </div>
              </div>
              <div className="proc__item">
                <div className="proc__item-icon">
                  <img src={project} alt="project" />
                </div>
                <p className="proc__item-title">Starting your project</p>
                <p className="proc__item-desc">
                  Got it Agency helps you choose the dedicated development team
                  services you need, from handling payroll to managing the daily
                  work schedules and infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="processing__bg">
          <img
            src={require("../../../assets/photos/services/team/tech-bg.png")}
            alt="bg"
          />
        </div>
      </section>
      <div className="bottom__bg">
        <div className="bottom__bg-image">
          <img
            src={require("../../../assets/photos/services/team/info-bg.png")}
            alt="left bg"
          />
        </div>
      </div>
      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__fadeInUp"
        className="animated"
      >
        <section className="model">
          <h2 className="model__title">Dedicated development team model</h2>
          <div className="model__container">
            <div className="model__container-advantage advantage">
              <h3 className="advantage__heading">PROS</h3>
              <ul className="advantage__list">
                <li className="advantage__list-line line">
                  <div className="line__image">
                    <img src={like} alt="like" />
                  </div>
                  <div className="line__text">
                    <p>Flexible development model</p>
                  </div>
                </li>
                <li className="advantage__list-line line">
                  <div className="line__image">
                    <img src={like} alt="like" />
                  </div>
                  <div className="line__text">
                    <p>Time and cost effectiveness</p>
                  </div>
                </li>
                <li className="advantage__list-line line">
                  <div className="line__image">
                    <img src={like} alt="like" />
                  </div>
                  <div className="line__text">
                    <p>Focus on core business activites</p>
                  </div>
                </li>
                <li className="advantage__list-line line">
                  <div className="line__image">
                    <img src={like} alt="like" />
                  </div>
                  <div className="line__text">
                    <p>Expertise</p>
                  </div>
                </li>
                <li className="advantage__list-line line">
                  <div className="line__image">
                    <img src={like} alt="like" />
                  </div>
                  <div className="line__text">
                    <p>Long-term engagement</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="cons">
              <h3 className="cons__title">CONS</h3>
              <div className="cons__box">
                <div className="cons__box-line line">
                  <div className="line__image dislike">
                    <img src={dislike} alt="dislike" />
                  </div>
                  <div className="line__text">
                    <p>Low efficiency for short-term projects</p>
                  </div>
                </div>
                <div className="cons__box-line line">
                  <div className="line__image dislike">
                    <img src={dislike} alt="dislike" />
                  </div>
                  <div className="line__text">
                    <p>Hiring the right team might take time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimationOnScroll>
      <section className="technologies">
        <div className="technologies__info info">
          <div className="info__text">
            <h2 className="info__text-title tech-title">
              The most popular technologies and competencies among our clients
            </h2>
          </div>
          <div className="info__tech">
            <div className="info__tech-block block">
              <div className="block__icon">
                <img className="block__icon-img" src={net} alt=".NET" />
              </div>
              <p className="block__txt">.NET</p>
            </div>
            <div className="info__tech-block block">
              <div className="block__icon">
                <img className="block__icon-img" src={vue} alt="Vue" />
              </div>
              <p className="block__txt">Vue</p>
            </div>
            <div className="info__tech-block block">
              <div className="block__icon">
                <img className="block__icon-img" src={react} alt="React" />
              </div>
              <p className="block__txt">React</p>
            </div>
            <div className="info__tech-block block">
              <div className="block__icon">
                <img className="block__icon-img" src={angular} alt="Angular" />
              </div>
              <p className="block__txt">Angular</p>
            </div>
            <div className="info__tech-block block">
              <div className="block__icon">
                <img className="block__icon-img" src={ios} alt="iOS" />
              </div>
              <p className="block__txt">iOS</p>
            </div>
            <div className="info__tech-block block">
              <div className="block__icon">
                <img className="block__icon-img" src={android} alt="Android" />
              </div>
              <p className="block__txt">Android</p>
            </div>
          </div>
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
