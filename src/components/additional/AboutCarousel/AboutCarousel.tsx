import { useEffect, useState } from "react";
import { Values } from "../../../types/Values";
import { aboutValues } from "../../../constants/about";
import rightArrow from "../../../assets/photos/about/right-arrow.svg";
import leftArrow from "../../../assets/photos/about/left-arrow.svg"
import "./AboutCarousel.scss";
import classNames from "classnames";
import { AnimationOnScroll } from "react-animation-on-scroll";


export const AboutCarousel = () => {
    const [ourValues, setOurValues] = useState<Values[]>([]);
    const [selectedOne, setSelectedOne] = useState<number>(0);
    const [selectedTwo, setSelectedTwo] = useState<number>(2);
    const [allInfo, setAllInfo] = useState<Values[]>([]);
    const [slide, setSlide] = useState(false);

    useEffect(() => {
        setAllInfo(aboutValues);
        setOurValues(aboutValues.slice(selectedOne, selectedTwo));
    }, []);

    useEffect(() => {
        setOurValues(aboutValues.slice(selectedOne, selectedTwo));
    }, [selectedOne, selectedTwo]);

    return (
        <div className="values">
            <h3 className="values__title">Our values</h3>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
                <div className="values__container">
                    <div className="values__container-carous carousl carousl-desktop">
                        <div className="carousl__inner">
                            <div className="carousl__inner-swt swt">
                                <button
                                    onClick={() => {
                                        if (selectedOne !== 0) {
                                            setSelectedOne(selectedOne - 1);
                                            setSelectedTwo(selectedTwo - 1);
                                        }
                                    }}
                                    className="swt__arrow"
                                >
                                    <img className="swt__arrow-img" src={leftArrow} alt="arrow" />
                                </button>
                                <button
                                    className="swt__arrow"
                                    onClick={() => {
                                        if (selectedTwo !== 5) {
                                            setSelectedOne(selectedOne + 1);
                                            setSelectedTwo(selectedTwo + 1);
                                            setSlide(true);
                                            setSlide(false);
                                        }
                                    }}
                                >
                                    <img className="swt__arrow-img" src={rightArrow} alt="arrow" />
                                </button>
                            </div>
                        </div>
                        <ul className="carousl__list">
                            {ourValues.map(value => (
                                <li
                                    className={classNames({
                                        "carousl__list-sheet": true,
                                        "sheet": true,
                                        "slide": slide,
                                    })}
                                    key={value.id}
                                >
                                    <div className="sheet__items">
                                        <div className="sheet__items-icon">
                                            <img src={value.icon} alt="icon" />
                                        </div>
                                        <h2 className="sheet__items-name">{value.name}</h2>
                                        <p className="sheet__items-text">{value.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="carousl carousl-mobile">
                        <ul className="carousl__list">
                            {allInfo.map(value => (
                                <li
                                    className="carousl__list-sheet sheet"
                                    key={value.id}
                                >
                                    <div className="sheet__items">
                                        <div className="sheet__items-icon">
                                            <img src={value.icon} alt="icon" />
                                        </div>
                                        <h2 className="sheet__items-name">{value.name}</h2>
                                        <p className="sheet__items-text">{value.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
    )
}