import { createContext } from "react";

export const modes = {
    light: {
        backgroundColor: "white",
        color: "black",
    },
    dark: {
        backgroundColor: "black",
        color: "white",
    },
};

export const ModesContext = createContext(modes);
