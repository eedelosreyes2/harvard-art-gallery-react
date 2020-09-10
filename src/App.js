import React from "react";
import "./App.css";

import Header from "./components/Header";
import Posts from "./components/Posts";
// import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Posts />
            {/* <Footer /> */}
        </div>
    );
}

export default App;
