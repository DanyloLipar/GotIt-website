import "./Ivala.scss";
import mouse from "../../assets/photos/ivala/mouse.svg";
import quizeMouse from "../../assets/photos/ivala/quiz-mouse.svg";
import dog from "../../assets/photos/ivala/quiz-dog.svg";
import firstDog from "../../assets/photos/ivala/dog-one.svg";
import secondDog from "../../assets/photos/ivala/dog-two.svg";
import sleep from "../../assets/photos/ivala/sleep.svg";
import blue from "../../assets/photos/ivala/blue.svg";
import petOne from "../../assets/photos/ivala/pet-one.svg";
import petTwo from "../../assets/photos/ivala/pet-two.svg";
import petThree from "../../assets/photos/ivala/pet-three.svg";
import petFour from "../../assets/photos/ivala/pet-four.svg";

export const Ivala = () => {
    return (
        <div className="ivala">
            <section className="ivala__int int">
                <div className="int__head">
                    <div className="int__head-platform platform">
                        <div className="platform__content">
                            <p className="platform__content-smaller">UX/UI</p>
                            <h4 className="platform__content-bigger">Landing page and Quiz platform</h4>
                            <p className="platform__content-smaller">2020</p>
                        </div>
                        <div className="platform__more">
                            <h2 className="platform__more-title">Ivala <span>Learn</span></h2>
                            <p className="platform__more-txt">Ivalalearn is 3D veterinary anatomy</p>
                            <p className="platform__more-txt">High-quality flashcard content</p>
                            <p className="platform__more-txt">Multiple choice questions are written by content-experts</p>
                            <div className="platform__more-mouse">
                                <img src={mouse} alt="mouse" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="int__placard placard">
                    <div className="placard__photo">
                        <img className="placard__photo-item" src={require("../../assets/photos/ivala/placard.png")} alt="poster" />
                        <div className="placard__photo-smooth"></div>
                    </div>
                </div>
                <div className="int__detailed detailed">
                    <div className="detailed__desc">
                        <h2 className="detailed__desc-title">The <span>challenge</span></h2>
                        <div className="detailed__desc-content">
                            <p>To create a convenient and modern way of training for veterinary students, advanced training of practicing physicians, it was necessary to provide information as convenient and correct as possible for users.</p>
                        </div>
                    </div>
                </div>
                <div className="int__paralaxed"></div>
                <div className="int__landing landing">
                    <div className="landing__container">
                        <div className="landing__container-abt abt">
                            <h2 className="abt__title">About Landing page</h2>
                            <p className="abt__text">On the site we tried to tell users what will await them in the survey platform itself, also here you can find reviews about the service itself and much other interesting information for the user.</p>
                        </div>
                        <div className="landing__container-ph ph">
                            <div className="ph__box">
                                <img className="ph__box-img" src={require("../../assets/photos/ivala/asked.png")} alt="asked questiond" />
                                <div className="ph__box-smooth smth"></div>
                            </div>
                            <div className="ph__box">
                                <img className="ph__box-img" src={require("../../assets/photos/ivala/mcq.png")} alt="mcq" />
                                <div className="ph__box-smooth smth"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="int__mob mob">
                    <div className="mob__detailed detailed">
                        <div className="detailed__desc">
                            <div className="detailed__desc-content">
                                <p>In the mobile version, we tried to display all the information as correctly as possible and follow all the canons of mobile design.</p>
                            </div>
                            <h2 className="detailed__desc-title">Mobile version</h2>
                        </div>
                    </div>
                    <div className="mob__paralaxed"></div>
                </div>
                <div className="pal">
                    <h2 className="pal__title">Color palette</h2>
                    <div className="pal__box">
                        <div className="pal__box-item">
                            <img src={blue} alt="palette" />
                        </div>
                        <div className="pal__box-item">
                            <img alt="palette" />
                        </div>
                        <div className="pal__box-item">
                            <img alt="palette" />
                        </div>
                        <div className="pal__box-item">
                            <img alt="palette" />
                        </div>
                        <div className="pal__box-item">
                            <img alt="palette" />
                        </div>
                        <div className="pal__box-item">
                            <img alt="palette" />
                        </div>
                    </div>
                </div>
                <div className="int__typography typography">
                    <h2 className="typography__title">Typography</h2>
                    <div className="typography__section">
                        <div className="typography__section-part part">
                            <h3 className="part__big">Header</h3>
                            <p className="part__medium">Montserrat/Bold</p>
                            <span className="part__small">56 px</span>
                        </div>
                        <div className="typography__section-part part">
                            <h3 className="part__big">Header 2</h3>
                            <p className="part__medium">Montserrat/Bold</p>
                            <span className="part__small">45 px</span>
                        </div>
                        <div className="typography__section-part part">
                            <h3 className="part__big">Header 3</h3>
                            <p className="part__medium">Montserrat/Bold</p>
                            <span className="part__small">32 px</span>
                        </div>
                        <div className="typography__section-part part">
                            <h3 className="part__big">Sub Header</h3>
                            <p className="part__medium">SF Pro/Medium</p>
                            <span className="part__small">22 px</span>
                        </div>
                        <div className="typography__section-part part">
                            <h3 className="part__big">Body</h3>
                            <p className="part__medium">SF Pro/Regular</p>
                            <span className="part__small">16 px</span>
                        </div>
                    </div>
                </div>
                <div className="int__flash flash">
                    <div className="flash__flashcards">
                        <img className="flash__flashcards-img" src={require("../../assets/photos/ivala/flashcards.png")} alt="flashcards" />
                        <div className="flash__flashcards-dog">
                            <img src={dog} alt="dog" />
                        </div>
                        <div className="flash__flashcards-smooth"></div>
                    </div>
                </div>
            </section>
            <section className="quiz">
                <div className="quiz__first">
                    <img className="quiz__first-img" src={require("../../assets/photos/ivala/bg-one.png")} alt="top bg" />
                </div>
                <div className="quiz__second">
                    <img className="quiz__second-img" src={require("../../assets/photos/ivala/bg-second.png")} alt="top bg" />
                </div>
                <div className="quiz__third">
                    <img className="quiz__third-img" src={require("../../assets/photos/ivala/bg-third.png")} alt="bottom bg" />
                </div>
                <div className="quiz__fourth">
                    <img className="quiz__fourth-img" src={require("../../assets/photos/ivala/bg-fourth.png")} alt="bottom bg" />
                </div>
                <div className="quiz__platform">
                    <div className="platform__more">
                        <h2 className="platform__more-title">QUIZ Platform</h2>
                        <p className="platform__more-txt">Ivalalearn is 3D veterinary anatomy</p>
                        <p className="platform__more-txt">High-quality flashcard content</p>
                        <p className="platform__more-txt">Multiple choice questions are written by content-experts</p>
                        <div className="platform__more-mouse">
                            <img src={quizeMouse} alt="mouse" />
                        </div>
                    </div>
                </div>
                <div className="quiz__msqs msqs">
                    <div className="msqs__block">
                        <div className="msqs__blocks-msq msq">
                            <img className="msq__card" src={require("../../assets/photos/ivala/quiz-one.png")} alt="card" />
                            <div className="msq__sleep sl">
                                <img className="msq__sleep-img" src={sleep} alt="sleeping symbol" />
                            </div>
                            <div className="msq__dog dg">
                                <img className="msq__dog-img" src={firstDog} alt="dog" />
                            </div>
                            <div className="msq__smooth"></div>
                        </div>
                        <div className="msqs__blocks-wrd wrd">
                            <h2 className="wrd__title">Flashcard</h2>
                            <p className="wrd__text">We tried to implement as much as possible a more convenient opportunity to study the material and in this way, the best decision was a Flashcards</p>
                        </div>
                    </div>
                    <div className="msqs__block">
                        <div className="msqs__blocks-wrd wrd">
                            <h2 className="wrd__title">MCQS</h2>
                            <p className="wrd__text">Multiple choice, objective response, or MCQ (for Multiple Choice Question) is a form of an objective assessment in which respondents are asked to select only correct answers from the choices offered as a list, this method one of the best to analyze a student knowleges</p>
                        </div>
                        <div className="msqs__blocks-msq msq">
                            <img className="msq__card" src={require("../../assets/photos/ivala/quiz-two.png")} alt="card" />
                            <div className="msq__dog dg">
                                <img className="msq__dog-img" src={secondDog} alt="dog" />
                            </div>
                            <div className="msq__smooth"></div>
                        </div>
                    </div>
                </div>
                <div className="quiz__mob mob">
                    <div className="mob__detailed detailed">
                        <div className="detailed__desc">
                            <h2 className="detailed__desc-title lght">Mobile version</h2>
                            <div className="detailed__desc-content lght-cont">
                                <p>In the mobile version, we tried to display all the information as correctly as possible and follow all the canons of mobile design.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mob__paralaxed"></div>
                </div>
            </section>
            <section className="down">
                <div className="down__bg">
                    <img className="down__bg-img" src={require("../../assets/photos/ivala/down-bg.png")} alt="waves bg" />
                </div>
                <div className="down__land land">
                    <div className="land__container">
                        <div className="land__container-after after">
                            <div className="after__desc">
                                <h2 className="after__desc-title">About Landing page</h2>
                                <p className="after__desc-text">On the site we tried to tell users what will await them in the survey platform itself, also here you can find reviews about the service itself and much other interesting information for the user.</p>
                            </div>
                            <div className="after__box bx">
                                <img className="after__box-img" src={require("../../assets/photos/ivala/land-one.png")} alt="small poster" />
                                <div className="after__box-blur blur"></div>
                                <div className="after__box-hidder"></div>
                            </div>
                        </div>
                        <div className="land__container-hang hang">
                            <img className="hang__img" src={require("../../assets/photos/ivala/land-two.png")} alt="big poster" />
                            <div className="hang__bg">
                                <img className="hang__bg-img" src={require("../../assets/photos/ivala/land-bg.png")} alt="big poster" />
                                <div className="hang__bg-smaller">
                                    <img src={require("../../assets/photos/ivala/land-three.png")} alt="dog" />
                                </div>
                                <div className="hang__bg-overlay"></div>
                            </div>
                            <div className="hang__smth smth"></div>
                            <div className="hang__pet">
                                <img className="hang__pet-img" src={petOne} alt="pet" />
                            </div>
                        </div>
                    </div>
                    <div className="land__container">
                        <div className="land__container-hang hang">
                            <img className="hang__img" src={require("../../assets/photos/ivala/land-four.png")} alt="big poster" />
                            <div className="hang__smth smth"></div>
                            <div className="hang__pet pet">
                                <img className="hang__pet-img" src={petTwo} alt="pet" />
                            </div>
                        </div>
                        <div className="land__container-after after">
                            <div className="after__desc">
                                <h2 className="after__desc-title">Ability to create custom courses</h2>
                                <p className="after__desc-text">A convenient feature in the functionality is the ability to create your own course, with this feature you can customize as much as possible all the topics of interest to you to study</p>
                            </div>
                            <div className="after__box bx">
                                <img className="after__box-img" src={require("../../assets/photos/ivala/land-five.png")} alt="small poster" />
                                <div className="after__box-blur blur"></div>
                            </div>
                        </div>
                    </div>
                    <div className="land__container">
                        <div className="land__container-after after">
                            <div className="after__desc">
                                <h2 className="after__desc-title">Separation of information by importance</h2>
                                <p className="after__desc-text">For the convenience of users, we have divided the information into basic and additional, it will save time on studying only the information needed by the student</p>
                            </div>
                            <div className="after__box bx">
                                <img className="after__box-img" src={require("../../assets/photos/ivala/land-six.png")} alt="small poster" />
                                <div className="after__box-blur blur"></div>
                            </div>
                        </div>
                        <div className="land__container-hang hang">
                            <img className="hang__img" src={require("../../assets/photos/ivala/land-seven.png")} alt="big poster" />
                            <div className="hang__smth smth"></div>
                            <div className="hang__pet pet">
                                <img className="hang__pet-img" src={petThree} alt="pet" />
                            </div>
                        </div>
                    </div>
                    <div className="land__container">
                        <div className="land__container-hang hang">
                            <img className="hang__img im" src={require("../../assets/photos/ivala/land-eight.png")} alt="big poster" />
                            <div className="hang__smth smth"></div>
                            <div className="hang__pet pet">
                                <img className="hang__pet-img" src={petFour} alt="pet" />
                            </div>
                        </div>
                        <div className="land__container-after after">
                            <div className="after__desc">
                                <h2 className="after__desc-title">Video series for users</h2>
                                <p className="after__desc-text">Video series will help you get the most out of 3D content, in these videos, you will learn how to use the basics of the 3D content interface</p>
                            </div>
                            <div className="after__box bx">
                                <img className="after__box-img" src={require("../../assets/photos/ivala/land-ninth.png")} alt="small poster" />
                                <div className="after__box-blur blur"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftr">
                <div className="ftr__check check">
                    <h1 className="ftr__check-title check__title">Check out more projects</h1>
                    <div className="check__projects">
                        <div className="check__projects-inset inset">
                            <div className="inset__photo">
                                <img
                                    className="inset__photo-item"
                                    src={require("../../assets/photos/miia/miia.png")}
                                    alt="Rehab Finder"
                                />
                            </div>
                            <h3 className="inset__title ivala-ftr-tit">Miia</h3>
                            <p className="inset__text ivala-ftr-txt">E-commerce platform</p>
                        </div>
                        <div className="check__projects-inset inset">
                            <div className="inset__photo-item">
                                <img
                                    className="inset__photo"
                                    src={require("../../assets/photos/miia/reno.png")}
                                    alt="Reno"
                                />
                            </div>
                            <h3 className="inset__title ivala-ftr-tit">Reno</h3>
                            <p className="inset__text ivala-ftr-txt">Platform for home education</p>
                        </div>
                        <div className="check__projects-inset inset">
                            <div className="inset__photo">
                                <img
                                    className="inset__photo-item"
                                    src={require("../../assets/photos/miia/newme.png")}
                                    alt="NewMe clinics"
                                />
                            </div>
                            <h3 className="inset__title ivala-ftr-tit">NewMe Clinics</h3>
                            <p className="inset__text ivala-ftr-txt">Online beauty clinic</p>
                        </div>
                        <div className="check__projects-inset inset">
                            <div className="inset__photo">
                                <img
                                    className="inset__photo-item"
                                    src={require("../../assets/photos/miia/rehab.png")}
                                    alt="Rehab Finder"
                                />
                            </div>
                            <h3 className="inset__title ivala-ftr-tit">Rehab Finder</h3>
                            <p className="inset__text ivala-ftr-txt">MCQ platform</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}