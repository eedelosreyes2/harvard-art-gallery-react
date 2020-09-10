import React, { Component } from "react";

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
    }

    handleDropDown = (id) => {
        var showLists = this.state.showLists;
        var currentId = this.state.currentId;
        var currentList = this.state.tabs[id].list;

        if (showLists && id === currentId) {
            showLists = false;
        } else if (showLists) {
            showLists = true;
            currentId = id;
        } else {
            showLists = true;
            currentId = id;
        }

        this.setState({ showLists, currentId, currentList });
    };

    render() {
        var toPathUrl = "/";
        var toPath = "Cart";

        if (window.location.pathname === "/") {
            toPathUrl = "/cart";
        } else if (window.location.pathname === "/cart") {
            toPath = "Home";
        }

        return (
            <div
                style={{
                    backgroundColor: "black",
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    top: 0,
                    width: "95%",
                    zIndex: 9,
                }}
            >
                {/* Above line */}
                <div
                    style={{
                        alignItems: "center",
                        borderBottom: "1px solid gray",
                        display: "flex",
                        height: "50px",
                        justifyContent: "space-between",
                    }}
                >
                    {/* Harvard Art Museums Logo */}
                    <a href="https://www.harvardartmuseums.org" target="_blank">
                        <h1
                            style={{
                                display: "inline-block",
                                fontSize: "30px",
                            }}
                        >
                            H
                        </h1>
                        <span
                            style={{
                                borderBottom: "1px solid white",
                                display: "inline-block",
                                transform:
                                    "rotate(-45deg) translate(-1px, -11px)",
                                WebkitTransform:
                                    "rotate(-45deg) translate(-1px, -11px)",
                                width: "40px",
                            }}
                        />
                    </a>

                    {/* Cart, About, and Mode */}
                    <div style={{ alignItems: "center", display: "flex" }}>
                        <a href={toPathUrl} style={{ marginRight: "15px" }}>
                            {toPath}
                        </a>
                        <a
                            href="https://github.com/eedelosreyes2/harvard-art-gallery-react"
                            target="_blank"
                            style={{ marginRight: "15px" }}
                        >
                            About
                        </a>
                        <span>Mode</span>
                    </div>
                </div>

                {/* Below line */}
                <div
                    style={{
                        alignItems: "flex-start",
                        display: "flex",
                        height: "40px",
                        justifyContent: "space-between",
                        paddingTop: "10px",
                        width: "100%",
                    }}
                >
                    {/* Tabs */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            paddingTop: "5px",
                        }}
                    >
                        {this.state.tabs.map((tab) => {
                            const { id, title, list } = tab;
                            return (
                                <div
                                    key={id}
                                    onClick={() => this.handleDropDown(id)}
                                    style={{
                                        cursor: "pointer",
                                        marginBottom: "10px",
                                        marginRight: "25px",
                                    }}
                                >
                                    {title}
                                </div>
                            );
                        })}
                    </div>

                    {/* Searchbar */}
                    <div style={{ alignItems: "center", display: "flex" }}>
                        <input
                            placeholder="Search by keyword, title, artist, or gallery"
                            style={{
                                background: "transparent",
                                border: "none",
                                color: "white",
                                height: "20px",
                                outline: "none",
                                textAlign: "right",
                                width: "250px",
                            }}
                        />
                    </div>
                </div>

                {/* Lists */}
                {this.state.showLists ? (
                    <div
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
