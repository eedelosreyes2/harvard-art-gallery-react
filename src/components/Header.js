import React, { Component } from "react";

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {
                    title: "Classification",
                    list: [],
                },
                {
                    title: "Work Type",
                    list: [],
                },
                {
                    title: "Technique/Medium",
                    list: [],
                },
                {
                    title: "Period",
                    list: [],
                },
                {
                    title: "Place",
                    list: [],
                },
                {
                    title: "Century",
                    list: [],
                },
                {
                    title: "Culture",
                    list: [],
                },
                {
                    title: "Gallery",
                    list: [],
                },
            ],
        };
    }

    render() {
        return (
            <div
                style={{
                    // backgroundColor: "yellow",
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    top: 0,
                    width: "95%",
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
                    <div>
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
                                    "rotate(-45deg) translate(0px, -10px)",
                                width: "40px",
                            }}
                        />
                    </div>

                    {/* Dark Mode and Cart */}
                    <div style={{ alignItems: "center", display: "flex" }}>
                        <span style={{ paddingRight: "15px" }}>Cart</span>
                        <span style={{ paddingRight: "15px" }}>About</span>
                        <span>Mode</span>
                    </div>
                </div>

                {/* Below line */}
                <div
                    style={{
                        alignItems: "flex-start",
                        display: "flex",
                        height: "50px",
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
                        }}
                    >
                        {this.state.tabs.map((tab) => {
                            const { id, title, list } = tab;
                            return (
                                <div
                                    key={id}
                                    style={{
                                        paddingBottom: "10px",
                                        paddingRight: "25px",
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
            </div>
        );
    }
}

export default Header;
