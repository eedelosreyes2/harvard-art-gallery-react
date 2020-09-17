import React, { useState, useContext } from "react";
// import axios from "axios";

// const URL = "https://api.harvardartmuseums.org";
import { WorksContext } from "./WorksContext";

const Works = () => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         posts: [],
    //     };
    // }

    // componentDidMount() {
    //     this.getPosts();
    // }

    // getPosts = () => {
    //     axios
    //         .get(
    //             URL +
    //                 "/object?apikey=9b7b63e1-aa03-4f5d-8d56-f2c58a6a4efe&page=1&size=100"
    //             // "/classification?apikey=9b7b63e1-aa03-4f5d-8d56-f2c58a6a4efe&size=100"
    //         )
    //         .then(
    //             (res) => {
    //                 // console.log(res.data);
    //                 this.setState({ posts: res.data.records });
    //             },
    //             (err) => {
    //                 console.log(err);
    //             }
    //         );
    // };

    const [works, setWorks] = useContext(WorksContext);

    return (
        // Grid
        <div
            className="grid"
            style={{
                // backgroundColor: "red",
                display: "grid",
                // gridAutoRows: "250px",
                gridGap: "10px",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                justifyItems: "center",
                paddingBottom: "30px",
                position: "absolute",
                top: "120px",
                width: "85%",
                zIndex: 0,
            }}
        >
            {/* {works} */}
            {console.log(works)}
            {/* {this.state.posts.map((post) =>
                post.primaryimageurl ? (
                    <div
                        key={post.id}
                        className="content"
                        style={{ padding: "15px" }}
                    >
                        <img
                            src={post.primaryimageurl}
                            alt=""
                            style={{ width: 250 }}
                        />
                    </div>
                ) : null
            )} */}
        </div>
    );
};

export default Works;
