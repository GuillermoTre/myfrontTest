import classes from "./bloggers.module.css";
import React from "react";
import BloggersList from "../../components/Bloggers/BloggersList";

class Bloggers extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    bloggers: [
      {
        id: "1",
        name: "Juan Perez",
        website: "juanperez.io",
        picture_url: "https://placekitten.com/200/300",
        email: "conact@juanperez.io",
        friends: [],
      },
      {
        id: "2",
        name: "Amano Pikamee",
        website: "pikamee.io",
        picture_url: "https://placekitten.com/200/300",
        email: "contact@pikamee.io",
        friends: ["1"],
      },
      {
        id: "3",
        name: "Tony Stark",
        website: "tonystark.io",
        picture_url: "https://placekitten.com/200/300",
        email: "contact@tonystark.io",
        friends: ["1", "2"],
      },
    ],
  };

  render() {
    return (
      <div>
        <BloggersList bloggers={this.state.bloggers} />
      </div>
    );
  }
}

export default Bloggers;
