import classNames from "classnames";
import { useEffect, useState } from "react"
import { processInfo } from "../../../constants/services/mobile"
import { Process } from "../../../types/Process"
import "./MobileSwitcher.scss";


export const MobileSwitcher = () => {
    const [info, setInfo] = useState<Process[]>([]);
    const [selectedId, setSelectedId] = useState(1);
    const [selectedTxt, setSelectedTxt] = useState<string>("");

    useEffect(() => {
        setInfo(processInfo);
        if (!selectedTxt) {
            setSelectedTxt(processInfo[0].text);
        }
    }, [])

    return (
        <section className="processing">
            <div className="processing__box">
                <h2 className="processing__box-title">The process of mobile application development</h2>
                <ul className="processing__box-swtch swtch">
                    {info.map(proc => (
                        <li className="swtch__item">
                            <div className="swtch__item-mainly mainly">
                                <button
                                    onClick={() => {
                                        setSelectedId(proc.id);
                                        setSelectedTxt("");
                                        setSelectedTxt(proc.text);
                                    }}
                                    className={classNames({
                                        "mainly__num": true,
                                        "bckg": proc.id === selectedId,
                                    })}
                                >
                                    <p
                                        className={classNames({
                                            "mainly__num-txt": true,
                                            "whiter": proc.id === selectedId,
                                        })}
                                    >
                                        {proc.id}
                                    </p>
                                </button>
                                <h2 className="mainly__name">{proc.name}</h2>
                            </div>
                        </li>
                    ))}
                </ul>
                <ul className="processing__box-unfolded unfolded">
                    {info.map(folder => (
                        <li className="unfolded__folder">
                            <div className="unfolded__folder-most most">
                                <div className="most__num">
                                    <p className="most__num-item">{folder.id}</p>
                                </div>
                                <h3 className="most__num-name">{folder.name}</h3>
                            </div>
                            <div className="unfolded__folder-text">
                                <p>{folder.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="processing__selected">
                <p className="processing__selected-txt">
                    {selectedTxt}
                </p>
            </div>
        </section>
    )
}