import React, { Component } from "react";

export class Footer extends Component {
    render() {
        return (
            <div
                style={{
                    backgroundColor: "peru",
                    bottom: 0,
                    display: "flex",
                    left: 0,
                    position: "absolute",
                    width: "95%",
                }}
            >
                Designed and developed by Elijah Delos Reyes
            </div>
        );
    }
}

export default Footer;
