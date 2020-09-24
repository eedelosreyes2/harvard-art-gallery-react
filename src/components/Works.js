import React, { useContext } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { WorksContext } from "./WorksContext";
import "../css/Works.css";

const Works = () => {
    const works = useContext(WorksContext);
    var worksDom = [];

    for (var i in works) {
        if (works[i].primaryimageurl) {
            worksDom.push(
                <img key={works[i].id} src={works[i].primaryimageurl} alt="" />
            );
        }
    }

    return (
        <div className="works">
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry className="masonry" gutter="30px">
                    {worksDom}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
};

export default Works;
