import React, { useContext } from "react";
import { WorksContext } from "./WorksContext";
import "../css/Works.css";

const Works = () => {
    const works = useContext(WorksContext);
    var worksDom = [];

    for (var i in works) {
        if (works[i].primaryimageurl) {
            worksDom.push(
                <div key={works[i].id} className="content">
                    <img src={works[i].primaryimageurl} alt="" />
                </div>
            );
        }
    }

    return <div className="grid">{worksDom}</div>;
};

export default Works;
