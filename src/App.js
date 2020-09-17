import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import Posts from "./components/Posts";
// import Footer from "./components/Footer";

export class App extends Component {
    state = {
        windowWidth: 0,
        windowHeight: 0,
    };

    componentDidMount = () => {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    };

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.updateDimensions);
    };

    updateDimensions = () => {
        let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        let windowHeight =
            typeof window !== "undefined" ? window.innerHeight : 0;

        this.setState({ windowWidth, windowHeight });
    };

    render() {
        return (
            <div className="App">
                <Header />
                <Posts />
                {/* <Footer /> */}
            </div>
        );
    }
}

export default App;

/* TODO:
- Masonry grid
- context api 
- posts transitions on device change
- 

*/
