import React, { Component } from "react";
import axios from "axios";

const URL = "https://api.harvardartmuseums.org";

export class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        axios
            .get(
                URL +
                    "/object?apikey=9b7b63e1-aa03-4f5d-8d56-f2c58a6a4efe&page=1"
            )
            .then(
                (res) => {
                    console.log(res.data.records);
                    this.setState({ posts: res.data.records });
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    render() {
        return (
            <div
                style={{
                    alignContent: "center",
                    backgroundColor: "red",
                    display: "flex",
                    flexWrap: "wrap",
                    height: "100%",
                    width: "95%",
                }}
            >
                {this.state.posts.map((post) => (
                    <div key={post.id}>
                        {post.title}
                        <img
                            src={post.primaryimageurl}
                            style={{ width: 250 }}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;
