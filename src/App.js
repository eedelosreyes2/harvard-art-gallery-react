import React, { useState, useEffect, useContext } from "react";
import "./css/App.css";

import Header from "./components/Header";
import Works from "./components/Works";
// import Footer from "./components/Footer";

import { ModesContext } from "./components/ModesContext";
import { WorksProvider } from "./components/WorksContext";

const App = () => {
    const [dimensions, setDimensions] = useState({
        windowWidth: 0,
        windowHeight: 0,
    });
    const modes = useContext(ModesContext);
    const [mode, setMode] = useState(modes.dark);

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);

        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    var updateDimensions = () => {
        let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        let windowHeight =
            typeof window !== "undefined" ? window.innerHeight : 0;

        setDimensions({ windowWidth, windowHeight });
    };

    var toggleMode = () => {
        setMode(mode === modes.dark ? modes.light : modes.dark);
    };

    return (
        <div className="App" style={mode}>
            <Header
                dimensions={dimensions}
                mode={mode}
                onToggleMode={() => toggleMode()}
            />
            <WorksProvider>
                <Works />
            </WorksProvider>
            {/* <Footer /> */}
        </div>
    );
};

export default App;

/* TODO:
- Masonry grid
- Works transitions animations on device change
- Footer
    - Move About to Footer
- sort
- 95vw for mobile
- minimal toggle mode button animation
- Search dropdown
- Mode Lists/Search dropdown to a reusable function
*/
