import React, { Component } from "react";
import "../css/Header.css";

export class Header extends Component {
    state = {
        tabs: [
            {
                id: 0,
                title: "Classification",
                list: [
                    "(not asigned)",
                    "Accessories (non-art)",
                    "Albums",
                    "Amulets",
                    "Architectural",
                    "Elements",
                    "Archival Materials",
                    "Artists' Tools",
                    "Audiovisual Works",
                    "Books",
                    "Boxes",
                    "Calligraphy",
                    "Cameos",
                    "Coins",
                    "Drawings",
                    "Fragments",
                    "Furnishings",
                    "Furniture",
                    "Gems",
                    "Graphic Design",
                ],
            },
            {
                id: 1,
                title: "Work Type",
                list: ["work"],
            },
            {
                id: 2,
                title: "Technique/Medium",
                list: ["teqc"],
            },
            {
                id: 3,
                title: "Period",
                list: [],
            },
            {
                id: 4,
                title: "Place",
                list: [],
            },
            {
                id: 5,
                title: "Century",
                list: [],
            },
            {
                id: 6,
                title: "Culture",
                list: [],
            },
            {
                id: 7,
                title: "Gallery",
                list: [],
            },
        ],
        showLists: false,
        currentId: -1,
        currentList: [],
    };

    handleDropDown = (id) => {
        var showLists = this.state.showLists;
        var currentId = this.state.currentId;
        var currentList = this.state.tabs[id].list;

        if (showLists && id === currentId) {
            showLists = false;
        } else {
            showLists = true;
            currentId = id;
        }

        this.setState({ showLists, currentId, currentList });
    };

    handleSearchDropDown = () => {};

    render() {
        const mode = this.props.mode;
        const width = this.props.dimensions.windowWidth;

        // Searchbar dynamic styling
        var placeholder = "Search by keyword, title, artist, or gallery";
        var inputStyle = { ...mode };

        if (width <= 950) {
            placeholder = "Search";
            inputStyle.width = "90px";
        } else if (width <= 768) {
            // ipad size
        }

        return (
            <div className="header" style={mode}>
                {/* Above line */}
                <div className="upper">
                    {/* Harvard Art Museums Logo */}
                    <a
                        className="logo"
                        style={mode}
                        href="https://www.harvardartmuseums.org"
                        target="__blank"
                        rel="noopener noreferrer"
                    >
                        <h1 className="h">H</h1>
                        <span className="diag-line" />
                    </a>

                    {/* About and Mode */}
                    <ul className="about-mode">
                        <li>
                            <a
                                href="https://github.com/eedelosreyes2/harvard-art-gallery-react"
                                style={mode}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                About
                            </a>
                        </li>
                        <li onClick={() => this.props.onToggleMode()}>Mode</li>
                    </ul>
                </div>

                {/* Below line */}
                {width <= 768 ? (
                    <div className="lower arrow-wrapper">
                        <i className="arrow down" />
                    </div>
                ) : (
                    <div className="lower">
                        {/* Tabs */}
                        <div className="tabs">
                            {this.state.tabs.map((tab) => {
                                const { id, title, list } = tab;
                                return (
                                    <div
                                        className="tab"
                                        key={id}
                                        onClick={() => this.handleDropDown(id)}
                                    >
                                        {title}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Searchbar */}
                        <div className="search-bar">
                            <input
                                placeholder={placeholder}
                                style={inputStyle}
                            />
                        </div>
                    </div>
                )}

                {/* Lists */}
                {this.state.showLists ? (
                    <div
                        className="list"
                        style={{
                            backgroundColor: "rebeccapurple",
                            height: "40px",
                            width: "100%",
                        }}
                    >
                        {this.state.currentList.map((item) => {
                            return <span>{item}</span>;
                        })}
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Header;
