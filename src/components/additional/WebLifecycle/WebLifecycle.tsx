import { useEffect, useState } from "react";
import { devLifecycle } from "../../../constants/services/web";
import { Lifecycle } from "../../../types/Lifecycle";
import { WebLifecycleCard } from "../WebLifecycleCard";
import "./WebLifecycle.scss";

export const WebLifecycle = () => {
    const [lifecycle, setLifecycle] = useState<Lifecycle[]>([]);
    const [selectedTxt, setSelectedTxt] = useState<string>('');
    const [selectedId, setSelectedId] = useState<number>(0);

    useEffect(() => {
        setLifecycle(devLifecycle);
        setSelectedId(devLifecycle[0].id);
        setSelectedTxt(devLifecycle[0].text);
    }, [])

    return (
        <div className="lifecycle__container approach">
            <ul className="approach__list">
                {lifecycle.map(item => (
                    <li
                        key={item.id}
                        className="approach__list-box"
                        onClick={() => {
                            setSelectedTxt(item.text);
                            setSelectedId(item.id);
                        }}
                    >
                        <WebLifecycleCard
                            icon={item.icon}
                            title={item.title}
                            id={item.id}
                            selectedId={selectedId}
                        />
                    </li>
                ))}
            </ul>
            <div className="approach__desc">
                <p className="approach__desc-text">{selectedTxt}</p>
            </div>
        </div>
    )
}