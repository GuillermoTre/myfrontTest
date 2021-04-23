import classes from "./bloggers.module.css";
import React from "react";
import BloggersList from "../../components/Bloggers/BloggersList";
import BloggerDetail from "../../components/Bloggers/Blogger/BloggerDetail";

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
    showBloggerDetail: false,
    showNewBlogger: false,
    selectedId: 0,
  };

  showBloggerDetail = () => {
    this.setState({ showBloggerDetail: true });
  };

  hideBloggerDetail = () => {
    this.setState({ showBloggerDetail: false });
  };

  showNewBlogger = () => {
    this.setState({ showNewBlogger: true });
  };

  hideNewBlogger = () => {
    this.setState({ showNewBlogger: false });
  };

  setBloggerId = (id) => {
    this.setState({ selectedId: id });
  };

  addFriend = (bloggerId, friend) => {
    const bloggerIndex = this.state.bloggers.findIndex((p) => {
      return p.id === bloggerId;
    });

    const blogger = {
      ...this.state.bloggers[bloggerIndex],
    };

    blogger.friends.push(friend);

    const bloggers = [...this.state.bloggers];
    bloggers[bloggerIndex] = blogger;

    this.setState({ bloggers: bloggers });
  };

  render() {
    return (
      <div className={classes.main}>
        {this.state.showBloggerDetail && (
          <BloggerDetail
            onHide={this.hideBloggerDetail}
            id={this.state.selectedId}
            bloggers={this.state.bloggers}
            onAddFriend={this.addFriend}
          />
        )}
        <BloggersList
          bloggers={this.state.bloggers}
          onShow={this.showBloggerDetail}
          onSelectBlogger={this.setBloggerId}
        />
      </div>
    );
  }
}

export default Bloggers;
