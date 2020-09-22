import React, { useState, useContext } from "react";
import "./css/App.css";

import Header from "./components/Header";
import Works from "./components/Works";
// import Footer from "./components/Footer";

import { ModesContext } from "./components/ModesContext";
import { WorksProvider } from "./components/WorksContext";

const App = () => {
    // state = {
    //     windowWidth: 0,
    //     windowHeight: 0,
    // };

    // componentDidMount = () => {
    //     this.updateDimensions();
    //     window.addEventListener("resize", this.updateDimensions);
    // };

    // componentWillUnmount = () => {
    //     window.removeEventListener("resize", this.updateDimensions);
    // };

    // updateDimensions = () => {
    //     let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    //     let windowHeight =
    //         typeof window !== "undefined" ? window.innerHeight : 0;

    //     this.setState({ windowWidth, windowHeight });
    // };
    const modes = useContext(ModesContext);
    const [mode, setMode] = useState(modes.dark);

    var toggleMode = () => {
        setMode(mode === modes.dark ? modes.light : modes.dark);
    };

    return (
        <div className="App" style={mode}>
            <Header mode={mode} onToggleMode={() => toggleMode()} />
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
- Works transitions on device change
- Footer
- remove all inline css
- sort
*/
