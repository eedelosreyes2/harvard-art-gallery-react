import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
export const WorksContext = createContext();

const URL = "https://api.harvardartmuseums.org";

export const WorksProvider = (props) => {
    const [works, setWorks] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios(
                URL +
                    "/object?apikey=9b7b63e1-aa03-4f5d-8d56-f2c58a6a4efe&page=1&size=100"
            );

            // setWorks(data.r)
            console.log("works" + data);
        };

        fetchData();
    }, []);

    return (
        <WorksContext.Provider value={[works, setWorks]}>
            {props.children}
        </WorksContext.Provider>
    );
};
