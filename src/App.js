import React, { Component } from "react";
import "./css/App.css";

import Header from "./components/Header";
import Works from "./components/Works";
// import Footer from "./components/Footer";

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

    return (
        <WorksProvider>
            <div className="App">
                <Header />
                <Works />
                {/* <Footer /> */}
            </div>
        </WorksProvider>
    );
};

export default App;

/* TODO:
- Masonry grid
- context api
- Works transitions on device change
- Footer
*/
