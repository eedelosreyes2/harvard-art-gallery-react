import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const URL = "https://api.harvardartmuseums.org";

export const WorksContext = createContext();

export const WorksProvider = (props) => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        // Add works to localStorage if no already
        if (!localStorage.getItem("works")) {
            axios
                .get(
                    URL +
                        "/object?q=imagecount:1&apikey=9b7b63e1-aa03-4f5d-8d56-f2c58a6a4efe&page=1&size=100"
                )
                .then(
                    (res) => {
                        localStorage.setItem(
                            "works",
                            JSON.stringify(res.data.records)
                        );
                        setWorks(res.data.records);
                        // console.log(JSON.stringify(res.data.records));
                    },
                    (err) => {
                        console.log(err);
                    }
                );
        }
        // If works already in localStorage, load them
        else {
            setWorks(JSON.parse(localStorage.getItem("works")));
        }
        // localStorage.clear();
    }, []);

    return (
        <WorksContext.Provider value={works}>
            {props.children}
        </WorksContext.Provider>
    );
};
