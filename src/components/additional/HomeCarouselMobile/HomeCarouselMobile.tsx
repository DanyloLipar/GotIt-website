import { useEffect, useMemo, useState } from "react";
import { Award } from "../../../types/Award";
import { allAwards } from "../../../constants/home";
import classNames from "classnames";


export const HomeCarouselMobile = () => {
    const [awards, setAwards] = useState<Award[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [switcher, setSwitcher] = useState(true);

    const updateIndex = () => {
        currentIndex === 5 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
    }

    useEffect(() => {
        setAwards(allAwards);
    }, [])

    useEffect(() => {
        if (switcher) {
            const slide = setTimeout(() => {
                const item = awards[0];
                currentIndex === 5 ? setAwards(allAwards) : setAwards([...awards.slice(1, 8), item]);
                updateIndex();
            }, 2000);
            return () => {
                clearTimeout(slide);
            };
        }
    }, [awards]);

    return (
        <section className="awards">
            <p className="awards__title">Our awards</p>
            <div className="awards__carousel">
                <ul className="awards__carousel-chart chart">
                    {awards.slice(0, 3).map(award => (
                        <li
                            className="chart__item"
                            key={award.id}
                        >
                            <img src={award.image} alt={award.alt} />
                        </li>
                    ))}
                </ul>
                <div
                    className="awards__carousel-run run"
                >
                    <button
                        onClick={() => {
                            setCurrentIndex(0);
                            setSwitcher(false);
                            setAwards(allAwards.slice(0, 3))
                        }}
                        className={classNames({
                            "run__item": true,
                            "run__item-active": currentIndex === 0
                        })}
                    ></button>
                    <button
                        onClick={() => {
                            setCurrentIndex(1);
                            setSwitcher(false);
                            setAwards(allAwards.slice(1, 4))
                        }}
                        className={classNames({
                            "run__item": true,
                            "run__item-active": currentIndex === 1
                        })}
                    ></button>
                    <button
                        onClick={() => {
                            setCurrentIndex(2);
                            setSwitcher(false);
                            setAwards(allAwards.slice(2, 5))
                        }}
                        className={classNames({
                            "run__item": true,
                            "run__item-active": currentIndex === 2
                        })}
                    ></button>
                    <button
                        onClick={() => {
                            setCurrentIndex(3);
                            setSwitcher(false);
                            setAwards(allAwards.slice(3, 6))
                        }}
                        className={classNames({
                            "run__item": true,
                            "run__item-active": currentIndex === 3
                        })}
                    ></button>
                    <button
                        onClick={() => {
                            setCurrentIndex(4);
                            setSwitcher(false);
                            setAwards(allAwards.slice(4, 7))
                        }}
                        className={classNames({
                            "run__item": true,
                            "run__item-active": currentIndex === 4
                        })}
                    ></button>
                    <button
                        onClick={() => {
                            setCurrentIndex(5);
                            setSwitcher(false);
                            setAwards(allAwards.slice(5, 8))
                        }}
                        className={classNames({
                            "run__item": true,
                            "run__item-active": currentIndex === 5
                        })}
                    ></button>
                </div>
            </div>
        </section >
    )
}