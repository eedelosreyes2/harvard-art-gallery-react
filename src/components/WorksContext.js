import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const URL = "https://api.harvardartmuseums.org";

export const WorksContext = createContext();

export const WorksProvider = (props) => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        axios
            .get(
                URL +
                    "/object?apikey=9b7b63e1-aa03-4f5d-8d56-f2c58a6a4efe&page=1&size=100"
                // "/classification?apikey=9b7b63e1-aa03-4f5d-8d56-f2c58a6a4efe&size=100"
            )
            .then(
                (res) => {
                    setWorks(res.data.records);
                },
                (err) => {
                    console.log(err);
                }
            );
    }, []);

    return (
        <WorksContext.Provider value={works}>
            {props.children}
        </WorksContext.Provider>
    );
};
